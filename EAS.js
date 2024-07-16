const gridContainer=document.querySelector('.grid-container');

function createGrid(numSquares, gridContainer){
    //clears nodes under grid container
    gridContainer.innerHTML= '';
    for (let i=0; i < numSquares*numSquares; i++){
        const gridBox=document.createElement('div');
        gridBox.classList.add('grid-box');
        squareSize= 800 / numSquares;
        gridBox.style.width= `${squareSize}px`;
        gridBox.style.height= `${squareSize}px`;
        gridContainer.appendChild(gridBox);
    
        /* Adding Hover Effect Listener */
        gridBox.addEventListener('mouseover', hoverEffect);
        
    
        /* Adding Hover Effects */
        function hoverEffect(){
            gridBox.style.backgroundColor='black';
        }
    
    }
}



const startBtn=document.querySelector('.start-btn');
startBtn.addEventListener('click', inputSquares);

function inputSquares(){
    numOfSquares=prompt('Input the number of squares you would like per side. \n(For example, entering 64 creates a 64x64 grid!)');
    if (numOfSquares < 100 && numOfSquares > 0){
        createGrid(numOfSquares, gridContainer);

    }

    else{
        alert('Please enter a number between 1 and 100');
    }

}



createGrid(16, gridContainer);
