function iniciarEventos() {

    // Campo de pesquisa
    getel("buscar").addEventListener("input", function () {
        filtrarRegistros(registrosglobais);
    });

    // Clique nos cards (delegação de eventos)
    getel("listaRegistro").addEventListener("click", function (evento) {

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

function atualizarTela() {
    filtrarRegistros(registrosglobais);
}

function iniciarSistema() {
    carregarRegistro();      // Carrega os registros do localStorage
    iniciarEventos();        // Registra todos os eventos
    atualizarSidebar(registrosglobais); // Atualiza a sidebar com as matérias
    atualizarTela();         // Atualiza a tela com os registross
}

iniciarSistema();