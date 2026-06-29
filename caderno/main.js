
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
            const alvo = evento.target;

            if (alvo.classList.contains("btn-excluir")) {
                const id = Number(alvo.dataset.id);
                deletarRegistro(id);
            } else if (alvo.classList.contains("btn-editar")) {
                const id = Number(alvo.dataset.id);
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