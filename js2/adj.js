
function handleClick(evt) {
    var cell = GAME.board.retrieveCell(...parse(evt.target.id));
    var neighbors = 
        
        function neighbors(param) {
            return adjacenters(...parse(cell.id)).forEach(function(idx) { console.log( GAME.board.retrieveCell(idx[0], idx[1])[param])});
        }
    
    
    if (!cell.revealed) {
        cell.revealed = true;
        
    }
    
  adjCellOpen(cellies);
  render.stateChange();
  if (GAME.flag === true) {
    GAME.board.setCell(clicked);
  } else {
      if (clicked.mine) {
        GAME.lose();
        console.log('mine');
    }
  }

}









function mines(p, q) {
    if (p < 1) {
        return;
    }
    let n = GAME.board.retrieveCell(...parse(Math.floor(Math.random() * q)));
    n.mine ? mines(p, q) : (
        n.mine = true,
        mines(p - 1, q)
    );
}





const props = {};

function setGameProps(evt) {
    var event = evt.target.id;
    if (event === 'minecount_input') {
        props.mineCount = evt.target.value;
    } else if (event === 'width_input') {
        props.widthInput = evt.target.value;
    } else if (event === 'length_input') {
        props.lengthInput = evt.target.value;
    }
}
function display() {
    mines(props.mineCount, (props.widthInput*props.lengthInput));
    
}

document.getElementById('minecount_input').addEventListener('input', setGameProps);
document.getElementById('width_input').addEventListener('input', setGameProps);
document.getElementById('length_input').addEventListener('input', setGameProps);
document.getElementById('play_button').addEventListener('click', display);