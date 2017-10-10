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


document.getElementById('button').addEventListener('click', render.createCells);

function numberMarker() {
  var mineObject = null;
  var adjCells = function(...cellCoords) {
    var aO = {
    };
    for (var i = 0; i < cellCoords[0].length; i ++) {
      let current = cellCoords[0][i][0];
      let current2 = cellCoords[0][i][1];
      if (mineObject === 1) {
        console.log(GAME.board.retrieveCell(...cell).mine);
        GAME.board.retrieveCell(current, current2).number ++;
        //adjacenters(...cell);
      } else {
      //GAME.board.retrieveCell(current, current2);
      aO[i] = GAME.board.retrieveCell(current, current2);
      //console.log(aO[i]);
    }
    }
    console.log(aO);
  };
  for (var j = 0; j < (GAME.width * GAME.length); j ++) {
    var cell = parse(j);
    if (GAME.board.retrieveCell(...cell).mine === true) {
      mineObject = 1;
    }
    var cellies = adjacenters(...cell);
    var call;
    adjCells(cellies);
    }

  }

function handleClick(evt) {
  var adjCells = function(...cellCoords) {
    var aO = {
    };
    for (var i = 0; i < cellCoords[0].length; i ++) {
      let current = cellCoords[0][i][0];
      let current2 = cellCoords[0][i][1];
      GAME.board.retrieveCell(current, current2).revealed = true;
      aO[i] = GAME.board.retrieveCell(current, current2);
      //console.log(aO[i]);
    }
  }
  var id = +evt.target.id;
  var coords = parse(evt.target.id);
  GAME.board.retrieveCell(...coords).revealed = true;
  var cellies = adjacenters(...coords);
  adjCells(cellies);
  var clicked = GAME.board.getCell(id);
  render.stateChange();
  //console.log(clicked, GAME.area);
  GAME.board.getCell(id);
  if (GAME.flag === true) {
    GAME.board.setCell(clicked);
  } else {
      if (clicked.mine) {
        GAME.lose();
        console.log('mine');
    }
  }
}
function parse(id) {
  var y = id % GAME.length;
  var x = (id - y ) / GAME.width;
  return [x, y]
}

function adjacenters(coordX, coordY) {
  var returnO;
  var maxL = GAME.board.length - 1;
  var maxW = GAME.board.width - 1;
  var adj = {
    lc: [coordX, coordY - 1],
    lt: [coordX - 1, coordY - 1],
    lb: [coordX + 1, coordY - 1],
    rc: [coordX, coordY + 1],
    rt: [coordX - 1, coordY + 1],
    rb: [coordX + 1, coordY + 1],
    ct: [coordX - 1, coordY],
    cb: [coordX + 1, coordY],
  };
  returnO = (
    coordX === 0 ?
    coordY === 0 ? [adj.rc, adj.rb, adj.cb] :
    coordY === maxW ? [adj.lc, adj.lb, adj.cb] : [adj.lc, adj.lb, adj.rc, adj.rb, adj.cb] :
    coordY === maxW ?
    coordX === 0 ? [adj.lc, adj.lb, adj.cb] :
    coordX === maxL ? [adj.lc, adj.lt, adj.ct] : [adj.lc, adj.lt, adj.lb, adj.ct, adj.cb] :
    coordX === maxL ?
    coordY === maxW ? [adj.lc, adj.lt, adj.ct] :
    coordY === 0 ? [adj.rc, adj.rt, adj.ct] : [adj.lc, adj.lt, adj.ct, adj.rt, adj.rc] :
    coordY === 0 ?
    coordX === maxL ? [adj.rc, adj.rt, adj.ct] :
    coordX === 0 ? [adj.rb, adj.rc, adj.cb] : [adj.rc, adj.rt, adj.rb, adj.ct, adj.cb] :
    Object.values(adj)
  );
  return returnO
}
