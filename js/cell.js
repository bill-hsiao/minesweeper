
class Cell {
    constructor(colIdx, rowIdx) {
        this.col = colIdx;
        this.row = rowIdx;
        this.mine = Math.random() < .15 ? true : false;
        this.revealed = false;
        this.flagged = false;
        this.numAdj = null;
    }
    computeAdj() {
        var count = 0;
        this.top = {
            middle: (this.row > 0) && board.cells[this.col][this.row - 1],
            left: (this.row > 0 && this.col > 0) && board.cells[this.col - 1][this.row -1],
            right: (this.row > 0 && this.col < (board.cells.length - 1)) && board.cells[this.col + 1][this.row - 1]
        }
        this.middle = {
            left: (this.col > 0) && board.cells[this.col - 1][this.row],
            right: (this.col < (board.cells.length - 1)) && board.cells[this.col + 1][this.row]
        };
        this.bottom = {
            middle: (this.row < (board.cells.length - 1)) && board.cells[this.col][this.row + 1],
            left: (this.row < (board.cells.length - 1)) && this.col > 0 && board.cells[this.col - 1][this.row +1],
            right: (this.row < (board.cells.length - 1)) && this.col < (board.cells.length - 1) && board.cells[this.col + 1][this.row + 1]
        };
        count += (this.top.left && this.top.left.mine) ? 1 : 0;
        count += (this.top.middle && this.top.middle.mine) ? 1 : 0;
        count += (this.top.right && this.top.right.mine) ? 1 : 0;

        count += (this.middle.left && this.middle.left.mine) ? 1 : 0;
        count += (this.middle.right && this.middle.right.mine) ? 1 : 0;

        count += (this.bottom.left && this.bottom.left.mine) ? 1 : 0;
        count += (this.bottom.middle && this.bottom.middle.mine) ? 1 : 0;
        count += (this.bottom.right && this.bottom.right.mine) ? 1 : 0;
        this.numAdj = count;
    }

    reveal() {
        this.revealed = true;
        if (this.numAdj) return;
        if (this.top.left && !this.top.left.revealed) this.top.left.reveal();
        if (this.top.middle && !this.top.middle.revealed) this.top.middle.reveal();
        if (this.top.right && !this.top.right.revealed) this.top.right.reveal();

        if (this.middle.left && !this.middle.left.revealed) this.middle.left.reveal();
        if (this.middle.right && !this.middle.right.revealed) this.middle.right.reveal();

        if (this.bottom.left && !this.bottom.left.revealed) this.bottom.left.reveal();
        if (this.bottom.middle && !this.bottom.middle.revealed) this.bottom.middle.reveal();
        if (this.bottom.right && !this.bottom.right.revealed) this.bottom.right.reveal();
    }


}