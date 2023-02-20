let valueEl = Number(document.querySelector('#value').textContent);
// console.log(valueEl);

let counterValue = document.querySelector(`#value`);
// console.log(counterValue);

const  dekrBtn  =  document.querySelector('[data-action="decrement"]');
const  inkrBtn  =  document.querySelector('[data-action="increment"]');


inkrBtn.addEventListener(`click`, event => {
    valueEl += 1;

    counterValue.innerText = valueEl; 
});

dekrBtn.addEventListener(`click`, event => {
    valueEl -= 1;

    counterValue.innerText = valueEl; 
});


