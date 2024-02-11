const numeroVidas = document.getElementById('vidas');

function validaValor(chute) {
    const numero = +chute;

    if(numeroForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Invalid value!</div>`;
        return;
    }

    if(numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += `<div>Invalid value: The number need to be between ${menValor} and ${maiValor}</div>`;
        return;
    }

    if(numero === number) {
        telaVitoria();
    } else if (numero > number){
        elementoChute.innerHTML += `
            <div>The secret number is lower <i class="fa-solid fa-down-long"></i></div>   
        `
        vidaAtual -= 1;
        atualizaVida(vidaAtual);

        if (verificaVida(vidaAtual)) {
            telaDerrota();
        }
    } else {
        elementoChute.innerHTML += `
            <div>The secret number is higher <i class="fa-solid fa-up-long"></i></div>   
        `
        vidaAtual -= 1;
        atualizaVida(vidaAtual);

        if (verificaVida(vidaAtual)) {
            telaDerrota();
        }
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
    return numero > maiValor || numero < menValor;
}

function verificaVida(vidaAtual) {
    return vidaAtual === 0;
}

function telaDerrota() {
    document.body.innerHTML = `
            <h2>YOU COULDN'T FIND IT!</h2>
            <h3>The secret number was : ${number} </h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">Play Again</button>
        `
    document.body.classList.add('derrota');
    atualizaCorBotao();
}

function telaVitoria() {
    document.body.innerHTML = `
            <h2>YOU FOUND IT!</h2>
            <h3>The secret number was : ${number} </h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">Play Again</button>
        `
    document.body.classList.add('vitoria');
    atualizaCorBotao();
}

function atualizaVida(vidaAtual) {
    numeroVidas.innerHTML = `
        <h3>♡ = ${vidaAtual}</h3>
    `;
}

function atualizaCorBotao() {
    var bodyBackgroundColor = getComputedStyle(document.body).getPropertyValue('background-color');
    var button = document.querySelector('.btn-jogar-novamente');
    button.style.color = bodyBackgroundColor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();   
    }
});