📝 FocusFlow | Lista de Tarefas Inteligente & Didática
Uma aplicação web moderna, fluida e interativa de gerenciamento de tarefas, concebida para unir produtividade diária a boas práticas de desenvolvimento de software.
![Imagem](https://img.shields.io/badge/Licen%C3%A7a-MIT-green.svg)
![Imagem](https://img.shields.io/badge/Linguagem-JavaScript%20(ES6%2B)-yellow.svg)
![Imagem](https://img.shields.io/badge/Build-Vite-646CFF.svg)
![Imagem](https://img.shields.io/badge/Deploy-Vercel-black.svg)
![Imagem](https://img.shields.io/badge/Imers%C3%A3o-Alura%20%26%20Google-blue.svg)
💡 Sobre o Projeto
Este projeto consiste em uma Lista de Tarefas (To-Do List) desenvolvida com foco em usabilidade, design moderno e código limpo. O aplicativo permite acompanhar atividades em tempo real, categorizá-las por níveis de prioridade, monitorar a taxa de conclusão através de uma barra de progresso visual e alternar entre os temas claro e escuro.
🎓 Origem e Propósito
Este projeto foi concebido e desenvolvido durante a Imersão de Engenharia de Software com IA, promovida pela Alura em parceria com o Google.
O principal objetivo foi explorar a aplicação prática de Inteligência Artificial generativa no ciclo de desenvolvimento de software, demonstrando como técnicas de Engenharia de Prompt e especificação de requisitos orientados por IA aceleram a entrega de código limpo, modular e de fácil compreensão para quem está no início da carreira tech.
🛠️ Tecnologias Utilizadas
A aplicação foi intencionalmente construída utilizando as tecnologias fundamentais da web, evitando o excesso de frameworks para garantir alta didática e controle arquitetural:
Linguagem Principal: JavaScript (ES6+) puro (Vanilla JS), utilizando funções modulares, manipulação do DOM e métodos de array (filter, map, forEach).
Estruturação: HTML5 Semântico para acessibilidade e estruturação sólida.
Estilização & Temas: CSS3 Moderno utilizando CSS Custom Properties (Variáveis) para a troca instantânea entre temas, além de Flexbox e Grid para responsividade.
Ambiente de Desenvolvimento: Vite para compilação ultrarrápida e recarregamento em tempo real (Hot Module Replacement).
Hospedagem & Nuvem: Vercel com integração contínua (CI/CD) ao GitHub.
🧠 Processo de Criação e Engenharia com IA
Diferente do desenvolvimento tradicional ou de simples cópia de trechos de código, a arquitetura deste projeto foi construída através do método de refinamento iterativo via IA, utilizando a metodologia GCCD:
G (Goal / Objetivo): Definição clara do propósito da aplicação e valor para o usuário final.
C (Context / Contexto): Contextualização do nível de conhecimento do desenvolvedor (foco didático) e ambiente de execução (Vite/Node/Vercel).
C (Constraints / Restrições): Regras arquiteturais rígidas (uso exclusivo de Vanilla JS, sem dependências externas complexas, comentários educativos em português e não regressão de código).
D (Done-When / Critérios de Aceite): Critérios de teste mensuráveis para validação de cada funcionalidade.
Todo o desenvolvimento foi guiado por prompts estruturados no Google Antigravity, atuando como um copiloto inteligente de arquitetura e lógica.
✨ Funcionalidades Principais
⚡ CRUD de Tarefas: Adicione novas atividades, alterne o estado para concluída (com visual tachado) ou remova itens com um único clique.
🎯 Níveis de Prioridade: Defina a urgência de cada tarefa no momento do cadastro (Baixa, Média e Alta).
📅 Prazos de Entrega: Campo dedicado para data limite, com alertas visuais para tarefas com prazo vencido.
📊 Barra de Progresso Dinâmica: Cálculo percentual reativo que se adapta instantaneamente a cada alteração.
🌓 Tema Claro e Escuro (Dark/Light Mode): Interface adaptável com transições suaves para conforto visual.
💾 Persistência de Dados (LocalStorage): Todas as tarefas e o tema escolhido permanecem salvos no navegador, mesmo ao dar F5.
⌨️ Usabilidade Rápida: Adicione tarefas clicando no botão ou simplesmente pressionando a tecla Enter.
📂 Estrutura do Repositório
```Text
to-do-list/
├── index.html        # Estrutura semântica da aplicação
├── style.css         # Variáveis de tema (Dark/Light) e estilização moderna
├── main.js           # Lógica de negócio, manipulação do DOM e LocalStorage
├── package.json      # Configurações do projeto e scripts npm
├── .gitignore        # Arquivos ignorados pelo controle de versão
└── README.md         # Documentação completa do projeto
````
💻 Como Executar o Projeto Localmente
Pré-requisitos
Certifique-se de ter o Node.js instalado em seu computador.
Passo a Passo
Clone o repositório:
code
Bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
Acesse a pasta do projeto:
code
Bash
cd SEU_REPOSITORIO
Instale as dependências:
code
Bash
npm install
Inicie o servidor de desenvolvimento local:
code
Bash
npm run dev
Abra no seu navegador:
Acesse o link gerado no terminal (geralmente http://localhost:5173/).
📄 Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE incluído na raiz do projeto.
🤝 Agradecimentos
Agradecimento especial à Alura e ao Google pela realização da Imersão de Engenharia de Software com IA
