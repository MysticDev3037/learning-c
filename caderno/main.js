

function atualizarTela() {
    filtrarRegistros(registrosglobais);
}


function iniciarSistema() {
    carregarRegistro();      // Carrega os registros do localStorage
    iniciarEventos();        // Registra todos os eventos

    let materias = listarMaterias(registrosglobais);
    atualizarListaMaterias(materias);
    verScrollDay(listarDatas(registrosglobais));
    atualizarSidebar(materias); // Atualiza a sidebar com as matérias

    atualizarTela();         // Atualiza a tela com os registross


}

iniciarSistema();