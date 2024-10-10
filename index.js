const main = document.querySelector('main');
const squareContainer = document.querySelector("#square-container");
let mainInfo = main.getBoundingClientRect();

// write a function that will draw certain amount of squares
// based on the user input or DEFAULT 16x16
const drawGrid = function (gridsize = 16){
    const adjustColumnSize = function(column, mainSize){
        column.style = `width: ${mainSize.width * 0.5/gridsize}px; height: ${mainSize.width * 0.5/gridsize}px;`;
    }
    for (let i = 0; i < gridsize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        squareContainer.appendChild(row);
        for (let j = 0; j < gridsize; j++){
            const column = document.createElement('div');
            column.classList.add('column');
            adjustColumnSize(column, mainInfo);
            row.appendChild(column);
        }
    }
    // recalculate the width of the container and columns each time the window resizes
    window.addEventListener('resize', function(event) {
        mainInfo = main.getBoundingClientRect();
        squareContainer.style.width = `${mainInfo.width * 0.5}px`;
        const columns = document.querySelectorAll('.column');
        columns.forEach((column) => {
            adjustColumnSize(column, mainInfo);
        });
    }, true);   
}



drawGrid();