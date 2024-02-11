const menValor = 0;
const maiValor = 100;
const vidas = 6;
let vidaAtual = vidas;
const number = numberGenerator();

const elementoMenValor = document.getElementById('menor-valor');
elementoMenValor.innerHTML = menValor;

const elementoMaiValor = document.getElementById('maior-valor');
elementoMaiValor.innerHTML = maiValor;

function numberGenerator() {
    return parseInt(Math.random() * maiValor + 1);
}