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
