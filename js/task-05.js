const inputItem = document.getElementById('name-input')
console.log(inputItem);
const spanItem = document.getElementById('name-output')
console.log(spanItem);

inputItem.addEventListener('input', addValue);

function addValue(event) {
    let value = inputItem.value
    if (value === '') {
        spanItem.textContent = 'незнакомец'
    } else {
        spanItem.textContent = value
    }
}