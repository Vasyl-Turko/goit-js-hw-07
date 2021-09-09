const inputEl = document.getElementById('validation-input')
console.log(inputEl);
const valueLimit = inputEl.getAttribute('data-length')
console.log(valueLimit);

inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (inputEl.value.length !== Number(valueLimit)) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')
    }
}