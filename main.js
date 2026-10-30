/**
 * ==============================================================================
 * APLICAÇÃO DE LISTA DE TAREFAS (TO-DO LIST) DIDÁTICA E PROFISSIONAL
 * ==============================================================================
 * 
 * Funcionalidades integradas:
 * 1. Persistência de Dados (LocalStorage) para Tarefas e Tema.
 * 2. Abas de Filtragem ("Todas", "Pendentes", "Concluídas").
 * 3. Busca em Tempo Real (Filtragem instantânea enquanto digita).
 * 4. Prazos de Entrega (Due Date) com detecção automática de atraso.
 * 5. Edição Completa de Tarefas (Texto, Prioridade e Prazo) via Modal.
 * 6. Gamificação: Chuva de Confetes comemorativa ao atingir 100% de conclusão!
 * ==============================================================================
 */

// Importação do pacote canvas-confetti instalado via npm
import confetti from 'canvas-confetti';

// ------------------------------------------------------------------------------
// 1. ESTADO DA APLICAÇÃO (State Management)
// ------------------------------------------------------------------------------
const STORAGE_KEY_TAREFAS = 'todo_app_tarefas';
const STORAGE_KEY_TEMA = 'todo_app_tema';

// Array central de tarefas em memória viva
let tarefas = carregarTarefasDoStorage();

// Estado dos filtros e busca
let filtroAtual = 'todas'; // 'todas' | 'pendentes' | 'concluidas'
let termoBusca = '';       // Texto digitado na barra de pesquisa

// Guarda o ID da tarefa sendo editada no modal (null se nenhuma)
let tarefaEmEdicaoId = null;

/**
 * Carrega a lista de tarefas salva no localStorage do navegador.
 * Transforma o texto JSON salvo de volta para um Array de Objetos JavaScript.
 */
function carregarTarefasDoStorage() {
  const dadosSalvos = localStorage.getItem(STORAGE_KEY_TAREFAS);
  if (dadosSalvos) {
    try {
      return JSON.parse(dadosSalvos);
    } catch (erro) {
      console.error('Erro ao ler tarefas do localStorage:', erro);
      return [];
    }
  }
  return [];
}

/**
 * Salva a lista de tarefas atualizada no localStorage.
 */
function salvarTarefasNoStorage() {
  localStorage.setItem(STORAGE_KEY_TAREFAS, JSON.stringify(tarefas));
}

// ------------------------------------------------------------------------------
// 2. SELEÇÃO DE ELEMENTOS DO DOM
// ------------------------------------------------------------------------------

// Formulário de Cadastro e Campos
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskPriority = document.getElementById('task-priority');
const taskDueDate = document.getElementById('task-due-date');

// Toolbar de Busca e Abas de Filtro
const searchInput = document.getElementById('search-input');
const filterTabs = document.querySelectorAll('.filter-tab');
const countAllSpan = document.getElementById('count-all');
const countPendingSpan = document.getElementById('count-pending');
const countCompletedSpan = document.getElementById('count-completed');

// Lista, Badges e Estados Vazios
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const noResultsState = document.getElementById('no-results-state');
const tasksCountBadge = document.getElementById('tasks-count-badge');

// Barra de Progresso
const progressBar = document.getElementById('progress-bar');
const progressPercentage = document.getElementById('progress-percentage');
const progressSummary = document.getElementById('progress-summary');

// Botão de Tema
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// Modal de Edição
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const editTaskInput = document.getElementById('edit-task-input');
const editTaskPriority = document.getElementById('edit-task-priority');
const editTaskDueDate = document.getElementById('edit-task-due-date');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');

// ------------------------------------------------------------------------------
// 3. FUNÇÕES AUXILIARES DE DATAS E PRAZOS
// ------------------------------------------------------------------------------

/**
 * Retorna a data atual local no formato "YYYY-MM-DD" para comparação justa.
 */
function obterDataHojeFormatada() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

/**
 * Verifica se uma tarefa está atrasada.
 * Uma tarefa é considerada atrasada se tiver prazo, não estiver concluída e
 * sua data for anterior ao dia de hoje.
 * 
 * @param {string} dueDate - Prazo no formato "YYYY-MM-DD".
 * @param {boolean} completed - Se a tarefa já foi concluída.
 * @returns {boolean}
 */
function verificarAtraso(dueDate, completed) {
  if (!dueDate || completed) return false;
  const hoje = obterDataHojeFormatada();
  return dueDate < hoje;
}

/**
 * Converte data de "YYYY-MM-DD" para o formato brasileiro amigável "DD/MM/AAAA".
 * @param {string} dateString
 * @returns {string}
 */
function formatarDataBrasil(dateString) {
  if (!dateString) return '';
  const partes = dateString.split('-');
  if (partes.length !== 3) return dateString;
  const [ano, mes, dia] = partes;
  return `${dia}/${mes}/${ano}`;
}

// ------------------------------------------------------------------------------
// 4. GAMIFICAÇÃO: EFEITO DE CONFETES
// ------------------------------------------------------------------------------
/**
 * Dispara uma animação comemorativa de confetes coloridos na tela
 * quando o usuário completa 100% de suas atividades!
 */
function dispararConfetes() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// ------------------------------------------------------------------------------
// 5. REGRAS DE NEGÓCIO: ADICIONAR, MARCAR, EXCLUIR E EDITAR
// ------------------------------------------------------------------------------

/**
 * Cria e adiciona uma nova tarefa.
 * @param {string} texto - Nome da atividade.
 * @param {string} prioridade - 'baixa', 'media' ou 'alta'.
 * @param {string} dueDate - Prazo no formato 'YYYY-MM-DD' (opcional).
 */
function adicionarTarefa(texto, prioridade, dueDate) {
  const textoLimpo = texto.trim();

  // Validação: não permitir tarefa sem texto
  if (textoLimpo === '') {
    alert('Por favor, informe a descrição da tarefa antes de adicionar!');
    return;
  }

  const novaTarefa = {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    text: textoLimpo,
    priority: prioridade,
    dueDate: dueDate || null,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tarefas.unshift(novaTarefa);
  salvarTarefasNoStorage();
  renderizar();
}

/**
 * Alterna entre concluída / pendente.
 * Dispara confetes se a ação levar o progresso a 100%!
 * @param {string} id
 */
function alternarConclusaoTarefa(id) {
  let acabouDeConcluir = false;

  tarefas = tarefas.map((tarefa) => {
    if (tarefa.id === id) {
      const novoStatus = !tarefa.completed;
      if (novoStatus === true) {
        acabouDeConcluir = true;
      }
      return { ...tarefa, completed: novoStatus };
    }
    return tarefa;
  });

  salvarTarefasNoStorage();
  renderizar();

  // Verifica se o progresso atingiu 100% como resultado desta conclusão
  if (acabouDeConcluir && tarefas.length > 0) {
    const todasConcluidas = tarefas.every((t) => t.completed);
    if (todasConcluidas) {
      dispararConfetes();
    }
  }
}

/**
 * Remove uma tarefa da lista.
 * @param {string} id
 */
function removerTarefa(id) {
  tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
  salvarTarefasNoStorage();
  renderizar();
}

/**
 * Abre o modal de edição preenchido com as informações atuais da tarefa.
 * @param {string} id
 */
function abrirModalEdicao(id) {
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) return;

  tarefaEmEdicaoId = id;
  editTaskInput.value = tarefa.text;
  editTaskPriority.value = tarefa.priority;
  editTaskDueDate.value = tarefa.dueDate || '';

  editModal.classList.remove('hidden');
  editTaskInput.focus();
}

/**
 * Fecha o modal de edição e limpa o ID em edição.
 */
function fecharModalEdicao() {
  editModal.classList.add('hidden');
  tarefaEmEdicaoId = null;
}

/**
 * Salva as alterações feitas no modal de edição.
 */
function salvarEdicao(texto, prioridade, dueDate) {
  const textoLimpo = texto.trim();
  if (textoLimpo === '') {
    alert('A descrição da tarefa não pode ficar vazia!');
    return;
  }

  tarefas = tarefas.map((tarefa) => {
    if (tarefa.id === tarefaEmEdicaoId) {
      return {
        ...tarefa,
        text: textoLimpo,
        priority: prioridade,
        dueDate: dueDate || null
      };
    }
    return tarefa;
  });

  salvarTarefasNoStorage();
  fecharModalEdicao();
  renderizar();
}

// ------------------------------------------------------------------------------
// 6. FILTRAGEM E BUSCA SIMULTÂNEAS
// ------------------------------------------------------------------------------
/**
 * Retorna as tarefas filtradas combinando a aba atual com o termo de busca digitado.
 * @returns {Array} tarefas que atendem a ambos os critérios.
 */
function obterTarefasFiltradas() {
  return tarefas.filter((tarefa) => {
    // 1. Filtro pela aba selecionada
    let passaFiltroAba = true;
    if (filtroAtual === 'pendentes') {
      passaFiltroAba = !tarefa.completed;
    } else if (filtroAtual === 'concluidas') {
      passaFiltroAba = tarefa.completed;
    }

    // 2. Filtro pelo termo de busca em tempo real (não diferencia maiúsculas de minúsculas)
    let passaBusca = true;
    if (termoBusca !== '') {
      passaBusca = tarefa.text.toLowerCase().includes(termoBusca);
    }

    return passaFiltroAba && passaBusca;
  });
}

// ------------------------------------------------------------------------------
// 7. ATUALIZAÇÃO DA BARRA DE PROGRESSO DINÂMICA
// ------------------------------------------------------------------------------
function atualizarProgresso() {
  const total = tarefas.length;

  if (total === 0) {
    progressBar.style.width = '0%';
    progressPercentage.textContent = '0%';
    progressSummary.textContent = '0 de 0 tarefas concluídas';
    return;
  }

  const concluidas = tarefas.filter((t) => t.completed).length;
  const porcentagem = Math.round((concluidas / total) * 100);

  progressBar.style.width = `${porcentagem}%`;
  progressPercentage.textContent = `${porcentagem}%`;
  progressSummary.textContent = `${concluidas} de ${total} tarefa${
    total > 1 ? 's' : ''
  } concluída${concluidas > 1 ? 's' : ''}`;
}

// ------------------------------------------------------------------------------
// 8. RENDERIZAÇÃO DA INTERFACE (Render Loop)
// ------------------------------------------------------------------------------
function renderizar() {
  // 1. Atualiza a barra de progresso
  atualizarProgresso();

  // 2. Atualiza contadores numéricos nas abas de filtro
  const totalTodas = tarefas.length;
  const totalPendentes = tarefas.filter((t) => !t.completed).length;
  const totalConcluidas = tarefas.filter((t) => t.completed).length;

  countAllSpan.textContent = totalTodas;
  countPendingSpan.textContent = totalPendentes;
  countCompletedSpan.textContent = totalConcluidas;

  // 3. Obtém o conjunto de tarefas visíveis conforme filtro e busca
  const tarefasVisiveis = obterTarefasFiltradas();
  tasksCountBadge.textContent = tarefasVisiveis.length;

  // 4. Controle dos Estados Vazios
  if (totalTodas === 0) {
    emptyState.style.display = 'block';
    noResultsState.style.display = 'none';
    taskList.innerHTML = '';
    return;
  }

  emptyState.style.display = 'none';

  if (tarefasVisiveis.length === 0) {
    noResultsState.style.display = 'block';
    taskList.innerHTML = '';
    return;
  }

  noResultsState.style.display = 'none';

  // 5. Injeta os cartões no HTML
  taskList.innerHTML = '';

  tarefasVisiveis.forEach((tarefa) => {
    const isAtrasada = verificarAtraso(tarefa.dueDate, tarefa.completed);

    const li = document.createElement('li');
    li.className = `task-item ${tarefa.completed ? 'completed' : ''} ${
      isAtrasada ? 'is-overdue' : ''
    }`;
    li.dataset.id = tarefa.id;

    const prioridadeLabels = {
      baixa: 'Baixa',
      media: 'Média',
      alta: 'Alta'
    };
    const prioridadeFormatada = prioridadeLabels[tarefa.priority] || 'Média';

    // Badge de prazo (se houver prazo definido)
    let prazoHtml = '';
    if (tarefa.dueDate) {
      const dataFormatada = formatarDataBrasil(tarefa.dueDate);
      if (isAtrasada) {
        prazoHtml = `<span class="due-badge overdue" title="Tarefa atrasada! Prazo era ${dataFormatada}">⚠️ Atrasada (${dataFormatada})</span>`;
      } else {
        prazoHtml = `<span class="due-badge" title="Prazo de entrega">📅 ${dataFormatada}</span>`;
      }
    }

    li.innerHTML = `
      <div class="task-item-content">
        <input
          type="checkbox"
          class="task-checkbox"
          ${tarefa.completed ? 'checked' : ''}
          aria-label="Marcar tarefa como concluída"
        />
        <span class="task-text"></span>
      </div>
      <div class="task-item-meta">
        ${prazoHtml}
        <span class="priority-badge ${tarefa.priority}">${prioridadeFormatada}</span>
        <button
          type="button"
          class="btn-edit"
          aria-label="Editar tarefa"
          title="Editar tarefa"
        >
          ✏️
        </button>
        <button
          type="button"
          class="btn-delete"
          aria-label="Excluir tarefa"
          title="Excluir tarefa"
        >
          🗑️
        </button>
      </div>
    `;

    // Inserção segura do texto para evitar XSS
    const textSpan = li.querySelector('.task-text');
    textSpan.textContent = tarefa.text;

    taskList.appendChild(li);
  });
}

// ------------------------------------------------------------------------------
// 9. GERENCIAMENTO DE TEMA (CLARO / ESCURO)
// ------------------------------------------------------------------------------
function aplicarTema(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Modo Claro';
    localStorage.setItem(STORAGE_KEY_TEMA, 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Modo Escuro';
    localStorage.setItem(STORAGE_KEY_TEMA, 'light');
  }
}

function inicializarTema() {
  const temaSalvo = localStorage.getItem(STORAGE_KEY_TEMA);
  if (temaSalvo) {
    aplicarTema(temaSalvo === 'dark');
  } else {
    const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    aplicarTema(prefereEscuro);
  }
}

// ------------------------------------------------------------------------------
// 10. ESCUTA DE EVENTOS (Event Listeners)
// ------------------------------------------------------------------------------

/**
 * 1. Formulário de Cadastro:
 * Suporta clique no botão e tecla "Enter" no campo de texto.
 */
taskForm.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const texto = taskInput.value;
  const prioridade = taskPriority.value;
  const dueDate = taskDueDate.value;

  adicionarTarefa(texto, prioridade, dueDate);

  // Reseta os campos e foca para a próxima digitação
  taskInput.value = '';
  taskDueDate.value = '';
  taskInput.focus();
});

/**
 * 2. Busca em Tempo Real:
 * O evento 'input' dispara a cada caractere digitado ou apagado.
 */
searchInput.addEventListener('input', (evento) => {
  termoBusca = evento.target.value.trim().toLowerCase();
  renderizar();
});

/**
 * 3. Abas de Filtragem:
 * Alterna a aba ativa e re-renderiza a lista filtrada.
 */
filterTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    filterTabs.forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    filtroAtual = tab.dataset.filter;

    renderizar();
  });
});

/**
 * 4. Delegação de Eventos na Lista (Checkbox, Editar e Excluir):
 */
taskList.addEventListener('click', (evento) => {
  const target = evento.target;
  const taskItem = target.closest('.task-item');
  if (!taskItem) return;

  const id = taskItem.dataset.id;

  // Ação: Checkbox de Conclusão
  if (target.classList.contains('task-checkbox')) {
    alternarConclusaoTarefa(id);
    return;
  }

  // Ação: Botão de Edição (✏️)
  if (target.classList.contains('btn-edit') || target.closest('.btn-edit')) {
    abrirModalEdicao(id);
    return;
  }

  // Ação: Botão de Exclusão (🗑️)
  if (target.classList.contains('btn-delete') || target.closest('.btn-delete')) {
    taskItem.style.opacity = '0';
    taskItem.style.transform = 'translateX(20px)';
    setTimeout(() => {
      removerTarefa(id);
    }, 150);
  }
});

/**
 * 5. Eventos do Modal de Edição:
 */
editForm.addEventListener('submit', (evento) => {
  evento.preventDefault();
  salvarEdicao(
    editTaskInput.value,
    editTaskPriority.value,
    editTaskDueDate.value
  );
});

modalCloseBtn.addEventListener('click', fecharModalEdicao);
modalCancelBtn.addEventListener('click', fecharModalEdicao);

// Fechar modal ao clicar fora do cartão (no backdrop)
editModal.addEventListener('click', (evento) => {
  if (evento.target === editModal) {
    fecharModalEdicao();
  }
});

// Fechar modal ao pressionar a tecla "Escape"
window.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && !editModal.classList.contains('hidden')) {
    fecharModalEdicao();
  }
});

/**
 * 6. Botão de Alternância de Tema:
 */
themeToggleBtn.addEventListener('click', () => {
  const isDarkModeAtivo = document.body.classList.contains('dark-mode');
  aplicarTema(!isDarkModeAtivo);
});

// ------------------------------------------------------------------------------
// 11. INICIALIZAÇÃO
// ------------------------------------------------------------------------------
inicializarTema();
renderizar();
