const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

function changeName() {
  refs.nameOutput.textContent = refs.nameInput.value.trim()
    ? refs.nameInput.value.trim()
    : 'незнакомец';
}

refs.nameInput.addEventListener('input', changeName);