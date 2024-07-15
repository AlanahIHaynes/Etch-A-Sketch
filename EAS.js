//Creating 16x16 grid

const gridContainer= document.querySelector('.grid-container');

let i=0;

for (i=0; i <16; i++){
    const gridBox= document.createElement('div');
    gridBox.classList.add('grid-box');
    gridContainer.appendChild(gridBox);
}