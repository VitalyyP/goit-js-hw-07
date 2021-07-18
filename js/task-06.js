const validationInputRef = document.querySelector("#validation-input");

function changeClassValidationInputRef({ target: { value } }) {
  value.length === +validationInputRef.dataset.length
    ? togleClassValidationInputRef("valid", "invalid")
    : togleClassValidationInputRef("invalid", "valid"); 
}

function togleClassValidationInputRef(add, rem) {
  validationInputRef.classList.add(add);
  validationInputRef.classList.remove(rem);
}

validationInputRef.addEventListener("blur", changeClassValidationInputRef);

