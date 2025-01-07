console.log('Check if javacode is running');


function createGrid(squareCount) {
const container = document.querySelector('.container');
container.innerHTML= '';
}


// Create 16x16 = 256 squares
const gridSize = squareCount; 
const totalSquares= gridSize * gridSize

container.style.width


// Loop until all squares are made
for ( let i= 0; i<totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
    });
}

btn.addEventListener('click',(event) => {
    console.log('clicked');
});

function createGrid(squareCount) {

}








function squareNumber() {
    let btn = document.querySelector('#btn');
    let text;
    let buttonText = prompt('Please enter the amount of squares you want on your etch-a-sketch: ');
    if (buttonText == null || buttonText =="") {
        text = 'No amount of squares detected'
    };
    else if (buttonText > 100 ) {
        text = "Too many squares"
    };
    
}




