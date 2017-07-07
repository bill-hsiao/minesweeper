/*app's constants*/
/*----- app's state (variables) -----*/
var board;

/*----- cached element references -----*/


/*----- event listeners ------*/
document.querySelector('table')
     .addEventListener('click', handleClick);
document.getElementById('start')
     .addEventListener('click', reset);

/*----- functions -----*/
reset();

function handleClick(event) {
    var cellIdx = event.target.id;
    var cell = board.getCellByIndex(cellIdx);
    console.log(cell);
    if (event.shiftKey && !cell.revealed) {
        doFlagged(cell);
    } else if (cell.mine) {
        doLose(cell);
    } else {
        cell.reveal();
    }
    render();
}
function doLose(cell) {
   var numCells = board.rows * board.cols;
    for (var id = 0; id < numCells; id++) {
        var cell = board.getCellByIndex(id);
        cell.flagged = false;
        cell.reveal();
    }
}
function doFlagged(cell) {
    cell.flagged = cell.flagged ? false: true;
}
function reset() {
    board = new Board(10, 10);
    // compute adjacent mines
    board.cells.forEach(function(col, colIdx) {
        for (var z = 0; z < col.length; z++) {
            board.cells[colIdx][z].computeAdj();
        }
    });
    console.log(board);
    render();
}
function render() {
    var numCells = board.rows * board.cols;
    for (var id = 0; id < numCells; id++) {
        var cell = board.getCellByIndex(id);
        var td = document.getElementById(id);
        td.className = '';
        td.textContent = ' '; // use a unicode char
        if (cell.flagged) {
            td.className = 'flagged';
            td.textContent = '★'; // use a unicode char
        } else if (cell.revealed && cell.mine) {
            td.className = 'bomb';
            td.textContent = ' '; // use a unicode char
        } else if (cell.revealed) {
            td.className = 'revealed';
            td.textContent = cell.numAdj || ' ';
        }
    }
}
