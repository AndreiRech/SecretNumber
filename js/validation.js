function validaValor(chute) {
    const numero = +chute;

    if (numeroForInvalido(numero)) {
        alert("Invalid value!");
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}