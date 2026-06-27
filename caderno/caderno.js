let registros = [];

function criarRegistro() {
    let materia = prompt("Digite a matéria:");
    let assunto = prompt("Digite o título:");
    let conteudo = prompt("Digite o conteúdo da nota:");
    let data = new Date().toLocaleString();

    let registro = {
        materia: materia,
        assunto: assunto,
        conteudo: conteudo,
        data: data
    };
registros.push(registro);

console.log("Registro criado com sucesso!");
}
function verRegistros() {
    if (registros.length === 0) {
        console.log("Nenhum registro encontrado.");
        return;
    }
    console.log("=== REGISTROS ===");
    for (let i = 0; i < registros.length; i++) {
        console.log(`\n[${i + 1}]`);
        console.log(`Matéria: ${registros[i].materia}`);
        console.log(`Assunto: ${registros[i].assunto}`);
        console.log(`Conteúdo: ${registros[i].conteudo}`);
        console.log(`Data: ${registros[i].data}`);
    }
}
while (true) {
    console.log("\n=== CADERNO DE ESTUDOS ===");
    console.log("1 - Criar nota");
    console.log("2 - Ver notas");
    console.log("3 - Buscar por Matéria");
    console.log("0 - Sair");
    let opcao = prompt("Escolha: ");
    if (opcao === "1") {
        criarRegistro();
    } else if (opcao === "2") {
        verRegistros();
    } else if (opcao === "0") {
        console.log("Saindo...");
        break;
    } else {
        console.log("Opção inválida!");
    }
}
