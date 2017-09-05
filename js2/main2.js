


const game = {
  board: (length, width) => {
    return new Board(length, width)
  },
  difficulty: (a) => {
    return a;
  }
}


function game() {

}

var b = .15;

var current = {
  game.board(20, 20, b),
  game.difficulty(b)
};

console.log(game.board(20, 20, .15));




function render() {
  console.log(game.board);
  //document.createElement('td')
}

document.getElementById('button').addEventListener('click', render);

render();
