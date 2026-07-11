//DADOS Literalmente apenas as declarações de dados e variaveis
let registrosglobais = [];
let contador = 0;
let idEditando = null;
let ordemlista = true;
let listaMaterias = [];

function listarMaterias(registros){
    let materias= []

    for(let i=0; i<registros.length; i++){
        let materialAtual = registros[i].materia;
        if(!materias.includes(materialAtual)){
            materias.push(materialAtual);
        }
    }
    return materias;
}
function listarDatas(registros){
    let datas = []

    for(let i=0; i<registros.length; i++){
        let dataAtual = registros[i].data;
        if(!datas.includes(dataAtual)){
            datas.push(dataAtual);
        }
    }
    return datas;
}