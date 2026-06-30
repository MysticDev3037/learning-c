// INTERFACE Funções que alterem a interface do usuario
function verRegistros() {
    let listaRegistro = document.getElementById("listaRegistro");

    listaRegistro.innerHTML = ""; // Limpa a lista antes de adicionar os registros

    if (registros.length === 0) {
        listaRegistro.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return;
    }

    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        let botao =document.createElement("button") //Quando vc cria na memoria, você coloca a referência de cada botão na variavel "botão", não o nome "botão" então não da erro, a cada loop o "botao" aponta pra um botão novo
        let materia = document.createElement("p");
        let titulo = document.createElement("p");
        let conteudo = document.createElement("p");
        let botaoeditar = document.createElement("button");
        let linha = document.createElement("hr");


        materia.textContent = "Matéria:" + registros[i].materia;
        listaRegistro.appendChild(materia);

        titulo.textContent = "Título:" + registros[i].titulo;
        listaRegistro.appendChild(titulo);

        conteudo.textContent = "Conteúdo:" + registros[i].conteudo;
        listaRegistro.appendChild(conteudo);

        botao.textContent = "Excluir";
        botao.className="btn-excluir";
        botao.dataset.id=registros[i].id;
        listaRegistro.appendChild(botao);

        botaoeditar.textContent = "Editar";
        botaoeditar.className="btn-editar";
        botaoeditar.dataset.id=registro[i].id;
        listaRegistro.appendChild(botaoeditar);
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