class Cell {
  constructor(id) {
      this.id = id;
      this.mine = false;
      this.flagged = false;
      this.number = 0;
      this.revealed = false;
      this.textContent = '';
      this.htmlClass = '';
  }
}

//}class Cell {
//  constructor(x, y, width) {
//      this.x = x;
//      this.y = y;
//      this.id = x * width + y;
//      this.mine = false;
//      this.flagged = false;
//      this.number = 0;
//      this.revealed = false;
//      this.textContent = '';
//      this.htmlClass = '';
//  }
//}