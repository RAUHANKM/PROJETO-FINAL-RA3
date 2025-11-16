// ---------- Seletores ----------
const form = document.getElementById("livro-form");
const idInput = document.getElementById("livro-id");
const tituloInput = document.getElementById("titulo");
const autorInput = document.getElementById("autor");
const imagemInput = document.getElementById("imagem");
const sobreInput = document.getElementById("sobre");

const listaLivrosDiv = document.getElementById("lista-livros");
const formTitle = document.getElementById("form-title");
const cancelarBtn = document.getElementById("cancelar-edicao");
const tituloErro = document.getElementById("titulo-erro");

// ---------- Dados ----------
let livros = [];

// ---------- LocalStorage ----------
function salvarLocal() {
    localStorage.setItem("livros", JSON.stringify(livros));
}

function carregarLocal() {
    const data = localStorage.getItem("livros");
    if (data) {
        livros = JSON.parse(data);
        return true;
    }
    return false;
}

// ---------- Renderização ----------
function render() {
    listaLivrosDiv.innerHTML = "";

    livros.forEach(livro => {
        const div = document.createElement("div");
        div.className = "livro";

        div.innerHTML = `
            <img src="${livro.imagem}" alt="Capa do livro">
            <h3>${livro.titulo}</h3>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p class="sobre-texto"><strong>Sobre:</strong> ${livro.sobre || "Sem descrição"}</p>

            <button onclick="editarLivro(${livro.id})">Editar</button>
            <button onclick="excluirLivro(${livro.id})">Excluir</button>
        `;

        listaLivrosDiv.appendChild(div);
    });
}

// ---------- Validação ----------
function validarTitulo(titulo) {
    return titulo.trim().length >= 3;
}

function mostrarErroTitulo(msg) {
    tituloInput.classList.add("erro-input");
    tituloErro.textContent = msg;
}

function limparErroTitulo() {
    tituloInput.classList.remove("erro-input");
    tituloErro.textContent = "";
}

tituloInput.addEventListener("input", () => {
    if (validarTitulo(tituloInput.value)) {
        limparErroTitulo();
    }
});

// ---------- Adicionar ou Editar ----------
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = idInput.value;
    const titulo = tituloInput.value.trim();
    const autor = autorInput.value.trim();
    const sobre = sobreInput.value.trim();
    const imagem = imagemInput.value.trim() || "https://via.placeholder.com/150x210?text=Livro";

    // --- Validação do título ---
    limparErroTitulo();
    if (!validarTitulo(titulo)) {
        mostrarErroTitulo("O título deve ter pelo menos 3 caracteres.");
        return;
    }

    if (id) {
        // ----- Editar -----
        const index = livros.findIndex(l => l.id == id);
        livros[index] = { id: Number(id), titulo, autor, imagem, sobre };

        salvarLocal();
        render();
        resetarFormulario();

    } else {
        // ----- Criar -----
        const novoLivro = {
            id: Date.now(),
            titulo,
            autor,
            imagem,
            sobre
        };

        livros.push(novoLivro);
        salvarLocal();
        render();
        resetarFormulario();
    }
});

// ---------- Editar ----------
function editarLivro(id) {
    const livro = livros.find(l => l.id == id);

    idInput.value = livro.id;
    tituloInput.value = livro.titulo;
    autorInput.value = livro.autor;
    imagemInput.value = livro.imagem;
    sobreInput.value = livro.sobre;
     window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    formTitle.textContent = "Editar Livro";
    cancelarBtn.classList.remove("hidden");
}

// ---------- Excluir ----------
function excluirLivro(id) {
    livros = livros.filter(l => l.id != id);
    salvarLocal();
    render();

    if (idInput.value == id) {
        resetarFormulario();
    }

}

// ---------- Resetar Formulário ----------
function resetarFormulario() {
    idInput.value = "";
    tituloInput.value = "";
    autorInput.value = "";
    imagemInput.value = "";
    sobreInput.value = "";

    limparErroTitulo();

    formTitle.textContent = "Cadastrar Livro";
    cancelarBtn.classList.add("hidden");
}

// ---------- Cancelar ----------
cancelarBtn.addEventListener("click", resetarFormulario);

// ---------- Inicialização ----------
if (carregarLocal()) {
    render();
} else {
    livros = [];
    salvarLocal();
    render();
}

// Permitir funções globais
window.editarLivro = editarLivro;
window.excluirLivro = excluirLivro;

