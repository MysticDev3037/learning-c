// INTERFACE Funções que alterem a interface do usuario
function verRegistros() {
    let listaRegistro = getel("listaRegistro");

    listaRegistro.innerHTML = ""; // Limpa a lista antes de adicionar os registros

    if (registros.length === 0) {
        listaRegistro.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return;
    }

    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        let linha = document.createElement("hr"); //let Define uma variavel que posso mudar o valor
        const card = gerarCard(registros[i]); // Gera o card para cada registro// já const n posso mudar
        listaRegistro.appendChild(card); //Invoca o card com tudo
        listaRegistro.appendChild(linha);

    }
}
function gerarCard(registro){
    let card = document.createElement("div");
    card.className = "card";
    card.appendChild(criarParagrafo("Matéria",registro.materia));// Adiciona tudo detro do card
    card.appendChild(criarParagrafo("Título",registro.titulo));
    card.appendChild(criarParagrafo("Conteúdo",registro.conteudo));
    card.appendChild(gerarBotao("Editar", "btn-editar", registro.id));
    card.appendChild(gerarBotao("Excluir", "btn-excluir", registro.id));
    return card;
}
function gerarBotao(texto, classe, id){
    let botao = document.createElement("button")
    botao.textContent = texto;
    botao.className = classe;
    botao.dataset.id = id;
    return botao;
}
function getel(id){
    return document.getElementById(id);
}

function criarParagrafo(rotulo, registro){
    let paragrafo = document.createElement("p");
    paragrafo.textContent = rotulo + ":" + registro;
    return paragrafo;
}

function abrirModal(id){
    getel("modalEditar").style.display = "flex";
    let registro = registros.find(r => r.id === id);
        getel("editarmateria").value = registro.materia
        getel("editartitulo").value = registro.titulo
        getel("editarconteudo").value = registro.conteudo
}
function limparCampos() {
    getel("materia").value = "";
    getel("titulo").value = "";
    getel("conteudo").value = "";
    getel("materia").focus(); // Coloca o foco de volta no campo de matéria
}
function cancelarEdicao(){
    getel("modalEditar").style.display = "none";
    idEditando = null;
    getel("editarmateria").value = "";
    getel("editartitulo").value = "";
    getel("editarconteudo").value = "";
}