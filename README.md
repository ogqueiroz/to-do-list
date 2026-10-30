# 📝 FocoCerto | Lista de Tarefas Inteligente & Didática

<div align="center">

<img src="https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white&labelColor=555555" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white&labelColor=555555" alt="CSS3" />
<img src="https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&labelColor=555555" alt="JavaScript ES6+" />
<img src="https://img.shields.io/badge/IMERS%C3%83O-ALURA%20%26%20GOOGLE%20COM%20IA-0070F3?style=for-the-badge&logo=google&logoColor=white&labelColor=555555" alt="Imersão Alura & Google com IA" />
<img src="https://img.shields.io/badge/LICEN%C3%87A-MIT-7bb800?style=for-the-badge&labelColor=555555" alt="Licença MIT" />

</div>

> Uma aplicação web moderna, fluida e interativa de gerenciamento de tarefas, concebida para unir produtividade diária a boas práticas de desenvolvimento de software.
---

https://to-do-list-nine-blush-31.vercel.app/ <-- [Abra para testar a Lista de Tarefas]

<img width="749" height="790" alt="image" src="https://github.com/user-attachments/assets/583c6533-f671-40d7-84a7-5ea65f4750c8" />




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

Um agradecimento especial à equipe da **Alura** e ao especialista do **Google** por proporcionarem uma imersão de aprendizado prático de altíssimo nível, impulsionando a nova geração de engenharia de software com Inteligência Artificial.

---

<p align="center">
  Desenvolvido com dedicação durante a <b>Imersão Alura & Google com IA</b>.
</p>
