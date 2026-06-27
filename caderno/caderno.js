let registros = [];

function criarRegistro() {
    let materia = prompt("Digite a matéria:");
    let titulo = prompt("Digite o título:");
    let conteudo = prompt("Digite o conteúdo:");

    let registro = {
        materia: materia,
        titulo: titulo,
        conteudo: conteudo
    };

    registros.push(registro);

    console.log("Registro criado!");
}

function verRegistros() {
    if (registros.length === 0) {
        console.log("Nenhum registro.");
        return;
    }

    for (let i = 0; i < registros.length; i++) {
        console.log("\n---");
        console.log("Matéria:", registros[i].materia);
        console.log("Título:", registros[i].titulo);
        console.log("Conteúdo:", registros[i].conteudo);
    }
}

while (true) {
    let opcao = prompt(
        "1 - Criar nota\n2 - Ver notas\n0 - Sair"
    );

    if (opcao === "1") {
        criarRegistro();
    }

    else if (opcao === "2") {
        verRegistros();
    }

    else if (opcao === "0") {
        break;
    }

    else {
        console.log("Opção inválida");
    }
}