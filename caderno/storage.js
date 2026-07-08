// PERSISTÊNCIA Fuções que alterar o "banco de dados"
function carregarRegistro() {
    console.log(registros);
    let dados = localStorage.getItem("registros");
    if (dados) {
        registros = JSON.parse(dados);
    } else {
        registros = [
            {
                id: 1,
                materia: "Estrutura de Dados",
                titulo: "Listas Encadeadas",
                conteudo: "Revisar listas simplesmente encadeadas.",
                data: "2026-07-07" 
            },
            {
                id: 2,
                materia: "UX Design",
                titulo: "Wireframe",
                conteudo: "Criar um wireframe de baixa fidelidade.",
                data: "2026-07-06"
            }
        ];
        console.log(registros);
        salvarRegistros(); // Salva os exemplos no localStorage
    }
    contador = registros.length;
}

function salvarRegistros() {
    localStorage.setItem("registros", JSON.stringify(registros));
}
