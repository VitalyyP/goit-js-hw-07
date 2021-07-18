const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector('#text'),
}

function changeFontSize() {
  refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;
}

refs.fontSizeControl.addEventListener("input", changeFontSize);