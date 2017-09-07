class Board {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.area = length * width;
    this.mineCount = 0;
    this.minesLeft;
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
}


//i * width + j

// for (var i = 0; i < width; i++) {
//   let temp = [];
//   let offset2 = i * j;
//   for (var j = 0; j < length; j++) {
//     let offset = i * j;
//     let id = (i >= 1 ? `${offset2 + j}` : `${offset+j}`);
//     let temp2 = new Cell(id);
//     temp.push(temp2);
//   }
//   this.field.push(temp);
// }
