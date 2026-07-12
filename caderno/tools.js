function getel(id){ //Otimiza a busca de elementos no DOM, evitando repetição de código
    return document.getElementById(id);
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
function gerarPagina(){
        let pagina = document.createElement("section");
        pagina.className = "page";
        return pagina;
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