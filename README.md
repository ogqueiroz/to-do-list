# 📝 Lista de Tarefas Didática (To-Do List)

Uma aplicação moderna, interativa e altamente didática de Lista de Tarefas construída com **JavaScript Puro (Vanilla)**, **HTML5 semântico** e **CSS3 moderno**, utilizando o **Vite** para desenvolvimento ultrarrápido e compatibilidade nativa com a **Vercel** e **GitHub**.

---

## 🎯 Funcionalidades

- **Gerenciamento Completo de Tarefas**: Adicionar tarefas com texto e prioridade, marcar como concluídas e remover tarefas.
- **Barra de Progresso Dinâmica**: Percentual e mensagem calculados e atualizados em tempo real conforme tarefas são adicionadas, marcadas ou excluídas.
- **Níveis de Prioridade**: Escolha entre Baixa (🟢), Média (🟡) e Alta (🔴) com etiquetas coloridas correspondentes.
- **Tema Claro e Escuro (Dark/Light Mode)**: Alternância suave com persistência no navegador via CSS Custom Properties.
- **Persistência Local (LocalStorage)**: Seus dados e seu tema preferido continuam salvos mesmo se você fechar o navegador ou atualizar a página.
- **Acessibilidade e Usabilidade**: Adicione tarefas clicando no botão ou simplesmente pressionando `Enter`.

---

## 📂 Estrutura de Arquivos e Papéis de Cada Tecnologia

Este projeto foi estruturado com foco na clareza pedagógica:

```text
to-do-list/
├── index.html        # Estrutura semântica da página (o esqueleto)
├── style.css         # Visual, variáveis de cores e temas (a roupagem)
├── main.js           # Comportamento, lógica de negócio e eventos (o cérebro)
├── package.json      # Configurações do projeto e scripts npm
├── .gitignore        # Arquivos ignorados pelo Git (como node_modules)
└── README.md         # Documentação e guia didático
```

### 1. HTML (`index.html`)
Define o significado e a estrutura de cada parte da página:
- `header`: Título do aplicativo e botão de alternância de tema.
- `section` de progresso: Barra e indicadores de porcentagem.
- `form`: Entrada de texto e seleção de prioridade.
- `main` e `ul`: O container onde o JavaScript injetará as tarefas cadastradas.

### 2. CSS (`style.css`)
Controla o design moderno e a transição de temas:
- **Variáveis CSS (`:root` e `body.dark-mode`)**: Permitem trocar todas as cores do aplicativo alterando apenas uma classe no `body`.
- **Flexbox e Grid**: Alinhamento responsivo que se adapta perfeitamente a computadores e celulares.
- **Animações suaves**: Transições na barra de progresso, botões e cartões de tarefa.

### 3. JavaScript (`main.js`)
O cérebro do aplicativo. Explica detalhadamente:
- **Estado (State)**: A lista de tarefas é mantida em um Array de Objetos JavaScript (`tarefas = [{ id, text, priority, completed }]`).
- **DOM (Document Object Model)**: Conexão entre o código JavaScript e os elementos visuais do HTML.
- **Event Listeners**: Escuta de cliques (`click`) e envio de formulário (`submit`).
- **Funções Puras e Métodos de Array**: Uso didático de `.filter()`, `.map()`, `.forEach()` e `.unshift()`.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Ter o [Node.js](https://nodejs.org/) instalado em seu computador.

### Passo a Passo

1. **Abra a pasta do projeto no VS Code**:
   - Pelo terminal ou menu `Arquivo -> Abrir Pasta...`

2. **Instale as dependências**:
   Abra o terminal integrado do VS Code (`Ctrl + '` ou `Terminal -> Novo Terminal`) e execute:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   O terminal exibirá um link local, normalmente:
   ```text
   http://localhost:5173
   ```
   Clique com `Ctrl + Clique` no link ou cole-o no seu navegador!

---

## 🌐 Como Publicar no GitHub e Fazer Deploy na Vercel

O projeto foi preparado para funcionar imediatamente na Vercel sem necessidade de configurações extras.

### 1. Criar o Repositório no GitHub
No terminal do VS Code, inicialize o repositório e envie para o GitHub:
```bash
git init
git add .
git commit -m "feat: primeira versão da lista de tarefas didática"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/to-do-list.git
git push -u origin main
```

### 2. Deploy Automático na Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique no botão **"Add New..."** -> **"Project"**.
3. Localize e selecione o repositório `to-do-list` da lista.
4. A Vercel detectará automaticamente o **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em **"Deploy"**!
6. Em menos de 1 minuto seu projeto estará no ar com link público HTTPS compartilhável. Toda alteração enviada para o GitHub atualizará o site automaticamente.

---

## 🧠 Dicas de Estudo para Iniciantes
- Abra o `main.js` e observe como a função `renderizar()` recria a visualização sempre que o array `tarefas` é alterado. Esse é o mesmo princípio que frameworks modernos como React e Vue utilizam nos bastidores!
- Experimente inspecionar a página no navegador (`F12`) e observar a classe `dark-mode` entrando e saindo do `<body>` ao clicar no botão de tema.
