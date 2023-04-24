//Capturando elementos do document ->

//buttons
let encryptButton = document.querySelector('#encrypt');
let decryptButton = document.querySelector('#decrypt');
let copyButton = document.querySelector('#copy');
let darkModeButton = document.querySelector('#darkMode');
let lightModeButton = document.querySelector('#lightMode');

//valores a serem manipulados
let textMsg = document.querySelector('#textMesage');
let textAnswer = document.querySelector('#textResult');

//blocos a serem manipulados
let html = document.querySelector('html');
let darkAlura = document.querySelector('#darkAlura');
let lightAlura = document.querySelector('#lightAlura');
let msgSuccessful = document.querySelector('#successful');
let msgUnsuccessful = document.querySelector('#unsuccessful');
let attentionIcon = document.querySelector('#attentionIcon');
let textWarning = document.querySelector('#textWarning');
let copyMsg = document.querySelector('#copyMsg');


// ---------------------------------------------------------------------------------------

let notAllow = '1234567890ABCDEFGHIJKLMNOPQRSTUVWYXZáãàéêèúùíìóõò´`^~!@#$%¨&*()_-+=[{}]?°ªº,.;:/|';

// ---------------------------------------------------------------------------------------

//função para dark mode
darkModeButton.addEventListener('click', function () {

    darkAlura.style.display = 'none';
    lightAlura.style.display = 'block';

    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'block';

    html.classList.add('dark-mode');
})

lightModeButton.addEventListener('click', function () {

    lightAlura.style.display = 'none';
    darkAlura.style.display = 'block';

    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'block';

    html.classList.remove('dark-mode');
})

//função para criptografar
encryptButton.addEventListener('click', function () {

    userMsg = textMsg.value;

    let userMsgEncrypted = userMsg.replace(/e/g, 'enter').
        replace(/i/g, 'imes').
        replace(/a/g, 'ai').
        replace(/o/g, 'ober').
        replace(/u/g, 'ufat');

    if (userMsgEncrypted == '' || userMsgEncrypted == ' ' || userMsgEncrypted == '  ' || userMsgEncrypted == '   ') {

        attentionIcon.classList.remove('fa-beat');
        attentionIcon.classList.add('fa-shake');
        textWarning.classList.add('block');
        msgSuccessful.style.display = 'none';
        msgUnsuccessful.style.display = 'flex';

    } else {

        attentionIcon.classList.remove('fa-shake');
        attentionIcon.classList.add('fa-beat');
        msgUnsuccessful.style.display = 'none';
        msgSuccessful.style.display = 'flex';
        textWarning.setAttribute('class', 'encrypt-warning-content');
        textAnswer.textContent = userMsgEncrypted;

    }

    for (let i = 0; i < notAllow.length; i++) {
        if (userMsgEncrypted.indexOf(notAllow.charAt(i)) != -1) {

            attentionIcon.classList.remove('fa-beat');
            attentionIcon.classList.add('fa-shake');
            msgSuccessful.style.display = 'none';
            msgUnsuccessful.style.display = 'flex';
            textWarning.classList.add('block');

        }
    }
})

//função para descriptografar
decryptButton.addEventListener('click', function () {

    userMsg = textMsg.value;

    let userMsgEncrypted = userMsg.replace(/enter/g, 'e').
        replace(/imes/g, 'i').
        replace(/ai/g, 'a').
        replace(/ober/g, 'o').
        replace(/ufat/g, 'u');

    if (userMsgEncrypted == '' || userMsgEncrypted == ' ' || userMsgEncrypted == '  ' || userMsgEncrypted == '   ') {

        attentionIcon.classList.remove('fa-beat');
        attentionIcon.classList.add('fa-shake');
        textWarning.classList.add('block');
        msgSuccessful.style.display = 'none';
        msgUnsuccessful.style.display = 'flex';

    } else {

        attentionIcon.classList.remove('fa-shake');
        attentionIcon.classList.add('fa-beat');
        msgUnsuccessful.style.display = 'none';
        msgSuccessful.style.display = 'flex';
        textWarning.setAttribute('class', 'encrypt-warning-content');
        textAnswer.textContent = userMsgEncrypted;

    }

    for (let i = 0; i < notAllow.length; i++) {
        if (userMsgEncrypted.indexOf(notAllow.charAt(i)) != -1) {

            attentionIcon.classList.remove('fa-beat');
            attentionIcon.classList.add('fa-shake');
            msgSuccessful.style.display = 'none';
            msgUnsuccessful.style.display = 'flex';
            textWarning.classList.add('block');

        }
    }
})

//função para copiar o resultado
copyButton.addEventListener('click', function () {

    copyMsg.style.visibility = 'visible';
    copyMsg.classList.add('block');

    navigator.clipboard.writeText(textAnswer.value);

    setTimeout(() => {
        copyMsg.style.visibility = 'hidden';
    }, 1515);
})