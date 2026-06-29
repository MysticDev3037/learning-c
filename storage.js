// PERSISTÊNCIA Fuções que alterar o "banco de dados"

carregarRegistro(); //Puxa os dados do diretorio local
verRegistros(); // Exibe os registros carregados na interface

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
