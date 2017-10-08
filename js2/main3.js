var input = {
  length,
  width
}

function user(evt) {
  input.length = evt.target
}


const game = {
  board: size(11, 11)
}






var functions = {
  size: (length ,width) => {
    return new Board(length, width)
  },
  mineLayer: (n) => {

  }
}


function size(length, width) {
  return new Board (length, width)
}

function randomNum() {
  var max = game.board.area;
  return Math.floor(Math.random() * (max + 1));
}

function mineLayer(n) {
  var cell = game.board.getCell(randomNum());
  console.log(cell.mine);
}









id = (width * i) + j;
let td = document.getElementById(id);
td.textContent = GAME.board.retrieveCell(i, j).number;
if (GAME.board.retrieveCell(i, j).mine === true) {
  let cell = adjacenters(i, j);
  ed = function(...cell) {
    for (let i = 0; i < cell[0].length; i ++) {
      let current = cell[0][i][0];
      let current2 = cell[0][i][1];
      GAME.board.retrieveCell(current, current2).number++;
    }
  }
  ed(cell);
