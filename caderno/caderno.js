let registros = [];
let rl = null;

if (typeof require === 'function') {
    const readline = require('readline/promises');
    const { stdin: input, stdout: output } = require('process');
    rl = readline.createInterface({ input, output });
}

async function pedirTexto(mensagem) {
    if (typeof prompt === 'function') {
        return prompt(mensagem);
    }

    if (rl) {
        return rl.question(`${mensagem} `);
    }

    throw new Error('Nenhuma entrada disponível para o caderno.');
}

async function criarRegistro() {
    let materia = await pedirTexto('Digite a matéria:');
    let assunto = await pedirTexto('Digite o título:');
    let conteudo = await pedirTexto('Digite o conteúdo da nota:');
    let data = new Date().toLocaleString();

    let registro = {
        materia: materia,
        assunto: assunto,
        conteudo: conteudo,
        data: data
    };

    registros.push(registro);
    console.log('Registro criado com sucesso!');
}

function verRegistros() {
    if (registros.length === 0) {
        console.log('Nenhum registro encontrado.');
        return;
    }

    console.log('=== REGISTROS ===');
    for (let i = 0; i < registros.length; i++) {
        console.log(`\n[${i + 1}]`);
        console.log(`Matéria: ${registros[i].materia}`);
        console.log(`Assunto: ${registros[i].assunto}`);
        console.log(`Conteúdo: ${registros[i].conteudo}`);
        console.log(`Data: ${registros[i].data}`);
    }
}

async function main() {
    while (true) {
        console.log('\n=== CADERNO DE ESTUDOS ===');
        console.log('1 - Criar nota');
        console.log('2 - Ver notas');
        console.log('3 - Buscar por Matéria');
        console.log('0 - Sair');

        let opcao = await pedirTexto('Escolha: ');

        if (opcao === '1') {
            await criarRegistro();
        } else if (opcao === '2') {
            verRegistros();
        } else if (opcao === '0') {
            console.log('Saindo...');
            break;
        } else {
            console.log('Opção inválida!');
        }
    }
}

main().finally(() => {
    if (rl) {
        rl.close();
    }
});
