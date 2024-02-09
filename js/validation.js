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
        document.body.innerHTML = `
            <h2>YOU FOUND IT!</h2>
            <h3>The secret number was : ${number} </h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">Play Again</button>
        `
    } else if (numero > number){
        elementoChute.innerHTML += `
            <div>The secret number is lower <i class="fa-solid fa-down-long"></i></div>   
        `
    } else {
        elementoChute.innerHTML += `
            <div>The secret number is higher <i class="fa-solid fa-up-long"></i></div>   
        `
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
    return numero > maiValor || numero < menValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});