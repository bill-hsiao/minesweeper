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
    GAME.mineCount = mineLayer(options.settings.mineCount);
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
  if (clicked.mine) {
    GAME.lose();
    console.log('mine');
  }
  console.log(clicked);
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
