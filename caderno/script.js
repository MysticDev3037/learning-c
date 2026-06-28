let registros = [];
let contador = 0;
carregarRegistros(); // Carrega os registros salvos ao iniciar o programa
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
    salvarRegistros(); // Salva os registros após criar um novo
    verRegistros(); // Atualiza a lista de registros exibida
    limparCampos(); // Limpa os campos do formulário
}

function limparCampos() {
    document.getElementById("materia").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";
    document.getElementById("materia").focus(); // Coloca o foco de volta no campo de matéria
}
function verRegistros() {
    let listaRegistro = document.getElementById("listaRegistro");
    listaRegistro.innerHTML = ""; // Limpa a lista antes de adicionar os registros

    if (registros.length === 0) {
        listaRegistro.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return;
    }

    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        listaRegistro.innerHTML += "<p>Matéria: " + registros[i].materia + "</p>";
        listaRegistro.innerHTML += "<p>Título: " + registros[i].titulo + "</p>";
        listaRegistro.innerHTML += "<p>Conteúdo: " + registros[i].conteudo + "</p>";
        listaRegistro.innerHTML += "<button onclick='deletarRegistro(" + registros[i].id + ")'>Excluir</button>";
        listaRegistro.innerHTML += "<button onclick='editRegistro(" + registros[i].id + ", prompt(\"Nova matéria:\", \"" + registros[i].materia + "\"), prompt(\"Novo título:\", \"" + registros[i].titulo + "\"), prompt(\"Novo conteúdo:\", \"" + registros[i].conteudo + "\"))'>Editar</button>";
        listaRegistro.innerHTML += "<hr>";
    }
}
function editRegistro(id){}

function buscarMateria() {
    let busca = document.getElementById("busca").value;
    let encontrado = [];

    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        if (registros[i].materia.toLowerCase() === busca.toLowerCase()) { // Se a matéria = a busca
            encontrado.push(registros[i]); // Pega os valores e coloca na lista encontrados
        }
    }

    if (encontrado.length === 0) { //Caso não ache nada
        alert("Nenhum registro encontrado para essa matéria.");
        return;
    }

    let texto = "";
    for (let i = 0; i < encontrado.length; i++) { //Percorre a lista de encontrados
        texto += "\n---\n"; //Adiciona os dados dentro de texto
        texto += "Matéria: " + encontrado[i].materia + "\n";
        texto += "Título: " + encontrado[i].titulo + "\n";
        texto += "Conteúdo: " + encontrado[i].conteudo + "\n";
    }

    alert(texto);
}

function deletarRegistro(id) {
    registros = registros.filter(r => r.id !== id); // Filtra a lista, removendo o registro com o ID informado
    salvarRegistros(); // Salva os registros após deletar
    verRegistros(); // Atualiza a lista de registros exibida
}

function editRegistro(id, novaMateria, novoTitulo, novoConteudo) {
    let registro = registros.find(r => r.id === id); // Procura o registro com o ID informado

    if (registro) { // Se o registro foi encontrado
        if (novaMateria) registro.materia = novaMateria;
        if (novoTitulo) registro.titulo = novoTitulo;
        if (novoConteudo) registro.conteudo = novoConteudo;

        salvarRegistros(); // Salva os registros após editar
        verRegistros();
    }
}

function salvarRegistros() {
    localStorage.setItem("registros", JSON.stringify(registros));
}

function carregarRegistros() {
    let registrosSalvos = localStorage.getItem("registros");
    if (registrosSalvos) {
        registros = JSON.parse(registrosSalvos);
        contador = registros.length; // Atualiza o contador para evitar IDs duplicados
    }
}
