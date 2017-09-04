class Board {
  constructor(length, width) {
    this.area = length * width;
    this.cells = {};
    for (var i = 0; i < this.area; i++) {
      this.cells[i] = new Cell;
    }
    console.log(Object.keys(this.cells));
  }
}
