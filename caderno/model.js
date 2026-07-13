//DADOS Literalmente apenas as declarações de dados e variaveis
let registrosglobais = [];
let contador = 0;
let idEditando = null;
let ordemlista = true;
let listaMaterias = [];
let indiceScroll = 0;

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
    const datas = new Set();

    for(const registro of registros){
        datas.add(registro.data);
    }
    return [...datas];
}
function criarRegistro() {
    let materia = getel("materia").value.trim();
    let titulo = getel("titulo").value.trim();
    let conteudo = getel("conteudo").value.trim();
    let data = getel("camp-data").value.trim();

    if (materia === "" || titulo === "" || conteudo === "") {
        alert("Todos os campos devem ser preenchidos.");
        return;
    }

    let id_registro = contador++;
    let registro = {
        id: id_registro,
        materia: materia,
        titulo: titulo,
        conteudo: conteudo,
        data: data
    };
    registros.push(registro);
    salvarRegistros(); // Salva os registros após criar um novo
    filtrarRegistros(registros); // Atualiza a lista de registros exibida
    limparCampos(); // Limpa os campos do formulário
    getel("camp-data").value = dataAtual(); // Atualiza a data no campo de data
}

function alterarRegistro() {
    let registro = registros.find(r => r.id === idEditando);
    registro.materia = getel("editarmateria").value.trim();
    registro.titulo = getel("editartitulo").value.trim();
    registro.conteudo = getel("editarconteudo").value.trim();

    salvarRegistros(); // Salva os registros após editar
    filtrarRegistros(registros); // Atualiza a lista de registros exibida
    cancelarEdicao(); // Fecha o modal de edição
}

function deletarRegistro(id) {
    registros = registros.filter(r => r.id !== id); // Filtra a lista, removendo o registro com o ID informado
    salvarRegistros(); // Salva os registros após deletar
    filtrarRegistros(registros); // Atualiza a lista de registros exibida
}

function buscarMateria() {
    let busca = getel("busca").value;
    let encontrado = [];

    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        if (registros[i].materia.toLowerCase() === busca.toLowerCase()) { // Se a matéria = a busca
            encontrado.push(registros[i]); // Pega os valores e coloca na lista encontrados
        }
    }

    if (encontrado.length === 0) { //Caso não ache nada
        alert("Nenhum registro encontrado para essa matéria.");
        return;
    }

    let texto = "";
    for (let i = 0; i < encontrado.length; i++) { //Percorre a lista de encontrados
        texto += "\n---\n"; //Adiciona os dados dentro de texto
        texto += "Matéria: " + encontrado[i].materia + "\n";
        texto += "Título: " + encontrado[i].titulo + "\n";
        texto += "Conteúdo: " + encontrado[i].conteudo + "\n";
    }

    alert(texto);
}