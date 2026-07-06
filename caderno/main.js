
    function iniciarEventos(){
            getel("btnAdicionar")
            .addEventListener("click", criarRegistro);
            getel("buscar")
            .addEventListener("input", function() {
                filtrarRegistros(registros);
            });
            getel("btnOrdem")
            .addEventListener("click", function() {
                ordemlista = !ordemlista; // Alterna a ordem da lista
                if (ordemlista) {
                    getel("btnOrdem").textContent = "Mais recentes";
                } else {
                    getel("btnOrdem").textContent = "Mais antigos";
                }
            atualizarTela(); // Atualiza a tela com a nova ordem 
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
    function atualizarTela() {
        filtrarRegistros(registros);
    }

    function iniciarSistema(){
        carregarRegistro();
        filtrarRegistros(registros);
        iniciarEventos();
        getel("camp-data").value = dataAtual(); // Define a data atual no campo de data
    }
    iniciarSistema();