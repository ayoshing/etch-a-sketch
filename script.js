const canvas = document.querySelector('.canvas');
const reset = document.getElementById('reset');

function createGrid() {
  var div = document.createElement('div');
  div.style.width = '20px';
  div.style.height = '20px';
  div.style.border = 'solid 1px black';
  canvas.appendChild(div);
}

createGrid();
