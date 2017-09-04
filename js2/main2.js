


const game = {
  board: (length, width) => {
    return new Board(length, width)
  }
}



console.log(game.board(20, 20));




function render() {
  console.log(game.board);
  //document.createElement('td')
}

document.getElementById('button').addEventListener('click', render);

render();
