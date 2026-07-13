function getel(id){ //Otimiza a busca de elementos no DOM, evitando repetição de código
    return document.getElementById(id);
}
function hidden(id){
    getel(id).classList.add("hidden");
}

function show(id){
    getel(id).classList.remove("hidden");
}
function ordenarRegistros(reg) {
    if (ordemlista) {
        return [...reg].sort((a, b) => new Date(b.data) - new Date(a.data)); // Mais recentes primeiro
    } else {
        return [...reg].sort((a, b) => new Date(a.data) - new Date(b.data)); // Mais antigos primeiro
    }
}

function formatarData(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`; // Retorna no formato DD/MM/AAAA
}

function formatarDataScroll(date) {
    date = new Date(date);
    const meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
    return{
        dia: date.getDate(),
        mes: meses[date.getMonth()]
    }
}
function converterData(data){
    const partes = data.split("-");
    return new Date(
        Number(partes[0]),
        Number(partes[1]) -1,
        Number(partes[2])
    );
}
function irParaData(data){
    const paginas = document.querySelectorAll(".page");
    for(const pagina of paginas){
        if(pagina.dataset.data === data){
            pagina.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
            break;
        }
    }
}
function buscarRegistro(id){
    for(let registro of registrosglobais){
        if(registro.id === id){
            return registro;
        }
    }
    return null;
}
let deslocamentoScrollDay = 0;

function ajustarScrollDay() {
    const container = document.querySelector(".workspace-nav");
    const lista = getel("day-navigation");
    const ativo = lista.querySelector(".botao-scdate.ativo");

    if (!container || !ativo) {
        return;
    }

    const margem = 90;
    const caixa = container.getBoundingClientRect();
    const botao = ativo.getBoundingClientRect();

    let novoDeslocamento = deslocamentoScrollDay;

    // O ativo saiu por baixo: a pilha sobe.
    if (botao.bottom > caixa.bottom - margem) {
        novoDeslocamento -= botao.bottom - (caixa.bottom - margem);
    }

    // O ativo saiu por cima: a pilha desce.
    if (botao.top < caixa.top + margem) {
        novoDeslocamento += (caixa.top + margem) - botao.top;
    }

    // Impede a lista de passar do começo ou do fim.
    const minimo = Math.min(
        0,
        container.clientHeight - lista.scrollHeight
    );

    deslocamentoScrollDay = Math.max(
        minimo,
        Math.min(0, novoDeslocamento)
    );

    lista.style.transform =
        `translateY(${deslocamentoScrollDay}px)`;
}








