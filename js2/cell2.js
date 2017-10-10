class Cell {
  constructor(index) {
    this.id = +index;
    this.mine = false;
    this.flagged = false;
    this.numAdj = null;
    this.revealed = false;
    this.number = 0;
  }
  callMethod() {
    console.log("method successfully called.", this.number);
  }
  incrementThisCell() {
    this.number ++;
    console.log(this.number);
  }
}


//``
// this.focus = Boolean;
// this.revealed = false;
// this.flagged = false;
// this.numAdj = null;
