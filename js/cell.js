class Cell {
  constructor(x, y, width) {
      this.x = x;
      this.y = y;
    this.id = x * width + y;
    this.mine = false;
    this.flagged = false;
    this.number = null;
    this.revealed = false;
    this.textContent = '';
      this.neighbors = null;

  }
  reveal() {
    this.revealed = true;
    if (this.number) return;
      
  }
  mineToggle() {
    this.mine = true;
  }
  numberToggle() {
    this.number ++;
  }
//  neighbors() {
//      var adj = 0;
//      this.left = {
//          c: game.field[x][y - 1],
//          t: game.field[x - 1][y - 1],
//          b: game.field[x + 1][y - 1]
//      };
//      this.right = {
//          c: game.field[x][y + 1],
//          t: game.field[x - 1][y + 1],
//          b: game.field[x + 1][y + 1]
//      };
//      this.center = {
//          t: game.field[x - 1][y],
//          b: game.field[x + 1][y]
//      }
//      console.log(game.field[0][0])
//        
//  }
    
    adjacenters(x, y) {
     let x = this.x;
     let y = this.y;
    var maxW = props.widthInput - 1;
    var maxL = props.lengthInput - 1;
    var adj = {
        lc: game.retrieveCell(...[x, y - 1]),
        lt: game.retrieveCell(...[x - 1, y - 1]),
        lb: game.retrieveCell(...[x + 1, y - 1]),
        rc: game.retrieveCell(...[x, y + 1]),
        rt: game.retrieveCell(...[x - 1, y + 1]),
        rb: game.retrieveCell(...[x + 1, y + 1]),
        ct: game.retrieveCell(...[x - 1, y]),
        cb: game.retrieveCell(...[x + 1, y])
    };
    this.neighbors = (
        x === 0 ?
        y === 0 ? (adj.rc, adj.rb, adj.cb) :
        y === maxW ? (adj.lc, adj.lb, adj.cb) : (adj.lc, adj.lb, adj.rc, adj.rb, adj.cb) :
        y === maxW ?
        x === 0 ? (adj.lc, adj.lb, adj.cb) :
        x === maxL ? (adj.lc, adj.lt, adj.ct) : (adj.lc, adj.lt, adj.lb, adj.ct, adj.cb) :
        x === maxL ?
        y === maxW ? (adj.lc, adj.lt, adj.ct) :
        y === 0 ? (adj.rc, adj.rt, adj.ct) : (adj.lc, adj.lt, adj.ct, adj.rt, adj.rc) :
        y === 0 ?
        x === maxL ? (adj.rc, adj.rt, adj.ct) :
        x === 0 ? (adj.rb, adj.rc, adj.cb) : (adj.rc, adj.rt, adj.rb, adj.ct, adj.cb) :
        Object.values(adj)
      );
        return this.neighbors
}
}