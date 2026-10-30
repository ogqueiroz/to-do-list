# 📝 Lista de Tarefas Didática e Profissional (To-Do List)

Uma aplicação moderna, interativa e altamente didática de Lista de Tarefas construída com **JavaScript Puro (Vanilla)**, **HTML5 semântico** e **CSS3 moderno**, utilizando o **Vite** para desenvolvimento ágil e compatibilidade nativa com a **Vercel** e **GitHub**.

---

## 🎯 Funcionalidades Principais

1. **Gerenciamento Completo de Tarefas**:
   - Cadastro com validação de campo vazio (suporta clique e tecla `Enter`).
   - Conclusão com efeito visual de risco e opacidade suave.
   - Exclusão individual com animação de saída.
2. **💾 Persistência Local (LocalStorage)**:
   - Todas as tarefas, seus status, prioridades, prazos e a escolha de tema (Claro/Escuro) permanecem salvos mesmo após recarregar a página (`F5`) ou reiniciar o navegador.
3. **🏷️ Abas de Filtragem de Exibição**:
   - 3 abas interativas com contadores em tempo real: **Todas**, **Pendentes** e **Concluídas**.
4. **🔍 Busca em Tempo Real**:
   - Barra de pesquisa que filtra as tarefas instantaneamente conforme você digita, funcionando de forma combinada com a aba de filtro selecionada.
5. **⏰ Prazos de Entrega (Due Date) com Alerta de Atraso**:
   - Seleção de data limite para cada atividade.
   - Se a data estiver vencida em relação ao dia atual e a tarefa não tiver sido concluída, um badge chamativo **`⚠️ Atrasada`** e borda de alerta são aplicados automaticamente.
6. **✏️ Edição Completa de Tarefas**:
   - Botão de edição (`✏️`) em cada tarefa que abre um modal limpo para alterar descrição, prioridade e prazo sem precisar recriar a tarefa.
7. **🎉 Gamificação com Confetes**:
   - Animação comemorativa com a biblioteca `canvas-confetti` disparada automaticamente quando o usuário atinge **100% de progresso** nas tarefas!
8. **🌓 Tema Claro e Escuro (Dark/Light Mode)**:
   - Alternância fluida utilizando variáveis nativas do CSS (`:root` e `body.dark-mode`).

---

## 📂 Estrutura de Arquivos e Papéis de Cada Tecnologia

```text
to-do-list/
├── index.html        # Estrutura semântica: formulário com datas, filtros, modal e lista
├── style.css         # Variáveis de tema (claro/escuro), cards, badges e modal responsivo
├── main.js           # Lógica didática: estado, localStorage, filtros, datas e confetes
├── package.json      # Dependências (Vite, canvas-confetti) e scripts npm
├── .gitignore        # Arquivos ignorados pelo Git (node_modules, dist)
└── README.md         # Documentação e guia didático
```

### 1. HTML (`index.html`)
Define a marcação semântica e acessível:
- `header`: Título e botão do Modo Escuro/Claro.
- `section.progress-section`: Barra de progresso dinâmica com percentual.
- `form#task-form`: Inputs de texto, prioridade e data limite (`input[type="date"]`).
- `section.toolbar-section`: Barra de pesquisa e abas de filtro (`role="tablist"`).
- `ul#task-list`: Lista onde as tarefas filtradas são injetadas.
- `div#edit-modal`: Modal acessível para edição de tarefas com suporte a tecla `Esc`.

### 2. CSS (`style.css`)
Controla o design moderno e profissional:
- **Variáveis CSS**: Todas as cores do tema claro e escuro declaradas centralizadamente.
- **Badges de Prazos**: Estilos para prazos normais e destaque vermelho para tarefas atrasadas.
- **Modal de Edição**: Fundo com desfoque (`backdrop-filter: blur`) e animação suave de entrada.
- **Mobile-first**: Layout 100% responsivo para smartphones e telas grandes.

### 3. JavaScript (`main.js`)
O cérebro do projeto, com documentação pedagógica em português:
- **Estado (State)**: Array de objetos `tarefas` sincronizado com o `localStorage`.
- **Filtros e Busca Simultâneos**: Função `obterTarefasFiltradas()` que aplica os dois critérios ao mesmo tempo.
- **Tratamento de Datas**: Comparação de datas no formato `YYYY-MM-DD` para detecção de atraso e formatação brasileira `DD/MM/AAAA`.
- **Disparo de Confetes**: Chamada de `confetti()` somente quando o usuário conclui tarefas atingindo a meta de 100%.

---

## 🚀 Como Executar Localmente

### 1. Abrir no VS Code
Abra a pasta do projeto no VS Code.

### 2. Iniciar o Servidor de Desenvolvimento
No terminal integrado (`Ctrl + '`), execute:
```bash
npm run dev
```

### 3. Acessar no Navegador
Abra o link exibido no terminal (geralmente `http://localhost:5173`).

---

## 🌐 Como Publicar no GitHub e Vercel

### Atualizar o Git:
```bash
git add .
git commit -m "feat: integracao de filtros, busca, prazos, edicao, persistencia e confetes"
git push origin main
```

### Deploy na Vercel:
Se você já conectou o repositório à Vercel, o deploy é **100% automático** assim que você der o `git push`!
A Vercel executará `npm run build` e disponibilizará a nova versão na URL pública.
