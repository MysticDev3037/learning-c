// INTERFACE Funções que alterem a interface do usuario
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
        listaRegistro.innerHTML += "<button class='btn-excluir' data-id='1'>Excluir</button>"
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