


const game = {
  board: (length, width) => {
    return new Board(length, width)
  }
}


function game3() {
  var b = .15;

  var current = game.board(20, 20)


}

game3();
console.log(game.board(20, 20));




function render() {
  console.log(game.board);
  //document.createElement('td')
}

document.getElementById('button').addEventListener('click', render);

render();
