function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// створення і очищення колекції елементів
const buttonCreateRef = document.querySelector(`button[data-create]`)
const buttonDestroyRef = document.querySelector(`button[data-destroy]`)
const inputNumberRef = document.querySelector(`#controls>input`);
const boxesRef = document.querySelector(`#boxes`);


const createBoxes = amount => {
	const elementsToAdd = []
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
};

buttonCreateRef.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputNumberRef.value)
	boxesRef.append(...boxesToAdd)
})


buttonDestroyRef.addEventListener('click', () => {
	boxesRef.innerHTML = '';
})
