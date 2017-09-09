var options = {
  mineSetter: (evt) => {
    if (evt.target) {
      settings.mineCount = evt.target.value;
    }
  },
  widthSetter: (evt) => {
    if (evt.target) {
      settings.width = evt.target.value;
    }
  },
  lengthSetter: (evt) => {
    if (evt.target) {
      settings.length = evt.target.value;
    }
  }
}
var settings = {
  length: null,
  width: null,
  mineCount: null
}

document.getElementById('minecount_input').addEventListener('input', options.mineSetter);
document.getElementById('width_input').addEventListener('input', options.widthSetter);
document.getElementById('length_input').addEventListener('input', options.lengthSetter);



function setters(input) {

}


const GAME = {
  board: null,
  mineCount: null,
  win: null,
  lose: () => {console.log('you lose')},
  numOfMines: 0

}



function settingSetter(settings) {
  GAME.board = size(settings.length, settings.width);
  GAME.mineCount = mineLayer(settings.mineCount);
}



settingSetter(settings);

function reset() {

}


var render = {
  createCells: () => {
  var length = GAME.board.length;
  var width = GAME.board.width;
  var table = document.createElement('table');
  for (var i = 0; i < width; i++) {
    let row = document.createElement('tr');
    for (var j = 0; j < length; j++ ) {
      let cell = document.createElement('td');
      cell.id = i * width + j;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  table.addEventListener('click', handleClick);
  document.body.appendChild(table);
  }
}

document.getElementById('button').addEventListener('click', render.createCells);


function handleClick(evt) {
  var clicked = GAME.board.getCell(evt.target.id);
  if (clicked.mine) {
    GAME.lose();
    console.log('mine');
  }
  console.log(clicked);
}


function newGame() {
  console.log(GAME.board);
}

newGame();

function size(length, width) {
  return new Board (length, width)
}



function mineLayer(n) {
  if (n === 0) {
    console.log('minelaying done');
    return;
  } else {
    let cell = GAME.board.getCell(randomNum());
    if (!cell.mine) {
      cell.mine = true;
      GAME.numOfMines++;
      mineLayer(n - 1);
    } else {
      mineLayer(n);
    }
  }
  function randomNum() {
    var max = GAME.board.area;
    return Math.floor(Math.random() * (max));
  }
}
