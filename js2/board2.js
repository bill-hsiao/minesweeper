class Board {
  constructor(length, width) {
      if ()
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
  setCell(cell) {
    this.flagged = true;
    if (this.flagged === false) {
      this.flagged = false;
    }
    return cell;
  }
}
