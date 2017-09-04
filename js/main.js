/*app's constants*/
/*----- app's state (variables) -----*/

var a = {
  board: board
};


/*----- cached element references -----*/

/*----- event listeners ------*/

document.getElementById('button')
      .addEventListener('click', generateTable);
document.getElementById('buttontwo')
      .addEventListener('click', playGame);

/*----- functions -----*/




function playGame() {
  var table = document.querySelector('table');
  document.getElementById('start')
       .addEventListener('click', reset);
  reset();

  function handleClick(event) {
      var cellIdx = event.target.id;
      var cell = board.board.getCellByIndex(cellIdx);
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
     var numCells = board.board.rows * board.board.cols;
      for (var id = 0; id < numCells; id++) {
          var cell = board.board.getCellByIndex(id);
          cell.flagged = false;
          cell.reveal();
      }
  }
  function doFlagged(cell) {
      cell.flagged = cell.flagged ? false: true;
  }
  function reset() {
      board.board = new Board(10, 10);
      // compute adjacent mines
      board.board.cells.forEach(function(col, colIdx) {
          for (var z = 0; z < col.length; z++) {
              board.board.cells[colIdx][z].computeAdj();
          }
      });
      console.log(board);
      render();
  }

}


  function render() {
      var numCells = board.rows * board.cols;
      for (let id = 0; id < numCells; id++) {
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

function generateTable() {
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  table.setAttribute('id', 'table');
  table.className = 'noselect';
  table.addEventListener('click', handleClick);
  for (var i = 0; i < 10; i++) {
    let temp = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
      let td = document.createElement('td');
      td.setAttribute('id', `${i}${j}`);
      temp.appendChild(td);
    };
    tbody.appendChild(temp);
    table.appendChild(tbody);
  };
  document.getElementById('gameLocation').appendChild(table);
  console.log(document.getElementById('table').childNodes);
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
}


function addHandleClick(param) {
  function addEvent(param) {
      param.addEventListener('click', handleClick);
  }
  handleClick(event);
}
