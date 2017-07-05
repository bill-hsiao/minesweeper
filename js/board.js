






















class Board {
    constructor(rows, cols) {
        this.cells = new Array(cols).fill(null);
        var board = this.cells;
        board.forEach(function(col, colIdx) {
            board[colIdx] = [];
            for (var row = 0; row < rows; row++) {
                board[colIdx].push({
                    col: colIdx,
                    mine: Math.random() < .25 ? true : false,

                });
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
}
