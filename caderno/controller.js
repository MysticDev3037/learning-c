//LÓGICA Os controles que o usuario pode usar direta ou indiretamente

function verificarPaginaAtual(){
    const paginas = document.querySelectorAll(".page");
    for(const pagina of paginas){
        const posicao = pagina.getBoundingClientRect();
        if(posicao.top < window.innerHeight / 2 && posicao.bottom > 200){
            destacarBloco(pagina.dataset.data);
        }
    }
}
function destacarBloco(data){

    const botoes = document.querySelectorAll(".botao-scdate");

    for(const botao of botoes){

        if(data === botao.dataset.data){
            botao.classList.add("ativo");
        } 
        else{
            botao.classList.remove("ativo");
        }
    }
    ajustarScrollDay();
}
function iniciarEventos(){

    iniciarEventoScrollData();

    iniciarEventoWorkspace();

    iniciarEventoConteudo();

    iniciarEventoPesquisa();

    iniciarEventoCards();

}
function iniciarEventoScrollData(){

    const scrollDay = getel("day-navigation");

    scrollDay.addEventListener("wheel", function(evento){

        evento.preventDefault();

        const botoes = [...document.querySelectorAll(".botao-scdate")];

        const atual = botoes.findIndex(botao =>
            botao.classList.contains("ativo")
        );


        if(atual === -1){
            return;
        }


        const proximo = evento.deltaY > 0
            ? atual + 1
            : atual - 1;


        if(proximo < 0 || proximo >= botoes.length){
            return;
        }


        irParaData(
            botoes[proximo].dataset.data
        );


    }, {passive:false});


    scrollDay.addEventListener("click", function(evento){

        const botao = evento.target.closest(".botao-scdate");

        if(!botao){
            return;
        }


        irParaData(botao.dataset.data);

    });

}
function iniciarEventoWorkspace(){

    getel("workspace-scroll").addEventListener(
        "scroll",
        verificarPaginaAtual
    );

}
function iniciarEventoConteudo(){

    getel("conteudo").addEventListener(
        "focus",
        function(){

            document
            .querySelector(".novo-registro")
            .classList
            .add("expandido");

        }
    );

}
function iniciarEventoPesquisa(){

    getel("buscar").addEventListener(
        "input",
        function(){

            filtrarRegistros(registrosglobais);

        }
    );

}
function iniciarEventoCards(){
    getel("listaRegistro").addEventListener(
        "dblclick",
        function(evento){
            const card = evento.target.closest(".card");

            if(!card){
                return;
            }
            const id = Number(card.dataset.id);
            abrirEditor(id);
        }
    )
}