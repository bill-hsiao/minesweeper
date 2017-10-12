var options = {
  settings: {
    length: null,
    width: null,
    mineCount: null,
    mineLayer:null
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
    GAME.area = GAME.length * GAME.width;
    GAME.retrieveCell = GAME.board.retrieveCell;
    //mineLayer1(options.settings.mineCount);
    options.mineLayer(options.settings.mineCount);

    numberMarker();


  },
  mineLayer: (n) => {
    if (n === 0) {
      console.log('minelaying done');
      return;
    }
    let num = randomNum();
    let cell = GAME.board.getCell(num);
    cell.mine ? options.mineLayer(n) : setCellMine(cell);
    function setCellMine(cell) {
      cell.mine = true;
      options.mineLayer(n - 1);
    }
    function randomNum() {
      var max = GAME.board.area;
      return Math.floor(Math.random() * (max));
    }
  }

}



document.getElementById('minecount_input').addEventListener('input', options.mineSetter);
document.getElementById('width_input').addEventListener('input', options.widthSetter);
document.getElementById('length_input').addEventListener('input', options.lengthSetter);
document.getElementById('play_button').addEventListener('click', options.settingSetter);


document.getElementById('button').addEventListener('click', render.createCells);

const GAME = {
  length: null,
  width: null,
  area: null,
  board: null,
  mineCount: null,
  win: null,
  flag: null,
  lose: () => {console.log('you lose')},
  numOfMines: 0,
  retrieveCell: null
}

var render = {
  createCells: () => {
  var length = GAME.board.length;
  var width = GAME.board.width;
  var table = document.createElement('table');
  var ed, id;
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
    var length = GAME.board.field.length;
    var width = GAME.board.field.length;
    var id;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++ ) {
        id = (width * i) + j;
        let td = document.getElementById(id);
        if (GAME.board.retrieveCell(i, j).revealed === true) {
          td.className = "revealed";
          td.textContent = GAME.board.retrieveCell(i, j).number;
        }
      }
    }
  }
}

