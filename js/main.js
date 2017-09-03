/*app's constants*/
/*----- app's state (variables) -----*/
var table = document.querySelector('table');



/*----- cached element references -----*/

/*----- event listeners ------*/
document.getElementById('start')
     .addEventListener('click', reset);
document.getElementById('button')
      .addEventListener('click', generateTable);


/*----- functions -----*/




function playGame() {
  var board;
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
      var td, cell, numCells = board.rows * board.cols;
      for (let id = 0; id < numCells; id++) {
          cell = board.getCellByIndex(id);
          td = document.getElementById(id);
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
}



function generateTable() {
  var table = document.createElement('table');
  table.setAttribute('id', 'table');
  table.className = 'noselect';
  for (var i = 0; i < 10; i++) {
    let temp = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
      let td = document.createElement('td');
      td.setAttribute('id', `${i}${j}`);
      temp.appendChild(td);
    };
    table.appendChild(temp);
  };
  document.getElementById('gameLocation').appendChild(table);
 console.log('success');
 return addEvent(table);

}

function addEvent(param) {
    return param.addEventListener('click', handleClick);
}
