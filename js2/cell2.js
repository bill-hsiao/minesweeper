class Cell {
  constructor(x, y, c) {
    this.id = x + y;
    this.density = c;
    this.mine = Math.random() < c ? true : false;
    this.focus = Boolean;
    this.revealed = false;
    this.flagged = false;
    this.numAdj = null;
  }
}
