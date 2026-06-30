
function iniciarEventos(){
    document
        .getElementById("btnAdicionar")
        .addEventListener("click", criarRegistro);
    document
        .getElementById("btnSalvar")
        .addEventListener("click", alterarRegistro);
    document
        .getElementById("btnCancelar")
        .addEventListener("click", cancelarEdicao);
    document
        .getElementById("listaRegistro")
        .addEventListener("click", function(evento){
            let id = evento.target;
            if (evento.classList.contains("btn-excluir")) {
                const id = Number(evento.target.dataset.id);
                deletarRegistro(id);
            } else if (evento.classList.contains("btn-editar")) {
                const id = Number(evento.target.dataset.id);
                abrirModal(id);
            }
        });
}

function iniciarSistema(){
    carregarRegistro();
    verRegistros();
    iniciarEventos();
}

iniciarSistema();