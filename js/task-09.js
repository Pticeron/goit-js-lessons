function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

const changeButtonRef = document.querySelector(`button.change-color`)
// console.log(changeButtonRef);
const body = document.querySelector(`body`)
// console.log(body);
const colorValueRef = document.querySelector(`span.color`)
// console.log(colorValueRef);

changeButtonRef.addEventListener(`click`, e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValueRef.textContent = color;
})
