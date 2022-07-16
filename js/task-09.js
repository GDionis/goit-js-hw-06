const nameColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");


btnChangeColor.addEventListener('click', onChangeColor)

function onChangeColor() {
  let colorElement = getRandomHexColor(); 
  bodyColor.style.backgroundColor = colorElement;
  nameColor.textContent = `${colorElement}`; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}