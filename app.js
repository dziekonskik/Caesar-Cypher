import { caesar13 } from './szyfrcezara.js';

const input = document.querySelector('.encryptor__input');
const output = document.querySelector('.encryptor__output');
const encryptButton = document.querySelector('.encrypt--js');
const copyButton = document.querySelector('.copy--js');

encryptButton.addEventListener('click', () => {
  output.innerHTML = caesar13(input.value);
  output.classList.add('show');
});
