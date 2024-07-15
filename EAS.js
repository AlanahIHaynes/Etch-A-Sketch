/* Create a 16 * 16 Grid */
const gridContainer=document.querySelector('.grid-container');

for (let i=0; i < 16*16; i++){
    const gridBox=document.createElement('div');
    gridBox.classList.add('grid-box');
    gridContainer.appendChild(gridBox);

    /* Adding Hover Effect Listener */
    gridBox.addEventListener('mouseover', hoverEffect);
    

    /* Adding Hover Effects */
    function hoverEffect(){
        gridBox.setAttribute('style', 'background-color: white;');
    }

 

}


const startBtn=document.querySelector('.start-btn');
startBtn.addEventListener('click', inputSquares);

function inputSquares(){
    numOfSquares=prompt('Input the number of squares you would like per side. ');
}
