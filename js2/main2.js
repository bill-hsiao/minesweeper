const GAME = {
  board: size(11, 11)
}
//GAME.board.count
function sizeInput(evt) {
  console.log(evt.target);
}

function newGame() {
  console.log(GAME.board);
}

newGame();

function size(length, width) {
  return new Board (length, width)
}

function mineLayer() {
  var cell = GAME.board.getCell(randomNum());
  console.log(cell.mine);
  cell.mine = !cell.mine || cell.mine;
  GAME.board.mineCount++;
  //console.log(cell, cell.mine);

}
mineLayer();
function mineLoop(n) {
  for (var i = 0; i < n; i ++) {
    mineLayer();
  }
}

//mineLoop(100);

function randomNum() {
  var max = GAME.board.area;
  return Math.floor(Math.random() * (max + 1));
}
