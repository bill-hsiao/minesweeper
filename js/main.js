/*app's constants*/
/*----- app's state (variables) -----*/
var input, board;

/*----- cached element references -----*/
// generate(10, 10);
// mines(map, 0, mineList);

/*----- event listeners ------*/
document.querySelector('table')
     .addEventListener('click', handleClick);
document.getElementById('start')
     .addEventListener('click', reset);
function handleClick(event) {
    input = event.target;
    if (input.textContent) {
        return;
    } else {
            render();

    }
}

/*----- functions -----*/
reset();

function reset() {
    board = new Board(10, 10);
    console.log(board);

    render();
}

function getNewBoard() {
    return {

    };
}


// function generate(a, b) {
//     map = Array.from(new Array((a * b)-1),(val, index) =>0);
//     x = a;
//     y = b;
//     console.log(x, y);
//     mineList = [];
// }

function render() {
    var numCells = board.cells.length * board.cells[0].length;
    for (var id = 0; id < numCells; id++) {
        document.getElementById(id).textContent = board.getCellByIndex(id).mine ? 'X' : '';
    }
}

// mines(map, 0, mineList);
// numberMaker(map);
// function mines(board, i, mineList) {
//     var mine;
//     if (i === 25) {
//         return board, mineList;
//     } else {
//         mine = (Math.floor(Math.random() * ((board.length-1) + 1 )));
//         if (board[mine] !== 0) {
//         mines(board, i, mineList);
//         } else {
//         mineList.push(mine);
//         board[mine] = board[mine]-1;
//         i++;
//         mines(board, i, mineList);
//         }
//     }
// }

//function numberMaker(map) {
//     var a1;
//     for (index = 0; index< map.length; index++)
//         if (map[index]===-1) {
//             a1 = map[index-11];
//             a1 = a1+1;
//             console.log(a1);
//             map[index-11] = a1;
//             render();
//         }
// }
//adjacent(gameBoard, mineList);
//console.log(board[.size]);
//adjacent(board.size, 38, board.x);
// function adjacent(array, index, z) {
//     //var a1,a2,a3,b4,b5,c6,c7,c8,
//     if (z === index.length) {
//         return;
//     } else {
//         if (index[z]-11 > 0 && array[index[z]-11] >= 0) {
//             array[index[z]-11] = array[index[z]-11] +1;
//         }
//         if (index-10 > 0 && array[index-10] >= 0) {
//             array[index-11] = array[index-10] +1;
//         }
//         if (index-9 > 0 && array[index-9] >= 0) {
//             array[index-11] = array[index-9] +1;
//         }
//         if (index-1 > 0 && array[index-1] >= 0) {
//             array[index-1] = array[index-1] +1;
//             console.log(array[index-1]);
//         }
//         if (index+1 < array.length && array[index+1] >= 0) {
//             array[index+1] = array[index+1] +1;
//             console.log(array[index+1]);
//         }
//         if (index+9 < array.length && array[index+9] >= 0) {
//             array[index+9] = array[index+9] +1;
//             console.log(array[index+9]);
//         }
//         if (index+10 < array.length && array[index+10] >= 0) {
//             array[index+10] = array[index+10] +1;
//             console.log(array[index+10]);
//         }
//         if (index+11 < array.length && array[index+11] >= 0) {
//             array[index+11] = array[index+11] +1;
//             console.log(array[index+11]);
//         }
//     z++;
//     adjacent(array, index, z);
//     }
// }

// function mineCount(board, adj) {
//     for (var q = 0; q < adj.length; q ++) {
//         board[adj[q]] = board[adj[q]]+1;
//         console.log(board[adj[q]]);
//     }
// }
// // function hello(board) {
//     if (bo)
// }

//mines(board);

// functionMinePlanter(x, y) {
//     var board = [];
//     var mine = function(x, y) {return Math.floor(Math.random() * board.length}
//     var i = 0;
//     if (i = ()) {
//         return;
//     } else {
//     i++;
//     board.forEach(function)
// }

// function mine() {
//     let phoo = new Array();
//     var bar = 0;
//     bar++;
//     phoo.push(bar);
//     console.log(phoo);
//     return bar = 50? true : mine();
// }
// mine();

// function rng(array) {
//     return Math.floor(Math.random() * (array.length));
// }
// console.log(rng(generateArray(50)));

//getting from primitive of 100

    //random number generator from 0-array length
    //generates index value
    //findindex and then pull from the array
    //recursive until array.length is === n
// var nums = [];

// fiftyGenerator(nums);
// function fiftyGenerator(nums) {
//     if (nums.length === 50) {
//         return nums;
//     } else {
//         nums.push(randomNum());
//         fiftyGenerator(nums);

//     }
// }

// function randomNum(min, max) {
//   let random = Math.floor(Math.random() * (50 - 0 + 1)) + 0; //The maximum is inclusive and the minimum is inclusive
//   return random;
// }
// console.log(nums);



// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
