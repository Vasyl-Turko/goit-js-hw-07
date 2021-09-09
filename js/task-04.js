const btnDecr = document.querySelector('[data-action="decrement"]')
console.log(btnDecr);
const btnIncr = document.querySelector('[data-action="increment"]')
console.log(btnIncr);
const counter = document.getElementById('value')
console.log(counter);

function getCounter() {
    let counterValue = 0;
    function decrement() {
        return counterValue -= 1;
    };
    function increment() {
        return counterValue += 1;
    }
 return ({decrement, increment})
}

const getCounterFunc = getCounter()

btnDecr.addEventListener('click', () => {
    console.log('click');
    let result = getCounterFunc.decrement()
    console.log(result);
    counter.textContent = result
});

btnIncr.addEventListener('click', () => {
    console.log('click')
    let result = getCounterFunc.increment()
    console.log(result);
    counter.textContent = result
})