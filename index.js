const main = document.querySelector('main');
const squareContainer = document.querySelector("#square-container");
let squareContainerInfo = squareContainer.getBoundingClientRect();

// write a function that will draw certain amount of squares
// based on the user input or DEFAULT 16x16
const drawGrid = function (gridsize = 16){
    for (let i = 0; i < gridsize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        squareContainer.appendChild(row);
        for (let j = 0; j < gridsize; j++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.style = `width: ${squareContainerInfo.width/gridsize}px; height: ${squareContainerInfo.width/gridsize}px;`;
            column.textContent = i + 1;
            row.appendChild(column);
        }
    }
    // recalculate the width of the container each time the window resizes
    window.addEventListener('resize', function(event) {
        const mainInfo = main.getBoundingClientRect();
        squareContainer.style.width = `${mainInfo.width * 0.5}px`;
        const columns = document.querySelectorAll('.column');
        columns.forEach((column) => {
            column.style = `width: ${mainInfo.width * 0.5/gridsize}px; height: ${mainInfo.width * 0.5/gridsize}px;`;
        });
        console.log(squareContainer.style.width);
    }, true);   
}



drawGrid();