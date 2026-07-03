// PERSISTÊNCIA Fuções que alterar o "banco de dados"


function carregarRegistro(){ //Carregar na memória os dados pra poder usar no site
    let dados = localStorage.getItem("registros");
    contador = registros.length

    if(dados) {
        registros=JSON.parse(dados);
    } else {
        registros = [];
    }
}

function salvarRegistros() {
    localStorage.setItem("registros", JSON.stringify(registros));
}
