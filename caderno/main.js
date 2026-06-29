function iniciarApp(){
    carregarRegistro();
    verRegistros();
}
iniciarApp();
function iniciarEventos(){
    document.getElementById("btnAdicionar")
        addEventListener("click",criarRegistro);
        
}