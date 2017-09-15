class Board {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.area = length * width;
    this.field = [ ...Array(width).keys()];
    for (var i = 0; i < width; i++) {
      this.field[i] = [ ...Array(length).keys()];
      for (var j = 0; j < length; j++) {
        this.field[i][j] = new Cell(i * width + j);
      }
    }
  }
  getCell(id) {
    let x, y;
    y = id % this.length;
    x = (id - y) / this.width;
    return this.field[x][y];
  }
  getTopCells(id) {
    let x, y, offset;
    y = id % this.length;
    x = (id - y) / this.width;
    offset = (x - 1 < 0 ? 0 : 1);
    return this.field[x - offset][y];
  }
  getAdj(id) {
    id = parseInt(id);
    var row = parseInt(this.length);
    var bottomRow = this.area - row;
    let adjacent = {
      top: {
        middle: id - row,
        left: id - row - 1,
        right: id - row + 1
      },
      center: {
        left: id - 1,
        right: id + 1
      },
      bottom: {
        middle: id + row,
        left: id + row - 1,
        right: id + row + 1
      }
    };
    var returned = [];
    returned = (id % row === 0 ? id < row ? [adjacent.center.right, adjacent.bottom.middle, adjacent.bottom.right] : [adjacent.top.middle, adjacent.top.right, adjacent.center.right, adjacent.bottom.middle, adjacent.bottom.right] : id < bottomRow ? [adjacent.center.right, adjacent.top.middle, adjacent.top.right] : null);
    return returned;
  }


}
