const main = document.querySelector('main');
const summonPromptBtn = document.querySelector('#summon-prompt');
const squareContainer = document.querySelector('#square-container');
const sizeCoefficient = 0.35;
let mainInfo = main.getBoundingClientRect();


const getRandomValue = function(from, to){
    let randomValue;
    randomValue = Math.floor(Math.random() * (to - from + 1) + from);
    return randomValue;
}

// write a function that will draw certain amount of squares
// based on the user input or DEFAULT 16x16
const drawGrid = function (gridsize = 16){
    const setSquareContainerSize = function(){
        squareContainer.style.width = `${mainInfo.width * sizeCoefficient}px`;
    }
    setSquareContainerSize();
    const adjustColumnSize = function(column, mainSize){
        column.style.width = `${mainSize.width * sizeCoefficient/gridsize}px`;
        column.style.height = `${mainSize.width * sizeCoefficient/gridsize}px`;
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
    const columns = document.querySelectorAll('.column');
    // recalculate the width of the container and columns each time the window resizes
    window.addEventListener('resize', function(event) {
        mainInfo = main.getBoundingClientRect();
        setSquareContainerSize();
        columns.forEach((column) => {
            adjustColumnSize(column, mainInfo);
        });
    }, true);

    // change columns color on hover
    const changeToRandomColor = function(element){
        element.style.backgroundColor = `rgb(${getRandomValue(0, 255)},${getRandomValue(0, 255)},${getRandomValue(0, 255)})`;
    }

    columns.forEach((column) => {
        column.addEventListener('mouseover', () => {
            changeToRandomColor(column);
        });
    })

}

drawGrid();

const removeGrid = function (){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        squareContainer.removeChild(row);
    })
}

summonPromptBtn.addEventListener('click', () => {
    const gridSize = prompt("Enter a grid size: ");
    removeGrid();    
    drawGrid(gridSize);
});