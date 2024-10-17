// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const nameOfCategories = document.querySelectorAll("li.item h2");

nameOfCategories.forEach((category) => {
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${category.nextElementSibling.children.length}`);
});

//
