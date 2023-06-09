/*==============================================================================
1 [ ] create a webpage with a 16x16 of square grids
  1.1 [ ] create the divs using javascript
2 [ ] set up a hover effect that the grid divs change color when the mouse passes
over them
3 [ ] add a button to the top of the screen that will send the user a popup asking
for the number of squares per side for the new grid
  3.1 [ ] set the maximum value to 100
4 [ ] create a rainbow option (random rgb color after each pass)
5 [ ] create a 10% increment per pass rule to create a fade-in effect
==============================================================================*/

/* == 1 ==
* save the #canvas reference into a variable;
* set the canvas size to 160px x 160px; (style.css)
* create a variable with the grid size
* create a variable for the grid column
* create the necessary amount of columns in the canvas 
* create a variable for the grid row
* create the necessary amount of rows in each column
*/

const canvas = document.querySelector('#canvas');
console.log(canvas);

let gridSize = 100; //later will change to a user input;

let column;
let row;

function createColumn(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    row = document.createElement('div');
    row.classList.add('row', `index${index}`);
    console.log(`add row${index}`)
    column.appendChild(row);
  }
}

function createGrid(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    column = document.createElement('div');
    column.classList.add('column', `index${index}`);
    createColumn(gridSize);

    canvas.appendChild(column)
  }
}

createGrid(gridSize);
