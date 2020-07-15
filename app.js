import { caesar13 } from './szyfrcezara.js';

const input = document.querySelector('.encryptor__input');
const output = document.querySelector('.encryptor__output');
const encryptButton = document.querySelector('.encrypt--js');
const copyButton = document.querySelector('.copy--js');

function clearOutput() {
  output.style.opacity = 0;
  output.innerHTML = '';
}

function setDisplayForData() {
  clearOutput();
  output.classList.add('show');
  setTimeout(() => {
    output.style.opacity = 1;
    output.classList.remove('show');
  }, 700);
}

function encrypt() {
  setDisplayForData();
  output.innerHTML += caesar13(input.value);
}

function copyToClipboard() {
  output.select();
  document.execCommand('copy');
}

copyButton.addEventListener('click', copyToClipboard);
encryptButton.addEventListener('click', encrypt);
