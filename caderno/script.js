let registros = [];
let contador = 0;
loadRegistros(); // Carrega os registros salvos ao iniciar o programa
verRegistros(); // Exibe os registros carregados

function criarRegistro() {
    let id_registro = contador++;
    let materia = document.getElementById("materia").value;
    let titulo = document.getElementById("titulo").value;
    let conteudo = document.getElementById("conteudo").value;

    let registro = {
        id: id_registro,
        materia: materia,
        titulo: titulo,
        conteudo: conteudo
    };

    registros.push(registro);
    saveRegistros(); // Salva os registros após criar um novo
    verRegistros(); // Atualiza a lista de registros exibida
}

function verRegistros() {
    if (registros.length === 0) { //Caso não tenha itens registrados
        return;
    }
    let listaRegistro = document.getElementById("listaRegistro");
    listaRegistro.innerHTML =""; // Limpa a lista antes de adicionar os registros
    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        listaRegistro.innerHTML +=
        "<h3>ID:" + registros[i].id + "</h3>";
        listaRegistro.innerHTML +=
        "<p>Matéria: " + registros[i].materia + "</p>";
        listaRegistro.innerHTML +=
        "<p>Título: " + registros[i].titulo + "</p>";
        listaRegistro.innerHTML +=
        "<p>Conteúdo: " + registros[i].conteudo + "</p>";
        listaRegistro.innerHTML +=
        "<hr>";
    }

}

function buscarMateria() {
    let busca = document.getElementById("busca").value;
    let encontrado = [];
     
    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        if (registros[i].materia.toLowerCase() === busca.toLowerCase()) { // Se a matéria = a busca
            encontrado.push(registros[i]); // Pega os valores e coloca na lista encontrados
        }
    }

    if (encontrado.length === 0) { //Caso não ache nada
        return;
    }

    let texto = ""
    for (let i = 0; i < encontrado.length; i++) { //Percorre a lista de encontrados
        texto += "\n---\n"; //Adiciona os dados dentro de texto
        texto += "Matéria: " + encontrado[i].materia + "\n";
        texto += "Título: " + encontrado[i].titulo + "\n";
        texto += "Conteúdo: " + encontrado[i].conteudo + "\n";
    }
}   
function deletarRegistro() {
    let tamantes = registros.length; // Guarda o tamanho da lista antes de deletar
    registros = registros.filter(r =>r.id !== id); // Filtra a lista, removendo o registro com o ID informado
    if (registros.length < tamantes) { // Se o tamanho da lista diminuiu, significa que o registro foi deletado
        saveRegistros(); // Salva os registros após deletar
    } else {
    }
    verRegistros(); // Atualiza a lista de registros exibida
}

function editRegistro() {
    let registro = registros.find(r => r.id === id); // Procura o registro com o ID informado

    if (registro) { // Se o registro foi encontrado
        
        if (novaMateria) registro.materia = novaMateria;
        if (novoTitulo) registro.titulo = novoTitulo;
        if (novoConteudo) registro.conteudo = novoConteudo;

        saveRegistros(); // Salva os registros após editar
    } else {
    }
}
function saveRegistros() {
    localStorage.setItem("registros", JSON.stringify(registros));
}

function loadRegistros() {
    let registrosSalvos = localStorage.getItem("registros");
    if (registrosSalvos) {
        registros = JSON.parse(registrosSalvos);
        contador = registros.length; // Atualiza o contador para evitar IDs duplicados
    } else {
    }
}