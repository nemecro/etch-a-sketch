const squareContainer = document.querySelector("#square-container");
let squareContainerInfo = squareContainer.getBoundingClientRect();

// write a function that will draw certain amount of squares
// based on the user input or DEFAULT 16x16
const drawSquares = function (gridsize = 16){
    // get proportions into variables
    let proportions = squareContainerInfo.width / (gridsize);
    // based on the grid size create amount of squares
    for (let i = 0; i < gridsize * gridsize; i++){
        const square = document.createElement('div');
        square.textContent = i +1;
        square.classList.add('square');
        // based on the amount of square, calculate the width and height of each square
        // width is equal to - parent element width / number of gridsize
        square.style = `width: ${proportions}px; height: ${proportions}px;`;
        squareContainer.append(square);
    }
}

drawSquares();
