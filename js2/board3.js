

class Board {
  constructor(length, width) {
    if (length < 50) {
      console.log('hello');
    }
  }
  getNewBoard(times) {
    new Board(times);
    if (times === 0) {
      return;
    } else {
      this.getNewBoard(times-1);
      // console.log(times);
    }
  }
}
class Cell extends Board {
    constructor(string) {
        super();
        console.log(string);
    }
}


var hello = new Board(5);
var hehe = new Cell('haha');
console.log(hehe);
hello.getNewBoard(30);


