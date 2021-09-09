const input = document.getElementById('font-size-control');
console.log(input);
const span = document.getElementById('text')
console.log(span);

input.addEventListener('input', onInputRange);

function onInputRange(event) {
    span.style.fontSize = `${input.value}px`;
}