//LÓGICA Os controles que o usuario pode usar direta ou indiretamente
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
function verificarPaginaAtual(){
    const paginas = document.querySelectorAll(".page");
    for(const pagina of paginas){
        const posicao = pagina.getBoundingClientRect();
        if(posicao.top < window.innerHeight && posicao.bottom > 0){
            destacarBloco(pagina.dataset.data);
        }
    }
}
function destacarBloco(data){

    const botoes = document.querySelectorAll(".botao-scdate");

    for(const botao of botoes){

        if(data === botao.dataset.data){
            botao.classList.add("ativo");
            console.log("ATIVOU", botao.dataset.data);
        } 
        else{
            botao.classList.remove("ativo");
            console.log("REMOVEU", botao.dataset.data);
        }
    }
}