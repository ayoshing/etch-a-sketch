const canvas = document.querySelector('.canvas');
const reset = document.getElementById('reset');
var gridSize = '';

function calcGridSize(gridNum) {
  gridSize = (600 / (Number(gridNum))) + 'px';
  createGrid();
}

function createGrid() {
  var div = document.createElement('div');
  div.style.width = gridSize;
  div.style.height = gridSize;
  div.style.background = '#dbdbdb';
  canvas.appendChild(div);
}

calcGridSize(prompt('Enter canvas size:', '16'));
