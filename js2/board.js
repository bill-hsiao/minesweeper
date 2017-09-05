class Board {
  constructor(length, width, difficulty) {
    this.difficulty = difficulty;
    this.area = length * width;
    this.field = [];
    for (var i = 0; i < width; i++) {
      let temp = [];
      let difficulty = this.difficulty;
      for (var j = 0; j < length; j++) {
        let temp2 = new Cell(i, j, difficulty);
        temp.push(temp2);
      }
      this.field.push(temp);
    }
  }
}
