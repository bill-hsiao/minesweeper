
initialize();

var game, player;
const props = {
    mineCount : null,
    widthInput : null,
    lengthInput : null
};
function setGameProps(evt) {
    var event = evt.target.id;
    if (event === 'minecount_input') {
        props.mineCount = +evt.target.value;
        console.log(evt.target.value);
    } else if (event === 'width_input') {
        props.widthInput = +evt.target.value;
    } else if (event === 'length_input') {
        props.lengthInput = +evt.target.value;
    }
}
function display(cb) {
    game = new Board(props.widthInput, props.lengthInput);
    mines(props.mineCount, props.widthInput * props.lengthInput);
    return game
}
function mines(p) {
    if (p === 0) {
        return
    }
    let n = c(parse(Math.floor(Math.random() * (props.widthInput * props.lengthInput))));
    n.mine ? mines(p) : (
        n.mine = true,
        mines(p - 1)
    );
}
function parse(id) {
  let y = id % props.lengthInput;
  let x = (id - y ) / props.widthInput;
  return [x, y]
}
function c(arr) {
    let [x, y] = arr;
    return game.field[x][y]
}
function player(value) {
    this.flag = value;
}
function initialize() {
   player = new player(null);
    document.getElementById('minecount_input').addEventListener('input', setGameProps);
    document.getElementById('width_input').addEventListener('input', setGameProps);
    document.getElementById('length_input').addEventListener('input', setGameProps);
    document.getElementById('play_button').addEventListener('click', display);
    document.getElementById('button').addEventListener('click', createCells);
    document.getElementById('flag').addEventListener('click', flagHandler);
}
function gameOver() {
    console.log('game over')
}
function createCells() {
        var table = document.createElement('table');
        var div = document.getElementById('gameLocation');
        for (let i = 0; i < props.widthInput; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < props.lengthInput; j++ ) {
                let cell = document.createElement('td');
                cell.id = i * props.widthInput + j;
                row.appendChild(cell);
            }
            table.appendChild(row);
        };
        document.body.appendChild(table);
        table.addEventListener('click', handleClick);
    } 
function renderSt() {
        for (let i = 0; i < props.widthInput; i++) {
            for (let j = 0; j < props.lengthInput; j++ ) {
                let td = document.getElementById(i * props.widthInput + j);
                //console.log(td);
                //td.textContent;
                if (c([i, j]).revealed === true) {
                     td.className = 'revealed';
                    td.textContent = game.retrieveCell(i, j).textContent;
                } else if (game.retrieveCell(i, j).flagged) {
                    td.textContent = 'F';
                } else if (game.retrieveCell(i, j).mine) {
                    td.textContent = 'X';
                }
            }
        }
    }
function handleClick(evt) {
   var cell = game.c(parse(evt.target.id));
    //console.log(evt);
    if (player.flagged && !cell.revealed) {
        cell.flagged = true;
    } else if (player.flagged === false && !cell.revealed) {
        cell.flagged = false;
    } else if (!cell.revealed && !cell.mine) {
        console.log(adjacenters2(game.retrieveCell(5, 6)));
    }
    if (cell.mine) {
        console.log(adjCellOpen(adjacenters(...parse(evt.target.id))));
        gameOver();
        console.log(cell);
    } 
    renderSt();
};
function flagHandler(evt) {
    var flag = evt.target.textContent;
    if (flag === 'flagOff') {
        evt.target.textContent = "flag on";
        flag =  evt.target.textContent;
        player.flag = true;
        return 1;
    } else if (flag === "flag on") {
         evt.target.textContent = 'flagOff';   
        flag =  evt.target.textContent;
        player.flag = false;
        return 0;
    }
    console.dir(evt.target, evt.target.focus);
};
function adjacenters(x, y, cell) {
    var maxW = props.widthInput - 1;
    var maxL = props.lengthInput - 1;
    var adj = {
        lc: [x, y - 1],
        lt: [x - 1, y - 1],
        lb: [x + 1, y - 1],
        rc: [x, y + 1],
        rt: [x - 1, y + 1],
        rb: [x + 1, y + 1],
        ct: [x - 1, y],
        cb: [x + 1, y]
    }
    var neighbors = (
        x === 0 ?
        y === 0 ? [adj.rc, adj.rb, adj.cb] :
        y === maxW ? [adj.lc, adj.lb, adj.cb] : [adj.lc, adj.lb, adj.rc, adj.rb, adj.cb] :
        y === maxW ?
        x === 0 ? [adj.lc, adj.lb, adj.cb] :
        x === maxL ? [adj.lc, adj.lt, adj.ct] : [adj.lc, adj.lt, adj.lb, adj.ct, adj.cb] :
        x === maxL ?
        y === maxW ? [adj.lc, adj.lt, adj.ct] :
        y === 0 ? [adj.rc, adj.rt, adj.ct] : [adj.lc, adj.lt, adj.ct, adj.rt, adj.rc] :
        y === 0 ?
        x === maxL ? [adj.rc, adj.rt, adj.ct] :
        x === 0 ? [adj.rb, adj.rc, adj.cb] : [adj.rc, adj.rt, adj.rb, adj.ct, adj.cb] :
        Object.values(adj)
      );
  return neighbors
}
function adjSearcher(x, y) {
    return adjacenters(x, y)
}

function adjCellOpen(array) {
  let l = array.length
  if (l > 0) {
    let x = array[0][0];
    let y = array[0][1];
    let cell = game.retrieveCell(x, y);
      console.log(cell);
      cell.revealed = true;
    array = array.slice(1);
    adjCellOpen(array);
  } else {
    return;
  }
}

function adjacenters2(cell, x, y) {
    x = parse(cell.id)[0];
    y = parse(cell.id)[1];
    var maxW = props.widthInput - 1;
    var maxL = props.lengthInput - 1;
    var adj = {
        lc: game.retrieveCell(...[x, y - 1]),
        lt: game.retrieveCell(...[x - 1, y - 1]),
        lb: game.retrieveCell(...[x + 1, y - 1]),
        rc: game.retrieveCell(...[x, y + 1]),
        rt: game.retrieveCell(...[x - 1, y + 1]),
        rb: game.retrieveCell(...[x + 1, y + 1]),
        ct: game.retrieveCell(...[x - 1, y]),
        cb: game.retrieveCell(...[x + 1, y])
    }
    var neighbors = (
        x === 0 ?
        y === 0 ? [adj.rc, adj.rb, adj.cb] :
        y === maxW ? [adj.lc, adj.lb, adj.cb] : [adj.lc, adj.lb, adj.rc, adj.rb, adj.cb] :
        y === maxW ?
        x === 0 ? [adj.lc, adj.lb, adj.cb] :
        x === maxL ? [adj.lc, adj.lt, adj.ct] : [adj.lc, adj.lt, adj.lb, adj.ct, adj.cb] :
        x === maxL ?
        y === maxW ? [adj.lc, adj.lt, adj.ct] :
        y === 0 ? [adj.rc, adj.rt, adj.ct] : [adj.lc, adj.lt, adj.ct, adj.rt, adj.rc] :
        y === 0 ?
        x === maxL ? [adj.rc, adj.rt, adj.ct] :
        x === 0 ? [adj.rb, adj.rc, adj.cb] : [adj.rc, adj.rt, adj.rb, adj.ct, adj.cb] :
        Object.values(adj)
      );
    return neighbors.forEach((x)=>(x.revealed = true))
}
