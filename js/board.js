
class Board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.cells = new Array(cols).fill(null);
        var i = 0;
        var board = this.cells;
        board.forEach(function(col, colIdx) {
            board[colIdx] = [];
            for (var row = 0; row < rows; row++) {
                board[colIdx].push(new Cell(colIdx, row));
            }
        });
       
    }

    getCellByRowCol(rowIdx, colIdx) {
        return this.cells[colIdx][rowIdx];
    }

    getCellByIndex(index) {
        var col = Math.floor(index / this.cells.length);
        var row = index % this.cells.length;
        return this.getCellByRowCol(row, col);
    }

    
    

    // getAllMines(index) {
    //   var numCells = board.cells.length * board.cells[0].length;
    //   for (var id = 0; id < numCells; id++) {
    //       if (board.cell.mine) {
    //           board.cell.revealed = true;
    //       }
    // }

}




// {
//                     col: colIdx,
//                     row: row,
//                     mine: Math.random() < .25 ? true : false,
//                     revealed: false,
//                     flagged: false,
//                     numAdj: null
//                 }