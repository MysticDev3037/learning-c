let registros = [];
let contador = 0;
loadRegistros(); // Carrega os registros salvos ao iniciar o programa
function criarRegistro() {
    let id_registro = contador++;
    let materia = prompt("Digite a matéria:");
    let titulo = prompt("Digite o título:");
    let conteudo = prompt("Digite o conteúdo:");

    let registro = {
        id: id_registro,
        materia: materia,
        titulo: titulo,
        conteudo: conteudo
    };

    registros.push(registro);
    saveRegistros(); // Salva os registros após criar um novo

    console.log("Registro criado!");
    contador++;
}

function verRegistros() {
    if (registros.length === 0) { //Caso não tenha itens registrados
        console.log("Nenhum registro.");
        return;
    }

    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        console.log("\n---"); // Vai apresentando os dados em loop
        console.log("ID:", registros[i].id);
        console.log("Matéria:", registros[i].materia);
        console.log("Título:", registros[i].titulo);
        console.log("Conteúdo:", registros[i].conteudo);
    }
}

function buscarMateria() {
    let busca = prompt("Digite a matéria que deseja buscar:");
    let encontrado = [];
     
    for (let i = 0; i < registros.length; i++) { // Percorre todos os registros
        if (registros[i].materia.toLowerCase() === busca.toLowerCase()) { // Se a matéria = a busca
            encontrado.push(registros[i]); // Pega os valores e coloca na lista encontrados
        }
    }

    if (encontrado.length === 0) { //Caso não ache nada
        console.log("Nenhum registro encontrado para a matéria:", busca);
        return;
    }

    let texto = ""
    for (let i = 0; i < encontrado.length; i++) { //Percorre a lista de encontrados
        texto += "\n---\n"; //Adiciona os dados dentro de texto
        texto += "Matéria: " + encontrado[i].materia + "\n";
        texto += "Título: " + encontrado[i].titulo + "\n";
        texto += "Conteúdo: " + encontrado[i].conteudo + "\n";
    }
    alert(texto); // Mostra o texto
}   
function deletarRegistro() {
    let id = Number(prompt("Digite o ID do registro que deseja deletar:"));
    let tamantes = registros.length; // Guarda o tamanho da lista antes de deletar
    registros = registros.filter(r =>r.id !== id); // Filtra a lista, removendo o registro com o ID informado
    if (registros.length < tamantes) { // Se o tamanho da lista diminuiu, significa que o registro foi deletado
        saveRegistros(); // Salva os registros após deletar
        console.log("Registro deletado com sucesso!");
    } else {
        console.log("Registro não encontrado.");
    }
}

function editRegistro() {
    let id = Number(prompt("Digite o ID do registro que deseja editar:"));
    let registro = registros.find(r => r.id === id); // Procura o registro com o ID informado

    if (registro) { // Se o registro foi encontrado
        let novaMateria = prompt("Digite a nova matéria (deixe em branco para não alterar):");
        let novoTitulo = prompt("Digite o novo título (deixe em branco para não alterar):");
        let novoConteudo = prompt("Digite o novo conteúdo (deixe em branco para não alterar):");
        
        if (novaMateria) registro.materia = novaMateria;

while (true) { // Loop do menu inicial
    let opcao = prompt(
        "1 - Criar nota\n2 - Ver notas\n0 - Sair"
    );

    if (opcao === "1") {
        criarRegistro();
    }

    else if (opcao === "2") {
        verRegistros();
    }
    else if (opcao === "3") {
        buscarMateria();
    }
    else if (opcao === "0") {
        break;
    }

    else {
        console.log("Opção inválida");
    }
}
function saveRegistros() {
    localStorage.setItem("registros", JSON.stringify(registros));
    console.log("Registros salvos com sucesso!");
}

function loadRegistros() {
    let registrosSalvos = localStorage.getItem("registros");
    if (registrosSalvos) {
        registros = JSON.parse(registrosSalvos);
        contador = registros.length; // Atualiza o contador para evitar IDs duplicados
        console.log("Registros carregados com sucesso!");
    } else {
        console.log("Nenhum registro salvo encontrado.");
    }
}