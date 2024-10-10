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
}

drawGrid();