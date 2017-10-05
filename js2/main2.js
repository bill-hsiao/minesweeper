var options = {
  settings: {
    length: null,
    width: null,
    mineCount: null
  },
  mineSetter: (evt) => {
    if (evt.target) {
      options.settings.mineCount = +evt.target.value;
    }
  },
  widthSetter: (evt) => {
    if (evt.target) {
      options.settings.width = +evt.target.value;
    }
  },
  lengthSetter: (evt) => {
    if (evt.target) {
      options.settings.length = +evt.target.value;
    }
  },
  settingSetter: () => {
    console.log(options.settings);
    GAME.length = options.settings.length;
    GAME.width = options.settings.width;
  //  GAME.length = 11;
    //GAME.width = 11;
    //GAME.mineCount = 49;
    GAME.board = new Board (GAME.length, GAME.width);
    GAME.mineCount = mineLayer1(options.settings.mineCount);
    //Object.freeze(options);
  }
}

// function flagSetter() {
//   if (!GAME.flag) {
//     GAME.flag = true;
//   } else {
//     GAME.flag = false;
//   }
//
//   // GAME.flag === false ? GAME.flag
//   // GAME.flag = true | false;
//   console.log(GAME.flag);
// // }


document.getElementById('minecount_input').addEventListener('input', options.mineSetter);
document.getElementById('width_input').addEventListener('input', options.widthSetter);
document.getElementById('length_input').addEventListener('input', options.lengthSetter);
document.getElementById('play_button').addEventListener('click', options.settingSetter);
// document.getElementById('flag').addEventListener('click', flagSetter);


const GAME = {
  length: null,
  width: null,
  area: null,
  board: null,
  mineCount: null,
  win: null,
  flag: null,
  lose: () => {console.log('you lose')},
  numOfMines: 0
  //getCell: (id) => GAME.board.getCell(id)
}

// var props = {
//   length, width
// }

function adjFinder(id) {
  var count = 0;
  var cell = GAME.board.getTopCells(id);
  console.log(cell);
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
  var id = +evt.target.id;
  var clicked = GAME.board.getCell(id);
  var args = GAME.board.getArgs(id);
  console.log(clicked, args);

  GAME.board.getCell(id);
  //console.log(GAME.board.getAdj(evt.target.id));
  if (GAME.flag === true) {
    GAME.board.setCell(clicked);
  } else {
      if (clicked.mine) {
        GAME.lose();
        console.log('mine');
      }
      //console.log(clicked);
    }


}
var mine = {};

function mineLayer1(n) {
  if (n === 0) {
    console.log('minelaying done');
    return;
  }
  //console.log(this.mine);
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
