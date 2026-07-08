// INTERFACE Funções que alterem a interface do usuario
function verRegistros(listarg) {
    let listaRegistro = getel("listaRegistro");
    listaRegistro.innerHTML = ""; // Limpa a lista antes de adicionar os registros

    if (listarg.length === 0) {
        listaRegistro.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return; //Escapa direto pro escopo
    }
    let ordenado = ordenarRegistros(listarg);
    for (let i = 0; i < ordenado.length; i++) {
        const card = gerarCard(ordenado[i]);
        listaRegistro.appendChild(card);
    }
}
function filtrarRegistros(reg) {
    let busca = getel("buscar").value.trim().toLowerCase();
    if (busca === "") {
        return verRegistros(registros); // Se a busca estiver vazia, exibe todos os registros
    }
    else {
        let encontrados = reg.filter(r => {
            let ok = false;
            if (getel("ch-materia").checked){
                ok = ok || r.materia.toLowerCase().includes(busca);
            }
            if (getel("ch-titulo").checked){
                ok = ok || r.titulo.toLowerCase().includes(busca);
            }
            if (getel("ch-conteudo").checked){
                ok = ok || r.conteudo.toLowerCase().includes(busca);
            }
            return ok;
        });
        verRegistros(encontrados);
    }
}
function formatarData(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`; // Retorna no formato DD/MM/AAAA
}
function ordenarRegistros(reg) {
    if (ordemlista) {
        return [...reg].sort((a, b) => new Date(b.data) - new Date(a.data)); // Mais recentes primeiro
    } else {
        return [...reg].sort((a, b) => new Date(a.data) - new Date(b.data)); // Mais antigos primeiro
    }
}
function gerarCard(registro){
    let card = document.createElement("article");
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
    if (rotulo =="") {
        paragrafo.textContent = registro;
    } else
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
    cabecalho.appendChild(criarParagrafo("",formatarData(registro.data)));
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
function dataAtual(){
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    let ano = data.getFullYear();
    return `${ano}-${mes}-${dia}`; // Formato YYYY-MM-DD
}