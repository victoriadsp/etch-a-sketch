const sqr = document.createElement('square');
document.getElementsByClassName('grids').appendChild(sqr)


// Select the container div
const container = document.querySelector('container')

// Create 16x16 = 256 squares
const gridSize = 16 
const totalSquares= gridSize * gridSize


// Loop until all squares are made
for ( let i= 0; i<totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild('square');

}
