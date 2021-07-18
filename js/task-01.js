

const categoriesEl = document.querySelectorAll('#categories > li');

console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(element => {
  const upperCategoryEl = element.querySelector('h2');
  console.log(`Категория: ${upperCategoryEl.textContent}`);
  
  const upperCategoriesEl = element.querySelectorAll('li');
  console.log(`Количество элементов: ${upperCategoriesEl.length}`);
});