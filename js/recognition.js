const elementoChute = document.getElementById('chute');
const botaoComeco = document.getElementById('comeco');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    chute = chute.slice(0, -1);
    exibeChute(chute);
    validaValor(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Your guess:</div>
        <span class="box">${chute}</span>
    `
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'comeco') {
        recognition.start();
        e.target.remove();
    }
})

recognition.addEventListener('end', () => recognition.start());