const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.getElementById("ingredients")
console.log(ingredientsList);

// ingredients.forEach(ingredient => console.log(ingredient))
const elements = ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  return listElement;
})
console.log(elements);

ingredientsList.append(...elements)