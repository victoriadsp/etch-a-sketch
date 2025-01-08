// Log to confirm JavaScript is linked correctly
console.log('JavaScript file linked successfully!');

// Function to create the grid
function createGrid(squareCount) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear any existing grid

    // Adjust the grid container's CSS to use dynamic rows and columns
    container.style.gridTemplateRows = `repeat(${squareCount}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${squareCount}, 1fr)`;

    // Create squares dynamically
    for (let i = 0; i < squareCount * squareCount; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add hover effect
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black'; // Change color on hover
        });

        // Append square to the grid container
        container.appendChild(square);
    }
}

// Function to handle the button click and prompt for grid size
function squareNumber() {
    let gridSize = prompt('Enter the number of squares per side for your grid (max: 100):');

    // Validate user input
    if (!gridSize || isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return; // Exit if input is invalid
    }

    // Create the grid with the specified size
    createGrid(parseInt(gridSize));
}

// Attach event listener to the button
document.querySelector('#btn').addEventListener('click', squareNumber);

// Create a default 16x16 grid on page load
createGrid(16);
