var listaPersonagens = [];

function salvarPersonagem(personagem) {

    listaPersonagens.push(personagem);
    var jsonListaPersonagens = JSON.stringify(listaPersonagens);
    localStorage.setItem('personagens', jsonListaPersonagens);
}

function carregarDados() {
    var json = localStorage.getItem('personagens');
    if (json !== null)
        listaPersonagens = JSON.parse(json);
    else {
        listaPersonagens = [];
    }
}

function salvarTodosPersonagens() {
    var jsonListaPersonagens = JSON.stringify(listaPersonagens);
    localStorage.setItem('personagens', jsonListaPersonagens);
}