class Board {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.area = length * width;
    this.field = [ ...Array(width).keys()];
    for (var i = 0; i < this.width; i++) {
      this.field[i] = [ ...Array(length).keys()];
      for (var j = 0; j < this.length; j++) {
        this.field[i][j] = new Cell(i * width + j);
      }
    }
  }

  getCell(id) {
    let x, y;
    y = id % this.length;
    x = (id - y) / this.width;
    //console.log(x, y, this.field)
    return this.field[x][y];
  }
  getArgs(id) {
    let topRow, centreRow, bottomRow, row, col, area, cell, list = [];
    row = +this.length;
    //col = +this.width;
    //area = +this.area;
    topRow = id - row;
    bottomRow = id + row;
    centreRow = +id;
    list.push(topRow - 1, topRow, topRow + 1, centreRow -1, centreRow, centreRow + 1, bottomRow -1, bottomRow, bottomRow + 1);
    return list;
  }

  getCellX(id) {
    let x, y;
    x = id % this.length;
    y = (id - x) / this.width;
    return y
  }
  getCellY(id) {
    let x;
    x = id % this.length;
    return x
  }
  getTopCells(id) {
    let x, y, offset;
    y = id % this.length;
    x = (id - y) / this.width;
    offset = (x - 1 < 0 ? 0 : 1);
    return this.field[x - offset][y];
  }
  setCell(cell) {
    this.flagged = true;
    if (this.flagged === false) {
      this.flagged = false;
    }
    return cell;
  }
}
