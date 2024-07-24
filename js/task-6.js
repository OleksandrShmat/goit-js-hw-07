const inputBox = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(inputBox.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    inputBox.value = '';
    return;
  }
  destroyBoxes();

  const newBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
  }
  container.append(...newBoxes);
  inputBox.value = '';
}

function destroyBoxes() {
  container.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
