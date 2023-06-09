/*==============================================================================
1 [OK] create a webpage with a 16x16 of square grids
  1.1 [OK] create the divs using javascript
2 [ ] set up a hover effect that the grid divs change color when the mouse 
passes over them
3 [ ] add a button to the top of the screen that will send the user a popup 
asking for the number of squares per side for the new grid
  3.1 [ ] set the maximum value to 100
4 [ ] create a rainbow option (random rgb color after each pass)
5 [ ] create a 10% increment per pass rule to create a fade-in effect
==============================================================================*/

/* == 1 == 

[OK] save the #canvas reference into a variable;
[OK] create a variable with the grid size
[OK] create a variable for the grid column and grid row
[OK] create the necessary amount of rows in each column
[OK] create the necessary amount of columns in the canvas 

*/

const canvas = document.querySelector('#canvas');
let gridSize = 100; //later will change to a user input;
let column;
let row;

function createColumn(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    row = document.createElement('div');
    row.classList.add('row', `index${index}`);
    column.appendChild(row);
  }
}

function createGrid(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    column = document.createElement('div');
    column.classList.add('column', `index${index}`);
    createColumn(gridSize);
    canvas.appendChild(column);
  }
}

createGrid(gridSize);

/* == 2 == 

[OK] capture the moment when the mouse is over each individual block;
[OK] set up a variable to determine if the left-button is being pressed
[OK] set up a trigger for changing the background-color on mouseover w/ mousedown

=> stack-overflow ref 4 mouse is down:
https://stackoverflow.com/questions/47641309/combine-mouse-events-in-javascript

*/

let mouseIsDown = false;
window.addEventListener('mousedown', () => {mouseIsDown = true});
window.addEventListener('mouseup', () => {mouseIsDown = false})

function changeColor(element, color) {
  if (mouseIsDown){
    element.setAttribute('style', `background-color: ${color}`);
  }
}

function paintGrid(element) {
    element.addEventListener('mouseover', () => {
      changeColor(element, 'black');
    });
}

const columns = document.querySelectorAll('.column');
columns.forEach(column => {
  let rows = column.querySelectorAll('.row');
  rows.forEach(row => paintGrid(row));
});