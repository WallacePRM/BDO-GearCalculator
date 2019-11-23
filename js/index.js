
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

    var linkClasse = null;
    if (form.classes.value === 'mage') {
        linkClasse = 'https://www.uhdpix.com/images/449084549abe82c5f04c21b90ac9ef5e.md.png';
    } 
    else if (form.classes.value === 'kunoichi') {
        linkClasse = 'https://www.uhdpix.com/images/60c52a02b2f851c3e5d6e54bf9c4c730.md.png';
    }
    else if (form.classes.value === 'sorcerer') {
        linkClasse = 'https://bddatabase.net/forum/download/file.php?avatar=2449_1469300309.png';
    }
    else if (form.classes.value === 'warrior') {
        linkClasse = 'https://i.pinimg.com/564x/fd/dc/32/fddc32cc38a7bacb5fdc2d60a4f189f0.jpg';
    }
    else if (form.classes.value === 'berserker') {
        linkClasse = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ug12kYv9mLmf5NTRl9pvdyY26Fgtz1czGIdOZXg5CDTCSUA2';
    }
    else if (form.classes.value === 'witch') {
        linkClasse = 'https://ih0.redbubble.net/image.284858381.3334/raf,360x360,075,t,fafafa:ca443f4786.jpg';
    }
    else if (form.classes.value === 'ninja') {
        linkClasse = 'https://res.cloudinary.com/teepublic/image/private/s--adm3SnW9--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1499278659/production/designs/1715847_0.jpg';
    }
    else if (form.classes.value === 'darkknight') {
        linkClasse = 'https://akamai-webcdn.blackdesertonline.com/bdo/operation/news/darkknight/darkknight_symbol.png';
    }
    else if (form.classes.value === 'ranger') {
        linkClasse = 'https://res.cloudinary.com/teepublic/image/private/s--wsiXnpOc--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1487260108/production/designs/1228227_2.jpg';
    }
    else if (form.classes.value === 'archer') {
        linkClasse = 'https://i.imgur.com/p6VUqM4.png';
    }
    else if (form.classes.value === 'shai') {
        linkClasse = 'https://s1.playblackdesert.com/web/Static/Upload/News/5853bd9fe9420190619073933517.png';
    }
    else if (form.classes.value === 'lahn') {
        linkClasse = 'https://ih0.redbubble.net/image.701597012.8850/flat,1000x1000,075,f.jpg';
    }
    else if (form.classes.value === 'striker') {
        linkClasse = 'https://akamai-webcdn.blackdesertonline.com/bdo/operation/news/striker/striker_symbol.png';
    }
    else if (form.classes.value === 'valkyrie') {
        linkClasse = 'https://www.nicepng.com/png/detail/160-1601070_black-desert-online-logo-valkyrie-02-png-emblem.png';
    }
    else if (form.classes.value === 'mystic') {
        linkClasse = 'https://i.imgur.com/WGhhw9a.png';
    }
    else if (form.classes.value === 'musah') {
        linkClasse = 'https://banner2.cleanpng.com/20180619/eyu/kisspng-black-desert-online-playerunknown-s-battlegrounds-black-desert-5b28e9386b5959.6670516515294078004397.jpg';
    }
    else if (form.classes.value === 'maehwa') {
        linkClasse = 'https://static-cdn.jtvnw.net/jtv_user_pictures/fb8a7713-911a-459f-95da-75efc9e54d14-profile_image-300x300.png';
    }
    else if (form.classes.value === 'tamer') {
        linkClasse = 'https://ih0.redbubble.net/image.294568259.0434/ap,550x550,12x12,1,transparent,t.png';
    }

    

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

carregarDados();
exibirPersonagens();
maiorGs();
