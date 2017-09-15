var options = {
  settings: {
    length: null,
    width: null,
    mineCount: null
  },
  mineSetter: (evt) => {
    if (evt.target) {
      options.settings.mineCount = evt.target.value;
    }
  },
  widthSetter: (evt) => {
    if (evt.target) {
      options.settings.width = evt.target.value;
    }
  },
  lengthSetter: (evt) => {
    if (evt.target) {
      options.settings.length = evt.target.value;
    }
  },
  settingSetter: () => {
    console.log(options.settings);
    GAME.board = size(options.settings.length, options.settings.width);
    GAME.mineCount = mineLayer1(options.settings.mineCount);
    function size(length, width) {
      return new Board (length, width)
    }
  }
}

document.getElementById('minecount_input').addEventListener('input', options.mineSetter);
document.getElementById('width_input').addEventListener('input', options.widthSetter);
document.getElementById('length_input').addEventListener('input', options.lengthSetter);
document.getElementById('play_button').addEventListener('click', options.settingSetter);

const GAME = {
  board: null,
  mineCount: null,
  win: null,
  lose: () => {console.log('you lose')},
  numOfMines: 0
}

function adjFinder(id) {
  var count = 0;
  var cell = GAME.board.getTopCells(id);
  console.log(cell);
}

//   var top = {
//     middle: (GAME.board.getCell(cell.id - GAME.board.length)),
//     left: (GAME.board.getCell(cell.id - GAME.board.length - 1)),
//     right: (GAME.board.getCell(cell.id - GAME.board.length + 1))
//   };
//   var middle = {
//     left: (GAME.board.getCell(cell.id - 1)),
//     right: (GAME.board.getCell(cell.id + 1))
//   };
//   var bottom = {
//     middle: (GAME.board.getCell(cell.id + GAME.board.length)),
//     left: (GAME.board.getCell(cell.id + GAME.board.length - 1)),
//     right: (GAME.board.getCell(cell.id + GAME.board.length + 1))
//   };
//   console.log(top.middle, middle.left, bottom.right);
// }
function adjacentFinder() {
  var adjacentEdges = {
    topLeftCorner: null,
    topMiddle: null,
    topRightCorner: null,
    left: null,
    right: null,
    bottomLeftCorner: null,
    bottomMiddle: null,
    bottomRightCorner: null
  }
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
  };
  table.addEventListener('click', handleClick);
  document.body.appendChild(table);
},
  stateChange: () => {

  }

}

document.getElementById('button').addEventListener('click', render.createCells);


function handleClick(evt) {
  var clicked = GAME.board.getCell(evt.target.id);
  adjFinder(evt.target.id);
  console.log(GAME.board.getAdj(evt.target.id));
  if (clicked.mine) {
    GAME.lose();
    console.log('mine');
  }
  console.log(clicked);
}

// function mineLayer(n) {
//   if (n === 0) {
//     console.log('minelaying done');
//     return;
//   } else {
//     let cell = GAME.board.getCell(randomNum());
//     if (!cell.mine) {
//       cell.mine = true;
//       GAME.numOfMines++;
//       mineLayer(n - 1);
//     } else {
//       mineLayer(n);
//     }
//   }
//   function randomNum() {
//     var max = GAME.board.area;
//     return Math.floor(Math.random() * (max));
//   }
// }

function mineLayer1(n) {
  if (n === 0) {
    console.log('minelaying done');
    return;
  }
  let cell = GAME.board.getCell(randomNum());
  cell.mine ? mineLayer1(n) : setCellMine(cell);
  function setCellMine(cell) {
    cell.mine = true;
    mineLayer1(n - 1);
  }
  function randomNum() {
    var max = GAME.board.area;
    return Math.floor(Math.random() * (max));
  }
}



function getTopCells(id) {
  let x, y, offset;
  y = id % this.length;
  x = (id - y) / this.width;
  offset = (x - 1 < 0 ? 0 : 1);
  return this.field[x - offset][y];
}
function getAdj(id) {
  id = parseInt(id);
  var row = parseInt(this.length);
  var bottomRow = this.area - row;
  let adjacent = {
    top: {
      middle: id - row,
      left: id - row - 1,
      right: id - row + 1
    },
    center: {
      left: id - 1,
      right: id + 1
    },
    bottom: {
      middle: id + row,
      left: id + row - 1,
      right: id + row + 1
    }
  };
  var returned = [];
  returned = (id % row === 0 ? id < row ? [adjacent.center.right, adjacent.bottom.middle, adjacent.bottom.right] : [adjacent.top.middle, adjacent.top.right, adjacent.center.right, adjacent.bottom.middle, adjacent.bottom.right] : id < bottomRow ? [adjacent.center.right, adjacent.top.middle, adjacent.top.right] : null);
  return returned;
}
