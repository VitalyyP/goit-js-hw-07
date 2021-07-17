let counterValue = 0;
const counterValueRef = document.querySelector('#value');
counterValueRef.textContent = counterValue;

const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

const incrementButtonRef = document.querySelector('[data-action="increment"]');
const decrementButtonRef = document.querySelector('[data-action="decrement"]');

incrementButtonRef.addEventListener("click", increment);
decrementButtonRef.addEventListener("click", decrement);