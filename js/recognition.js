const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    validaValor(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Your guess:</div>
        <span class="box">${chute}</span>
    `
}