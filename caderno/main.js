
function iniciarEventos(){
        getel("btnAdicionar")
        .addEventListener("click", criarRegistro);
        getel("buscar")
        .addEventListener("input", function() {
            filtrarRegistros(registros);
        });

        getel("btnSalvar")
        .addEventListener("click", alterarRegistro);
        getel("btnCancelar")
        .addEventListener("click", cancelarEdicao);

        getel("listaRegistro")
        .addEventListener("click", function(evento){
            let alvo = evento.target;
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
    filtrarRegistros(registros);
    iniciarEventos();
}

iniciarSistema();