class Board {
  constructor(length, width) {
      if (this.row !== length) {
          this.row.push(this.col);
          if (this.col !== width) {
              this.col.push(new Cell())
          }
      }
  }

  getCell(id) {
    let x, y;
    y = id % this.length;
    x = (id - y) / this.width;
    //console.log(x, y, this.field)
    return this.field[x][y]
  }

  retrieveCell(coordX, coordY) {
    return this.field[coordX][coordY]
  }

  c(a, b) {
    return this.field[a][b]
  }
  setCell(cell) {
    this.flagged = true;
    if (this.flagged === false) {
      this.flagged = false;
    }
    return cell;
  }
}
