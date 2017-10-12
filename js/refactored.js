
function handleClick(evt) {
    var cell = game.retrieveCell(...parse(evt.target.id));
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















const props = {};
const game = {};
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
function display(mines) {
    game = new Board(props.widthInput, props.lengthInput);
    if (mines) {
        mines(props.mineCount, (props.widthInput*props.lengthInput));
    }
}

function mines(p, q) {
    if (p === 0) {
        return
    }
    let n = GAME.board.retrieveCell(...parse(Math.floor(Math.random() * q)));
    n.mine ? mines(p, q) : (
        n.mine = true,
        mines(p - 1, q)
    );
}



document.getElementById('minecount_input').addEventListener('input', setGameProps);
document.getElementById('width_input').addEventListener('input', setGameProps);
document.getElementById('length_input').addEventListener('input', setGameProps);
document.getElementById('play_button').addEventListener('click', display);
document.getElementById('button').addEventListener('click', render.createCells);


function render() {
    this.createCells = function() {
        let table = document.createElement('table');
        for (let i = 0; i < props.width; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < props.length; j++ ) {
                let cell = document.createElement('td');
                cell.id = i * props.width + j;
                row.appendChild(cell);
            }
            table.appendChild(row);
        };
        table.addEventListener('click', handleClick);
        document.body.appendChild(table);
    };
    this.stateChange = function() {
        for (let i = 0; i < props.width; i++) {
            for (let j = 0; j < props.length; j++ ) {
                let td = document.getElementById(i * props.width + j);
                game.retrieveCell(i, j).revealed ? (
                    td.classname,
                    td.textContent = game.retrieveCell(i, j).number
                ) : '';
    }
}
    }
}



