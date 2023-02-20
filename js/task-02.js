const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`#ingredients`);
console.log(ingredientsEl);

const elements = ingredients.map(option => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = option;
  ingredientEl.classList.add(`item`);
  
  return ingredientEl;
});

console.log(elements);

ingredientsEl.append(...elements);