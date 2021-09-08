// ===== рахуємо кількість li.item
const mainElements = document.querySelectorAll("li.item");
const amountMainElements = mainElements.length;
console.log(`У списку ${amountMainElements} категорії.`);

// ===== знаходимо текстове значення кожного h2
document.querySelectorAll("li.item>h2").forEach(mainElementTitle => { console.log(mainElementTitle.textContent) });

// ====== рахуємо кількість li в кожному li.item
mainElements.forEach(mainElement => console.log(mainElement.querySelectorAll("li").length));
