// INTERFACE Funções que alterem a interface do usuario

function prepararWorkspace(){
    let listaRegistro = getel("listaRegistro");
    listaRegistro.innerHTML = "";
    return listaRegistro
}
function verScrollDay(listadata){
    const lista = getel("day-navigation");
    lista.innerHTML = "";

    for(const data of listadata){
        const li = document.createElement("li");
        const botao = document.createElement("button");
        botao.classList.add("botao-scdate");
        botao.dataset.data = data;
        const info = formatarDataScroll(converterData(data));
        const day = document.createElement("span");
        day.classList.add("day-number");
        const month = document.createElement("span");
        month.classList.add("day-month");
        day.textContent = info.dia;
        month.textContent = info.mes;
        console.log(day.textContent);
        console.log(month.textContent);
        console.log(botao.dataset.data);

        botao.appendChild(day);
        botao.appendChild(month);
        li.appendChild(botao);
        lista.appendChild(li);
    }

}

function verRegistros(listarg) {
    listaRegistro = prepararWorkspace();
    let ordenado = ordenarRegistros(listarg);

    paginaAtual = gerarPagina();
    paginaAtual.dataset.data = ordenado[0];
    listaRegistro.appendChild(paginaAtual);
    let dataAnterior = ordenado[0].data;

    for (let i = 0; i < ordenado.length; i++) {

        let registro = ordenado[i];

        // Verifica se mudou a data (exceto no primeiro registro)
        if (dataAnterior !== null && registro.data !== dataAnterior) {
            paginaAtual.dataset.data = dataAnterior;
            paginaAtual = gerarPagina();
            paginaAtual.dataset.data = registro.data;
            listaRegistro.appendChild(paginaAtual);
        }

        let card = gerarCard(registro);

        paginaAtual.appendChild(card);

        // Se o card não couber na página...
        if (paginaAtual.scrollHeight > paginaAtual.clientHeight) {

            // Remove da página atual
            paginaAtual.removeChild(card);

            // Cria uma nova página
            paginaAtual.dataset.data = dataAnterior;
            paginaAtual = gerarPagina();
            listaRegistro.appendChild(paginaAtual);

            // Coloca o card na nova página
            paginaAtual.appendChild(card);

        }

        // Guarda a data para comparar com o próximo registro
        dataAnterior = registro.data;

    }

}
function filtrarRegistros(reg) {
    let busca = getel("buscar").value.trim().toLowerCase();
    if (busca === "") {
        return verRegistros(registrosglobais); // Se a busca estiver vazia, exibe todos os registros
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


function atualizarSidebar(registros) {
    let sidebar = getel("sidebar");
    sidebar.innerHTML = ""; // Limpa a sidebar antes de adicionar as opções
    for (let i = 0; i < registros.length; i++) {
        let botao = gerarOpcoesMaterias(registros[i]);
        sidebar.appendChild(botao);
    }
}

function atualizarListaMaterias(materias){
    let lista = getel("listaMaterias");
    lista.innerHTML = "";
    for (let materia of materias){
        let opcao = document.createElement("option");
        opcao.value = materia;
        lista.appendChild(opcao);
    }
}
function gerarOpcoesMaterias(materia) {
    botao = document.createElement("button");
    botao.textContent = materia;
    botao.className = "btn-materia";
    botao.dataset.materia = materia;
    return botao;
}    


function gerarCard(registro){
    let card = document.createElement("article");
    card.className = "card";
    card.classList.add("card");
    card.dataset.id = registro.id;
    card.appendChild(gerarCabecalho(registro)); // Adiciona o cabeçalho ao card
    card.appendChild(gerarCorpo(registro)); // Adiciona o corpo ao card
    return card;
}
function gerarPagina(){
        let pagina = document.createElement("section");
        pagina.className = "page";
        return pagina;
}


function criarParagrafo(rotulo, registro){
    let paragrafo = document.createElement("p");
    if (rotulo === "Matéria") {
        paragrafo.className = "card-materia"; // Adiciona a classe para estilização
    } else if (rotulo === "Título") {
        paragrafo.className = "card-titulo"; // Adiciona a classe para estilização
    } else if (rotulo === "Conteúdo") {
        paragrafo.className = "card-conteudo"; // Adiciona a classe para estilização
    } else if (rotulo === "Data") {
        paragrafo.className = "card-data"
    }
    if (rotulo =="") {
        paragrafo.textContent = registro;
    } else
    paragrafo.textContent = rotulo + ":" + registro;
    return paragrafo;
}
function gerarCabecalho(registro){
    let cabecalho = document.createElement("div");
    cabecalho.className = "card-header";
    cabecalho.appendChild(criarParagrafo("Matéria", registro.materia));
    cabecalho.appendChild(criarParagrafo("Data",formatarData(registro.data)));
    return cabecalho;

} // Gera o cabeçalho da página
function gerarCorpo(registro){
    let corpo = document.createElement("div");
    corpo.className = "card-body";
corpo.appendChild(criarParagrafo("Título", registro.titulo));
    corpo.appendChild(criarParagrafo("Conteúdo", registro.conteudo));
    return corpo;
} // Gera o corpo da página 
function dataAtual(){
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    let ano = data.getFullYear();
    return `${ano}-${mes}-${dia}`; // Formato YYYY-MM-DD
}
// Abrir Editor

function abrirEditor(id){
    const registro = buscarRegistro(id);
    if(!registro){
        return;
    }
    preencherEditor(registro);
    hidden("workspace-content");
    show("editor");
    hidden("workspace-header");
}



function preencherEditor(registro){
    getel("editorConteudo").value = registro.conteudo;
    getel("editMateria").value = registro.materia;
    getel("editTitulo").value = registro.titulo;
}