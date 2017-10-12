function parse(id) {
  var y = id % GAME.length;
  var x = (id - y ) / GAME.width;
  return [x, y]
}

function adjacenters(coordX, coordY) {
  var neighbors;
  var maxL = GAME.board.length - 1;
  var maxW = GAME.board.width - 1;
  var adj = {
    lc: [coordX, coordY - 1],
    lt: [coordX - 1, coordY - 1],
    lb: [coordX + 1, coordY - 1],
    rc: [coordX, coordY + 1],
    rt: [coordX - 1, coordY + 1],
    rb: [coordX + 1, coordY + 1],
    ct: [coordX - 1, coordY],
    cb: [coordX + 1, coordY],
  };
    neighbors = (
    coordX === 0 ?
    coordY === 0 ? [adj.rc, adj.rb, adj.cb] :
    coordY === maxW ? [adj.lc, adj.lb, adj.cb] : [adj.lc, adj.lb, adj.rc, adj.rb, adj.cb] :
    coordY === maxW ?
    coordX === 0 ? [adj.lc, adj.lb, adj.cb] :
    coordX === maxL ? [adj.lc, adj.lt, adj.ct] : [adj.lc, adj.lt, adj.lb, adj.ct, adj.cb] :
    coordX === maxL ?
    coordY === maxW ? [adj.lc, adj.lt, adj.ct] :
    coordY === 0 ? [adj.rc, adj.rt, adj.ct] : [adj.lc, adj.lt, adj.ct, adj.rt, adj.rc] :
    coordY === 0 ?
    coordX === maxL ? [adj.rc, adj.rt, adj.ct] :
    coordX === 0 ? [adj.rb, adj.rc, adj.cb] : [adj.rc, adj.rt, adj.rb, adj.ct, adj.cb] :
    Object.values(adj)
  );
  return neighbors
}
function adjCellOpen(array, callback) {
  let l = array.length;
  if (l > 0) {
    let x = array[0][0];
    let y = array[0][1];
    let cell = GAME.board.retrieveCell(x, y);
      if (callback) {
          callback(cell);
      }
      //console.log(cell);
    array = array.slice(1);
    adjCellOpen(array, callback);
  } else {
    return;
  }
}
function cb(cell) {
    console.log(cell);
}
function number(cell) {
    if (!cell.mine)
}
