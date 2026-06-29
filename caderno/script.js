let registros = [];
let contador = 0;
let idEditando = null;
verRegistros(); // Exibe os registros carregados

function criarRegistro() {
    let materia = document.getElementById("materia").value.trim();
    let titulo = document.getElementById("titulo").value.trim();
    let conteudo = document.getElementById("conteudo").value.trim();

    if (materia === "" || titulo === "" || conteudo === "") {
        alert("Todos os campos devem ser preenchidos.");
        return;
    }

    let id_registro = contador++;
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
        listaRegistro.innerHTML += "<button onclick='abrirModal("+ registros[i].id + ")'>Editar</button>"
        listaRegistro.innerHTML += "<hr>";
    }
}
function abrirModal(id){
    document.getElementById("modalEditar").style.display = "flex";
    idEditando = id;
    let registro = registros.find(r => r.id === id);
        document.getElementById("editarmateria").value = registro.materia
        document.getElementById("editartitulo").value = registro.titulo
        document.getElementById("editarconteudo").value = registro.conteudo
}
function alterarRegistro() {
    let registro = registros.find(r => r.id === idEditando);
    registro.materia = document.getElementById("editarmateria").value.trim();
    registro.titulo = document.getElementById("editartitulo").value.trim();
    registro.conteudo = document.getElementById("editarconteudo").value.trim();

    salvarRegistros(); // Salva os registros após editar
    verRegistros(); // Atualiza a lista de registros exibida
    cancelarEdicao(); // Fecha o modal de edição
}




function cancelarEdicao(){
    document.getElementById("modalEditar").style.display = "none";
    idEditando = null;
    document.getElementById("editarmateria").value = "";
    document.getElementById("editartitulo").value = "";
    document.getElementById("editarconteudo").value = "";
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


function salvarRegistros() {
    localStorage.setItem("registros", JSON.stringify(registros));
}
