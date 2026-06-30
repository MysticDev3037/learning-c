// INTERFACE Funções que alterem a interface do usuario
function verRegistros() {
    let listaRegistro = document.getElementById("listaRegistro");

    listaRegistro.innerHTML = ""; // Limpa a lista antes de adicionar os registros

    if (registros.length === 0) {
        listaRegistro.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return;
    }

    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        let card = document.createElement("div");
        card.className = "card"; //Jogar toos os itens dentro dele pra apenas precisar invocar ele e n precisar invocar todos

        let materia = criarParagrafo("Matéria", registros[i].materia);
        let titulo = criarParagrafo("Título", registros[i].titulo);
        let conteudo = criarParagrafo("Contéudo", registros[i].conteudo);

        let botaoeditar = gerarBotao("Editar", "btn-editar",registros[i].id);
        let botaoexcluir = gerarBotao("Excluir", "btn-excluir", registros[i].id);
        let linha = document.createElement("hr");



        listaRegistro.appendChild(card); //Invoca o card com tudo
        listaRegistro.appendChild(linha);

    }
}
function gerarCard(registro[i]){
    let card = document.createElement("div");
    card.appendChild(criarParagrafo("Matéria",registro[id].materia));// Adiciona tudo detro do card
    card.appendChild(criarParagrafo("titulo",registro[id].titulo);
    card.appendChild(conteudo);
    card.appendChild(botaoeditar);
    card.appendChild(botaoexcluir);
    card.appendChild(linha);
    return card;
}
function gerarBotao(texto, classe, id){
    let botao = document.createElement("button")
    botao.textContent = texto;
    botao.className = classe;
    botao.dataset.id = id;
    return botao;
}

function criarParagrafo(rotulo, valor){
    let paragrafo = document.createElement("p");
    paragrafo.textContent = rotulo + ":" + valor;
    return paragrafo;
}

function abrirModal(id){
    document.getElementById("modalEditar").style.display = "flex";
    idEditando = id;
    let registro = registros.find(r => r.id === id);
        document.getElementById("editarmateria").value = registro.materia
        document.getElementById("editartitulo").value = registro.titulo
        document.getElementById("editarconteudo").value = registro.conteudo
}
function limparCampos() {
    document.getElementById("materia").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";
    document.getElementById("materia").focus(); // Coloca o foco de volta no campo de matéria
}
function cancelarEdicao(){
    document.getElementById("modalEditar").style.display = "none";
    idEditando = null;
    document.getElementById("editarmateria").value = "";
    document.getElementById("editartitulo").value = "";
    document.getElementById("editarconteudo").value = "";
}