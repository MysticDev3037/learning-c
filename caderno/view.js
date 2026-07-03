// INTERFACE Funções que alterem a interface do usuario
function verRegistros(listarg) {
    let listaRegistro = getel("listaRegistro");
    listaRegistro.innerHTML = ""; // Limpa a lista antes de adicionar os registros

    if (listarg.length === 0) {
        listaRegistro.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return; //Escapa direto pro escopo
    }
    for (let i = 0; i < listarg.length; i++) { // Percorre todos os registros
        let linha = document.createElement("hr"); //let Define uma variavel que posso mudar o valor
        const card = gerarCard(listarg[i]); // Gera o card para cada registro// já const n posso mudar
        listaRegistro.appendChild(card); //Invoca o card com tudo
        listaRegistro.appendChild(linha);
    }
}
function filtrarRegistros(registros) {
    let busca = getel("buscar").value.trim().toLowerCase();
    if (busca === "") {
        return;
    }
    else {
        alert("Teste")
        let encontrados = registros.filter(r => r.materia.toLowerCase() === busca);
        if (encontrados.length === 0) {
            alert("Nenhum registro encontrado para essa matéria.");
            return;
        }
        verRegistros(encontrados);
    }
}
function gerarCard(registro){
    let card = document.createElement("div");
    card.className = "card";
    card.appendChild(gerarCabecalho(registro)); // Adiciona o cabeçalho ao card
    card.appendChild(gerarCorpo(registro)); // Adiciona o corpo ao card
    card.appendChild(gerarRodape(registro)); // Adiciona o rodapé ao card
    return card;
}
function gerarBotao(texto, classe, id){
    let botao = document.createElement("button")
    botao.textContent = texto;
    botao.className = classe;
    botao.dataset.id = id;
    return botao;
}
function getel(id){ //Otimiza a busca de elementos no DOM, evitando repetição de código
    return document.getElementById(id);
}

function criarParagrafo(rotulo, registro){
    let paragrafo = document.createElement("p");
    paragrafo.textContent = rotulo + ":" + registro;
    return paragrafo;
}
function abrirModal(id){
    getel("modalEditar").style.display = "flex";
    idEditando = id; //Variavl Global
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
function gerarCabecalho(registro){
    let cabecalho = document.createElement("div");
    cabecalho.className = "card-header";
    cabecalho.appendChild(criarParagrafo("Matéria", registro.materia));
    return cabecalho;

} // Gera o cabeçalho da página
function gerarCorpo(registro){
    let corpo = document.createElement("div");
    corpo.className = "card-body";
corpo.appendChild(criarParagrafo("Título", registro.titulo));
    corpo.appendChild(criarParagrafo("Conteúdo", registro.conteudo));
    return corpo;
} // Gera o corpo da página 
function gerarRodape(registro){
    let rodape = document.createElement("div");
    rodape.className = "card-footer";
    rodape.appendChild(gerarBotao("Editar", "btn-editar", registro.id));
    rodape.appendChild(gerarBotao("Excluir", "btn-excluir", registro.id));
    return rodape;
} // Gera o rodapé da página