# 📝 FocusFlow | Lista de Tarefas Inteligente & Didática

> Uma aplicação web moderna, fluida e interativa de gerenciamento de tarefas, concebida para unir produtividade diária a boas práticas de desenvolvimento de software.

![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-green.svg)
![Linguagem: JavaScript](https://img.shields.io/badge/Linguagem-JavaScript%20(ES6%2B)-yellow.svg)
![Ferramenta: Vite](https://img.shields.io/badge/Build-Vite-646CFF.svg)
![Deploy: Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)
![Evento: Imersão Alura & Google](https://img.shields.io/badge/Imers%C3%A3o-Alura%20%26%20Google-blue.svg)

---

## 💡 Sobre o Projeto

Este projeto consiste em uma **Lista de Tarefas (To-Do List)** desenvolvida com foco em usabilidade, design moderno e código limpo. O aplicativo permite acompanhar atividades em tempo real, categorizá-las por níveis de prioridade, monitorar a taxa de conclusão através de uma barra de progresso visual e alternar entre os temas claro e escuro.

### 🎓 Origem e Propósito
Este projeto foi concebido e desenvolvido durante a **Imersão de Engenharia de Software com IA**, promovida pela **Alura em parceria com o Google**. 

O principal objetivo foi explorar a aplicação prática de Inteligência Artificial generativa no ciclo de desenvolvimento de software, demonstrando como técnicas de **Engenharia de Prompt** e especificação de requisitos orientados por IA aceleram a entrega de código limpo, modular e de fácil compreensão para quem está no início da carreira tech.

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi intencionalmente construída utilizando as tecnologias fundamentais da web, evitando o excesso de frameworks para garantir alta didática e controle arquitetural:

- **Linguagem Principal:** [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) puro (Vanilla JS), utilizando funções modulares, manipulação do DOM e métodos de array (`filter`, `map`, `forEach`).
- **Estruturação:** [HTML5 Semântico](https://developer.mozilla.org/pt-BR/docs/Web/HTML) para acessibilidade e estruturação sólida.
- **Estilização & Temas:** [CSS3 Moderno](https://developer.mozilla.org/pt-BR/docs/Web/CSS) utilizando **CSS Custom Properties (Variáveis)** para a troca instantânea entre temas, além de Flexbox e Grid para responsividade.
- **Ambiente de Desenvolvimento:** [Vite](https://vitejs.dev/) para compilação ultrarrápida e recarregamento em tempo real (Hot Module Replacement).
- **Hospedagem & Nuvem:** [Vercel](https://vercel.com/) com integração contínua (CI/CD) ao [GitHub](https://github.com/).

---

## 🧠 Processo de Criação e Engenharia com IA

Diferente do desenvolvimento tradicional ou de simples cópia de trechos de código, a arquitetura deste projeto foi construída através do método de refinamento iterativo via IA, utilizando a metodologia **GCCD**:

1. **G (Goal / Objetivo):** Definição clara do propósito da aplicação e valor para o usuário final.
2. **C (Context / Contexto):** Contextualização do nível de conhecimento do desenvolvedor (foco didático) e ambiente de execução (Vite/Node/Vercel).
3. **C (Constraints / Restrições):** Regras arquiteturais rígidas (uso exclusivo de Vanilla JS, sem dependências externas complexas, comentários educativos em português e não regressão de código).
4. **D (Done-When / Critérios de Aceite):** Critérios de teste mensuráveis para validação de cada funcionalidade.

Todo o desenvolvimento foi guiado por prompts estruturados no **Google Antigravity**, atuando como um copiloto inteligente de arquitetura e lógica.

---

## ✨ Funcionalidades Principais

- ⚡ **CRUD de Tarefas:** Adicione novas atividades, alterne o estado para concluída (com visual tachado) ou remova itens com um único clique.
- 🎯 **Níveis de Prioridade:** Defina a urgência de cada tarefa no momento do cadastro:
  - 🟢 **Baixa**
  - 🟡 **Média**
  - 🔴 **Alta**
- 📊 **Barra de Progresso Dinâmica:** Cálculo percentual reativo que se adapta instantaneamente a cada adição, conclusão ou exclusão.
- 🌓 **Tema Claro e Escuro (Dark/Light Mode):** Interface adaptável com transições suaves para conforto visual diurno e noturno.
- 💾 **Persistência de Dados (LocalStorage):** Todas as suas tarefas e o tema escolhido permanecem salvos no navegador, sobrevivendo ao recarregamento de página (F5) ou fechamento da aba.
- ⌨️ **Usabilidade Rápida:** Adicione tarefas clicando no botão ou simplesmente pressionando a tecla `Enter`.

---

## 📂 Estrutura do Repositório

```text
to-do-list/
├── index.html        # Estrutura semântica da aplicação
├── style.css         # Variáveis de tema (Dark/Light) e estilização moderna
├── main.js           # Lógica de negócio, manipulação do DOM e LocalStorage
├── package.json      # Configurações do projeto e scripts npm
├── .gitignore        # Arquivos ignorados pelo controle de versão
└── README.md         # Documentação completa do projeto
```
---

## 💻 Como Executar o Projeto Localmente

> 📌 **Pré-requisito:** Tenha o [Node.js](https://nodejs.org/) instalado em seu computador antes de começar.

Siga o passo a passo abaixo pelo terminal do VS Code:

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

### 2️⃣ Acessar a pasta do projeto
```bash
cd SEU_REPOSITORIO
```

### 3️⃣ Instalar as dependências
```bash
npm install
```

### 4️⃣ Iniciar o servidor local
```bash
npm run dev
```

### 5️⃣ Acessar no navegador
Abra seu navegador e entre no endereço indicado pelo terminal:
```text
http://localhost:5173/
```


---

## 📄 Licença

Este projeto está distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais informações.

> Em resumo: você tem total liberdade para usar, estudar, clonar, modificar e compartilhar este código.

---

## 🤝 Agradecimentos

Um agradecimento especial à equipe da **Alura** e aos especialistas do **Google** por proporcionarem uma imersão de aprendizado prático de altíssimo nível, impulsionando a nova geração de engenharia de software com Inteligência Artificial.

---

<p align="center">
  Desenvolvido com dedicação durante a <b>Imersão Alura & Google com IA</b>.
</p>
