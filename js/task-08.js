const [numberOfRenderRef, buttonRenderRef, buttonDestroyRef] =
  document.querySelector("#controls").children;

const boxesRef = document.querySelector('#boxes');

let defaultSize = 30;
let zIndex = 0;

function createRandomColor() {
  return `rgb(${(Math.random() *255) << 0}, ${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0})`
};

function getNumberOfRenderAndRender() {
  const amount = +numberOfRenderRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let result = [];
  
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = createRandomColor();
    div.style.width = defaultSize + 'px';
    div.style.height = defaultSize + 'px';
    div.style.position = 'absolute';
    zIndex -= 1;
    div.style.zIndex = zIndex;
    defaultSize += 10;
    result.push(div);
  };
  boxesRef.append(...result);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  defaultSize = 30;
  numberOfRenderRef.value = '';
  zIndex = 0;
}

buttonRenderRef.addEventListener("click", getNumberOfRenderAndRender);
buttonDestroyRef.addEventListener('click', destroyBoxes);
