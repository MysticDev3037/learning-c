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
