class Board {
  constructor(length, width) {
    this.area = length * width;
    this.field = [];
    for (var i = 0; i < width; i++) {
      let temp = [];
      let offset2 = i * j;
      for (var j = 0; j < length; j++) {
        let offset = i * j;
        let id = (i >= 1 ? `${offset2 + j}` : `${offset+j}`);
        let temp2 = new Cell(id);
        temp.push(temp2);
      }
      this.field.push(temp);
    }
  }
}
