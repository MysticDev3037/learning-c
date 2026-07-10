//DADOS Literalmente apenas as declarações de dados e variaveis
let registros = [];
let contador = 0;
let idEditando = null;
let ordemlista = true;
let listaMaterias = [];

function listarMaterias(registro){
    let materias= []

    for(let i=0; i<registro.length; i++){
        let materialAtual = registro[i].materia;
        if(!materias.includes(materialAtual)){
            materias.push(materialAtual);
        }
    }
    return materias;
}