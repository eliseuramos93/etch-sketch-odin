/*==============================================================================
1 [OK] create a webpage with a 16x16 of square grids
  1.1 [OK] create the divs using javascript
2 [OK] set up a hover effect that the grid divs change color when the mouse 
passes over them
3 [OK] add a button to the top of the screen that will send the user a popup 
asking for the number of squares per side for the new grid
  3.1 [OK] set the maximum value to 100
4 [OK] create a rainbow option (random rgb color after each pass)
5 [ ] create a 10% increment per pass rule to create a fade-in effect
==============================================================================*/

let canvas = document.querySelector('#canvas');
const sidebar = document.querySelector('#sidebar');
let gridSize = 16; 
let column;
let columns;
let row;
let button;

let mouseIsDown = false;
window.addEventListener('mousedown', () => {mouseIsDown = true});
window.addEventListener('mouseup', () => {mouseIsDown = false})

function createColumn(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    row = document.createElement('div');
    row.classList.add('row', `index${index}`);
    column.appendChild(row);
  }
}

function changeColor(element, color) {
  if (mouseIsDown){
    element.setAttribute('style', `background-color: ${color}`);
  }
}

function paintGrid(element) {
    element.addEventListener('mouseover', () => {
      if (normalMode === true){
        changeColor(element, 'black');
      } else if (rainbowMode === true) {
        changeColor(element, getRandomColor());
      } else {
        changeColor(element, 'white');
      }
    });
}

function enablePainting() {
  columns = document.querySelectorAll('.column');
  columns.forEach(column => {
    let rows = column.querySelectorAll('.row');
    rows.forEach(row => paintGrid(row));
  });
}

function createGrid(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    column = document.createElement('div');
    column.classList.add('column', `index${index}`);
    createColumn(gridSize);
    canvas.appendChild(column);
  };

  enablePainting();
}

function askNumberFromUser() {
  let keepGoing = true
  while (keepGoing === true) {
    userInput = prompt(`Choose a grid size (min: 16, max: 100):`);
    if (parseInt(userInput) >= 16 && parseInt(userInput) <= 100) {
      keepGoing = false;
      return parseInt(userInput);
    } else {
      alert('Invalid input. Please entry a number between 16 and 100.');
    }
  }
}

function changeGridSize() {
  const userInput = askNumberFromUser();
  return userInput;
}

function createSidebarButton(buttonText, id) {
  button = document.createElement('button');
  button.textContent = buttonText;
  button.classList.add('sidebar-button');
  button.setAttribute('id', id)
  sidebar.appendChild(button);
}

createSidebarButton('Change Grid Size', 'change-grid-size');
const changeGridButton = document.querySelector('#change-grid-size');
changeGridButton.addEventListener('click', () => {
  gridSize = changeGridSize();
  canvas.replaceChildren(); 
  createGrid(gridSize);
})

/* == 4 == 
Create a rainbow option (random rgb color after each pass)

[OK] Generate a random number between 0 and 255;
[OK] Generate a random RGB color;
[OK] Create a boolean variable to monitor if rainbow mode is on or off;
[OK] Create a button w/ id "rainbow-mode";
[OK] Create a button w/ id "normal-mode";
[OK] Create an event if the button is clicked;
[OK] Adjust paintGrid function to black if boolean = false, and random if true;

*/

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function getRandomColor() {
  return `RGB(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

createSidebarButton('Normal Sketch Mode', 'normal-mode');
const normalModeButton = document.querySelector('#normal-mode');
createSidebarButton('Rainbow Mode', 'rainbow-mode');
const rainbowModeButton = document.querySelector('#rainbow-mode');
createSidebarButton('Eraser Mode', 'eraser-mode');
const eraserModeButton = document.querySelector('#eraser-mode');

let normalMode = true
let rainbowMode = false;
let eraserMode = false

normalModeButton.addEventListener('click', () => {
  normalMode = true;
  rainbowMode = false;
  eraserMode = false;
});

rainbowModeButton.addEventListener('click', () => {
  rainbowMode = true;
  normalMode = false;
  eraserMode = false;
});

eraserModeButton.addEventListener('click', () => {
  rainbowMode = false;
  normalMode = false;
  eraserMode = true;
});

createSidebarButton('Clear Canvas', 'clear-all');
const clearButton = document.querySelector('#clear-all');

clearButton.addEventListener('click', () => {
  canvas.replaceChildren();
  createGrid(gridSize);
});

createGrid(gridSize);