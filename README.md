# 📚 Projeto Final: Biblioteca Online (Aplicação Web com CRUD e Fetch)

**Disciplina:** Web Development: Front-End
**Equipe:** Delrick, Isaque, Rauhan, Laura

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório** ou baixe os arquivos ZIP.
2.  Abra a pasta do projeto.
3.  Execute o arquivo `index.html` usando a extensão **Live Server** (recomendado) ou abrindo-o diretamente no seu navegador.
4.  O projeto é totalmente Front-End e não requer um servidor Node.js ou Banco de Dados local.

---

## 🎯 Requisitos e Funcionalidades (Rubricas Atendidas)

A aplicação simula o sistema de uma biblioteca online e atende a todos os requisitos solicitados:

### Estrutura (Rubrica 1)
O projeto possui 4 páginas navegáveis:
* Página Principal (CRUD)
* Catálogo de Livros
* Sobre
* Contato

### CRUD e Fetch (Rubricas 2 e 3)
* Todas as operações (GET, POST, PUT, DELETE) utilizam requisições **assíncronas via Fetch API** (implementado no `js/api.js` e `js/app.js`).
* **Atualização Otimista (Rubrica 3):** Como a API JSONPlaceholder não persiste os dados, o estado local é atualizado imediatamente após cada operação de escrita (POST/PUT/DELETE) para refletir a mudança instantaneamente na tela, garantindo a UX.

### Interface, Validação e UX (Rubricas 4, 5 e 7)
* **Design Responsivo (Rubrica 5):** A interface é acessível e funciona em desktops e dispositivos móveis (CSS).
* **Validações (Rubrica 4):** O formulário exige que o Título do livro tenha no mínimo 3 caracteres, com feedback visual.
* **UX (Rubrica 7):** Feedbacks visuais (loading e mensagens coloridas de sucesso/erro) foram implementados para informar o usuário sobre o status das operações de rede.

---

## 👥 Divisão de Tarefas na Equipe (Rubrica 8)

| Membro | Foco Principal | Contribuição na Rubrica |
| :--- | :--- | :--- |
| **Laura** | **Design e Estrutura** | Interface e Responsividade (5). Estilos iniciais. |
| **Delrick** | **Organização e Navegação** | Estrutura do Projeto (1 - Navegação), Organização e Boas Práticas (6 - Padrões de código e utilitário `api.js`). |
| **Isaque** | **Lógica de Dados** | CRUD Funcional (2), Atualização Otimista (3). |
| **Rauhan** | **UX e Apresentação** | Formulário com Validações (4), UX e Clareza (7), Apresentação e Documentação (8). |