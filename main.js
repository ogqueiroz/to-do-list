/**
 * ==============================================================================
 * APLICAÇÃO DE LISTA DE TAREFAS (TO-DO LIST) DIDÁTICA
 * ==============================================================================
 * 
 * Este arquivo contém toda a lógica em JavaScript Puro (Vanilla JS).
 * Aqui você vai aprender na prática:
 * 1. O que é o "Estado da Aplicação" e como estruturar dados em Arrays e Objetos.
 * 2. Como selecionar e manipular elementos da tela através da DOM (Document Object Model).
 * 3. Como escutar ações do usuário através de "Event Listeners" (cliques, envios de formulário).
 * 4. Como calcular porcentagens e atualizar a interface em tempo real.
 * 5. Como persistir dados no navegador do usuário utilizando o "localStorage".
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. ESTADO DA APLICAÇÃO (Application State)
// ------------------------------------------------------------------------------
/**
 * O "Estado" é a memória viva do nosso aplicativo.
 * Em vez de tentar adivinhar o que está na tela lendo o HTML, nós guardamos
 * os dados em uma variável JavaScript (Array de Objetos).
 * 
 * Tentamos buscar as tarefas salvas anteriormente no navegador (localStorage).
 * Se não houver nada salvo, começamos com um array vazio [].
 */
const STORAGE_KEY_TAREFAS = 'todo_app_tarefas';
const STORAGE_KEY_TEMA = 'todo_app_tema';

let tarefas = carregarTarefasDoStorage();

/**
 * Função auxiliar que busca as tarefas no localStorage do navegador.
 * O localStorage só armazena texto, por isso usamos JSON.parse para converter
 * de volta para um Array de Objetos JavaScript.
 */
function carregarTarefasDoStorage() {
  const dadosSalvos = localStorage.getItem(STORAGE_KEY_TAREFAS);
  if (dadosSalvos) {
    try {
      return JSON.parse(dadosSalvos);
    } catch (erro) {
      console.error('Erro ao ler tarefas salvas:', erro);
      return [];
    }
  }
  return [];
}

/**
 * Salva o estado atual da lista no localStorage.
 * Usamos JSON.stringify para transformar nosso Array de Objetos em texto.
 */
function salvarTarefasNoStorage() {
  localStorage.setItem(STORAGE_KEY_TAREFAS, JSON.stringify(tarefas));
}

// ------------------------------------------------------------------------------
// 2. SELEÇÃO DE ELEMENTOS DO DOM (Document Object Model)
// ------------------------------------------------------------------------------
/**
 * Usamos document.getElementById e document.querySelector para "pegar"
 * as referências dos elementos HTML que criamos no index.html.
 * Assim podemos ler seus valores ou alterar seus conteúdos via código.
 */

// Formulário e campos de entrada
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskPriority = document.getElementById('task-priority');

// Elementos da lista e contadores
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const tasksCountBadge = document.getElementById('tasks-count-badge');

// Elementos da barra de progresso
const progressBar = document.getElementById('progress-bar');
const progressPercentage = document.getElementById('progress-percentage');
const progressSummary = document.getElementById('progress-summary');

// Botão de alternar tema (Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// ------------------------------------------------------------------------------
// 3. REGRAS DE NEGÓCIO E MANIPULAÇÃO DE TAREFAS
// ------------------------------------------------------------------------------

/**
 * Adiciona uma nova tarefa ao array de estado.
 * @param {string} texto - A descrição da atividade.
 * @param {string} prioridade - Nível de prioridade ('baixa', 'media', 'alta').
 */
function adicionarTarefa(texto, prioridade) {
  // Limpa espaços extras no início e fim do texto com .trim()
  const textoLimpo = texto.trim();

  // Validação: não permitir adicionar tarefa vazia
  if (textoLimpo === '') {
    alert('Por favor, digite o que você precisa fazer antes de adicionar!');
    return;
  }

  // Criamos um novo objeto que representa a tarefa
  const novaTarefa = {
    // Geramos um identificador único usando o timestamp atual + número aleatório
    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
    text: textoLimpo,
    priority: prioridade, // 'baixa', 'media' ou 'alta'
    completed: false,     // Toda nova tarefa começa não concluída
    createdAt: new Date().toISOString()
  };

  // Adicionamos a nova tarefa no início da lista para que apareça no topo
  tarefas.unshift(novaTarefa);

  // Persistimos a mudança no navegador
  salvarTarefasNoStorage();

  // Atualizamos a interface visual (DOM)
  renderizar();
}

/**
 * Alterna o estado de conclusão de uma tarefa (Feita <-> Não Feita).
 * @param {string} id - O identificador da tarefa clicada.
 */
function alternarConclusaoTarefa(id) {
  // Procuramos a tarefa no array pelo seu id único
  tarefas = tarefas.map((tarefa) => {
    if (tarefa.id === id) {
      // Invertemos o valor booleano: true vira false, e false vira true
      return { ...tarefa, completed: !tarefa.completed };
    }
    return tarefa;
  });

  salvarTarefasNoStorage();
  renderizar();
}

/**
 * Remove uma tarefa da lista pelo seu identificador.
 * @param {string} id - O identificador da tarefa a ser excluída.
 */
function removerTarefa(id) {
  // O método .filter() cria um novo array mantendo apenas as tarefas
  // cujo id seja DIFERENTE do id que queremos remover.
  tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

  salvarTarefasNoStorage();
  renderizar();
}

// ------------------------------------------------------------------------------
// 4. ATUALIZAÇÃO DA BARRA DE PROGRESSO DINÂMICA
// ------------------------------------------------------------------------------
/**
 * Calcula a porcentagem de conclusão e atualiza os elementos visuais da barra.
 */
function atualizarProgresso() {
  const totalTarefas = tarefas.length;

  // Se não houver tarefas, o progresso é 0%
  if (totalTarefas === 0) {
    progressBar.style.width = '0%';
    progressPercentage.textContent = '0%';
    progressSummary.textContent = '0 de 0 tarefas concluídas';
    return;
  }

  // Contamos quantas tarefas possuem completed === true
  const tarefasConcluidas = tarefas.filter((t) => t.completed).length;

  // Calculamos a porcentagem (arredondada para número inteiro)
  const porcentagem = Math.round((tarefasConcluidas / totalTarefas) * 100);

  // Atualizamos a largura da barra no CSS (efeito visual fluido!)
  progressBar.style.width = `${porcentagem}%`;

  // Atualizamos os textos informativos
  progressPercentage.textContent = `${porcentagem}%`;
  progressSummary.textContent = `${tarefasConcluidas} de ${totalTarefas} tarefa${
    totalTarefas > 1 ? 's' : ''
  } concluída${tarefasConcluidas > 1 ? 's' : ''}`;
}

// ------------------------------------------------------------------------------
// 5. RENDERIZAÇÃO DA INTERFACE (Render Loop)
// ------------------------------------------------------------------------------
/**
 * A função renderizar() é o coração visual da aplicação.
 * Toda vez que o estado muda (adicionar, marcar, excluir), chamamos renderizar().
 * Ela sincroniza o que está na memória JavaScript com o que o usuário vê na tela.
 */
function renderizar() {
  // 1. Atualizamos a barra de progresso
  atualizarProgresso();

  // 2. Atualizamos o contador numérico de tarefas no cabeçalho
  tasksCountBadge.textContent = tarefas.length;

  // 3. Controle do "Estado Vazio"
  if (tarefas.length === 0) {
    emptyState.style.display = 'block';
    taskList.innerHTML = '';
    return;
  }

  // Se há tarefas, escondemos a mensagem de lista vazia
  emptyState.style.display = 'none';

  // 4. Limpamos a lista existente para redesenhar com os dados atualizados
  taskList.innerHTML = '';

  // 5. Criamos o HTML de cada tarefa dinamicamente
  tarefas.forEach((tarefa) => {
    // Cria o elemento <li>
    const li = document.createElement('li');
    li.className = `task-item ${tarefa.completed ? 'completed' : ''}`;
    li.dataset.id = tarefa.id; // Guarda o id no atributo data-id do HTML

    // Define o texto amigável da prioridade
    const prioridadeLabels = {
      baixa: 'Baixa',
      media: 'Média',
      alta: 'Alta'
    };

    const prioridadeFormatada = prioridadeLabels[tarefa.priority] || 'Média';

    // Montamos o conteúdo interno com segurança
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
        <span class="priority-badge ${tarefa.priority}">${prioridadeFormatada}</span>
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

    // Inserimos o texto da tarefa via textContent para prevenir vulnerabilidades (XSS)
    const taskTextSpan = li.querySelector('.task-text');
    taskTextSpan.textContent = tarefa.text;

    // Adicionamos o item <li> dentro da lista <ul> no HTML
    taskList.appendChild(li);
  });
}

// ------------------------------------------------------------------------------
// 6. GERENCIAMENTO DE TEMA (CLARO / ESCURO)
// ------------------------------------------------------------------------------
/**
 * Aplica o tema visual selecionado e atualiza os textos/ícones correspondentes.
 * @param {boolean} isDark - Se verdadeiro, ativa o modo escuro.
 */
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

/**
 * Inicializa o tema baseado na preferência salva no localStorage
 * ou na preferência do sistema operacional do usuário.
 */
function inicializarTema() {
  const temaSalvo = localStorage.getItem(STORAGE_KEY_TEMA);

  if (temaSalvo) {
    aplicarTema(temaSalvo === 'dark');
  } else {
    // Detecta se o sistema do usuário prefere tema escuro por padrão
    const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    aplicarTema(prefereEscuro);
  }
}

// ------------------------------------------------------------------------------
// 7. ESCUTA DE EVENTOS (Event Listeners)
// ------------------------------------------------------------------------------

/**
 * Ouvinte do Formulário de Cadastro:
 * O evento 'submit' é disparado tanto ao clicar no botão "Adicionar" quanto
 * ao pressionar a tecla "Enter" enquanto o cursor estiver dentro do campo de texto!
 */
taskForm.addEventListener('submit', (evento) => {
  // Previne o comportamento padrão do navegador de recarregar a página ao enviar form
  evento.preventDefault();

  const texto = taskInput.value;
  const prioridade = taskPriority.value;

  // Chama nossa função de negócio
  adicionarTarefa(texto, prioridade);

  // Limpa o campo de texto e devolve o foco a ele para agilizar a digitação
  taskInput.value = '';
  taskInput.focus();
});

/**
 * Delegação de Eventos na Lista de Tarefas:
 * Em vez de adicionar um evento para cada botão de cada tarefa (o que consumiria
 * mais memória), ouvimos os cliques diretamente no elemento pai (<ul>) e
 * identificamos qual botão filho foi clicado através de 'evento.target'.
 */
taskList.addEventListener('click', (evento) => {
  const target = evento.target;

  // Encontra o item <li> mais próximo do clique
  const taskItem = target.closest('.task-item');
  if (!taskItem) return;

  const id = taskItem.dataset.id;

  // Caso 1: Usuário clicou no checkbox de conclusão
  if (target.classList.contains('task-checkbox')) {
    alternarConclusaoTarefa(id);
    return;
  }

  // Caso 2: Usuário clicou no botão de exclusão (🗑️)
  if (target.classList.contains('btn-delete') || target.closest('.btn-delete')) {
    // Animação suave antes de remover
    taskItem.style.opacity = '0';
    taskItem.style.transform = 'translateX(20px)';
    setTimeout(() => {
      removerTarefa(id);
    }, 150);
  }
});

/**
 * Ouvinte do Botão de Alternância de Tema:
 * Alterna entre tema claro e escuro a cada clique.
 */
themeToggleBtn.addEventListener('click', () => {
  const isDarkModeAtivo = document.body.classList.contains('dark-mode');
  // Se está ativo, vamos desativar (!isDarkModeAtivo). Se não, vamos ativar.
  aplicarTema(!isDarkModeAtivo);
});

// ------------------------------------------------------------------------------
// 8. INICIALIZAÇÃO DA APLICAÇÃO
// ------------------------------------------------------------------------------
// Configura o tema salvo e desenha as tarefas na tela na primeira carga
inicializarTema();
renderizar();
