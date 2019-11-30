
function addPersonagem(event) {
    event.preventDefault();

    var form = $('#formPersonagem')[0];
    var pa = parseInt(form.PA.value);
    var paD = parseInt(form.PAD.value);
    var pd = parseInt(form.PD.value);
    var gs = (pa + paD) / 2 + pd;
    var nick = form.nick.value;

    var erro = 0;

    var $elementosErro = $('.campo-erro');
    $elementosErro.removeClass('campo-erro');

    if (nick === '') {
        $(form.nick).addClass('campo-erro');
        erro = 1;
    }
    if (isNaN(pa)) {
        $(form.PA).addClass('campo-erro');
        erro = erro + 1;
    }
    if (isNaN(paD)) {
        $(form.PAD).addClass('campo-erro');
        erro = erro + 1;
    }
    if (isNaN(pd)) {
        $(form.PD).addClass('campo-erro');
        erro = erro + 1;
    }
    
    if (erro !== 0) {
        return;
    }

    /* Verificar se o valor de 'classes' condiz com a classe e
    adicionar o icone de classe conforme o resultado */

    var linkClasse = null;
    if (form.classes.value === 'mage') {
        linkClasse = './imgs/classes/mage.png';
    } 
    else if (form.classes.value === 'kunoichi') {
        linkClasse = './imgs/classes/kunoichi.png';
    }
    else if (form.classes.value === 'sorcerer') {
        linkClasse = './imgs/classes/sorcerer.png';
    }
    else if (form.classes.value === 'warrior') {
        linkClasse = './imgs/classes/warrior.png';
    }
    else if (form.classes.value === 'berserker') {
        linkClasse = './imgs/classes/berserker.png';
    }
    else if (form.classes.value === 'witch') {
        linkClasse = './imgs/classes/witch.png';
    }
    else if (form.classes.value === 'ninja') {
        linkClasse = './imgs/classes/ninja.png';
    }
    else if (form.classes.value === 'darkknight') {
        linkClasse = './imgs/classes/darkknight.png';
    }
    else if (form.classes.value === 'ranger') {
        linkClasse = './imgs/classes/ranger.png';
    }
    else if (form.classes.value === 'archer') {
        linkClasse = './imgs/classes/archer.png';
    }
    else if (form.classes.value === 'shai') {
        linkClasse = './imgs/classes/shai.png';
    }
    else if (form.classes.value === 'lahn') {
        linkClasse = './imgs/classes/lahn.png';
    }
    else if (form.classes.value === 'striker') {
        linkClasse = './imgs/classes/striker.png';
    }
    else if (form.classes.value === 'valkyrie') {
        linkClasse = './imgs/classes/valkyrie.png';
    }
    else if (form.classes.value === 'mystic') {
        linkClasse = './imgs/classes/mystic.png';
    }
    else if (form.classes.value === 'musah') {
        linkClasse = './imgs/classes/musah.png';
    }
    else if (form.classes.value === 'maehwa') {
        linkClasse = './imgs/classes/maehwa.png';
    }
    else if (form.classes.value === 'tamer') {
        linkClasse = './imgs/classes/tamer.png';
    }

    //Criando o objeto personagens e atribuindo valores

    var personagem = {
        nick: nick,
        classe: form.classes.value,
        linkClasse: linkClasse,
        pa: pa,
        paD: paD,
        pd: pd,
        gs: gs
    };

    $('[name="nick"]').val('');
    $('[name="PA"]').val('');
    $('[name="PAD"]').val('');
    $('[name="PD"]').val('');


    criarHtmlPersonagem(personagem);
    maiorGs();
    salvarPersonagem(personagem);
}

function apagarPersonagem(event) {
    var $botao = $(event.currentTarget);
    var $personagemInfo = $botao.closest('.personagem-info');
    var indice = $personagemInfo.index() - 1;

    $personagemInfo.remove();
    listaPersonagens.splice(indice, 1);

    salvarTodosPersonagens();
    maiorGs();
}

function maiorGs() {
    var p = [];
    var maisForte = -1;
    var $personagensInfo = $('.personagem-info');
    var $maisForteElemento;
    
    for (var j = 0; j < $personagensInfo.length; j++) {
        var $gs = $personagensInfo.eq(j).find('.gs');
        var gsValor = $gs.html();
        
        if (gsValor > maisForte) {
            maisForte = gsValor;
            $maisForteElemento = $personagensInfo.eq(j);
        }
    }
    var $antigoGs = $('.maior-gs');
    
    if ($maisForteElemento !== undefined) {
        $antigoGs.removeClass('maior-gs');
        $maisForteElemento.addClass('maior-gs');
    }
}

function exibirPersonagens() {
    for (var i = 0; i < listaPersonagens.length; i++) {
        criarHtmlPersonagem(listaPersonagens[i]);
    }
}

function criarHtmlPersonagem(dados) {
    var $personagens = $('.personagens');
    var html = ` 
        <div class="personagem-info">
            <div class="esquerda">
                <img src="${dados.linkClasse}">
                <span>${dados.nick}</span>
            </div>
            <div class="direita">
                <span>GS: </span><span class="gs">${dados.gs}</span>
                <i onclick="apagarPersonagem(event)" class="fa fa-trash apagar" aria-hidden="true"></i>
            </div>
        </div> `;

    $personagens.append(html);
}

function rotacionarImagens() {

    var imagens = $('.img-fundo').toArray();

    for (var i = 0; i < imagens.length; i++) {

        var mx = $(imagens[i]);
        var my;

        if (i < imagens.length - 1)
            my = $(imagens[i + 1]);
        else
            my = $(imagens[0]);

        if (mx.is('.fadeIn')) {
            mx.removeClass('fadeIn').addClass('fadeOut');
            my.removeClass('fadeOut').addClass('fadeIn');
            break;
        }
    }
    return;

    /*
    var m1 = $('.m1');
    var m2 = $('.m2');
    var m3 = $('.m3');
    var m4 = $('.m4');

    if (m1.is('.fadeIn')) {
        m1.removeClass('fadeIn').addClass('fadeOut');
        m2.removeClass('fadeOut').addClass('fadeIn');
    }
    else if (m2.is('.fadeIn')) {
        m2.removeClass('fadeIn').addClass('fadeOut');
        m3.removeClass('fadeOut').addClass('fadeIn');
    }
    else if (m3.is('.fadeIn')) {
        m3.removeClass('fadeIn').addClass('fadeOut');
        m4.removeClass('fadeOut').addClass('fadeIn'); 
    }
    else if (m4.is('.fadeIn')) {
        m4.removeClass('fadeIn').addClass('fadeOut');
        m1.removeClass('fadeOut').addClass('fadeIn');
    }
    */
}

//Iniciando

carregarDados();
exibirPersonagens();
maiorGs();

setInterval(rotacionarImagens, 10000);