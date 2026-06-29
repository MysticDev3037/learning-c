//LÓGICA Os controles que o usuario pode usar direta ou indiretamente
function criarRegistro() {
    let materia = document.getElementById("materia").value.trim();
    let titulo = document.getElementById("titulo").value.trim();
    let conteudo = document.getElementById("conteudo").value.trim();

    if (materia === "" || titulo === "" || conteudo === "") {
        alert("Todos os campos devem ser preenchidos.");
        return;
    }

    let id_registro = contador++;
    let registro = {
        id: id_registro,
        materia: materia,
        titulo: titulo,
        conteudo: conteudo
    };

    registros.push(registro);
    salvarRegistros(); // Salva os registros após criar um novo
    verRegistros(); // Atualiza a lista de registros exibida
    limparCampos(); // Limpa os campos do formulário
}

function alterarRegistro() {
    let registro = registros.find(r => r.id === idEditando);
    registro.materia = document.getElementById("editarmateria").value.trim();
    registro.titulo = document.getElementById("editartitulo").value.trim();
    registro.conteudo = document.getElementById("editarconteudo").value.trim();

    salvarRegistros(); // Salva os registros após editar
    verRegistros(); // Atualiza a lista de registros exibida
    cancelarEdicao(); // Fecha o modal de edição
}

function deletarRegistro(id) {
    registros = registros.filter(r => r.id !== id); // Filtra a lista, removendo o registro com o ID informado
    salvarRegistros(); // Salva os registros após deletar
    verRegistros(); // Atualiza a lista de registros exibida
}

function buscarMateria() {
    let busca = document.getElementById("busca").value;
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