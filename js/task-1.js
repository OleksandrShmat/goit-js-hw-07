const categories = document.querySelectorAll('#categories > .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(catItem => {
  const categoryTitle = catItem.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryItems = catItem.querySelectorAll('ul li');
  console.log(`Elements: ${categoryItems.length}`);
});
