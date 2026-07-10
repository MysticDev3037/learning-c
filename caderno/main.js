function iniciarEventos() {

    // Campo de pesquisa
    getel("buscar").addEventListener("input", function () {
        filtrarRegistros(registros);
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
    filtrarRegistros(registros);
}

function iniciarSistema() {

    carregarRegistro();      // Carrega os registros do localStorage

    atualizarTela();         // Desenha os cards na tela

    iniciarEventos();        // Registra todos os eventos

    atualizarSidebar(registros); // Atualiza a sidebar com as matérias
}

iniciarSistema();