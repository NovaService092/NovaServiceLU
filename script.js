const loadingScreen = document.querySelector('.loading-screen');
const container = document.querySelector('.container');
const progressBar = document.querySelector('.progress');
const loadingText = document.getElementById('loading-text');
const loginBox = document.querySelector('.login-box');
const createAccountBox = document.querySelector('.create-account-box');

const messages = [
    'Initializing system',
    'Securing connection',
    'Preparing interface',
    'Launching',
    'Loading Assets',
    'Ready to launch'
];

let messageIndex = 0;
let importButtonClicked = false;

function changeLoadingText() {
    loadingText.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

setInterval(changeLoadingText, 1000);

setTimeout(() => {
    progressBar.style.width = '100%';
}, 100);

setTimeout(() => {
    loadingScreen.style.display = 'none';
    container.style.display = 'flex';
    loginBox.classList.add('active');
}, 5000);
