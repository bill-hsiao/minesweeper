function adjacentFinder(id) {
  var length, width;
  var adjacentEdges = {
    topLeftCorner: null,
    topMiddle: null,
    topRightCorner: null,
    left: null,
    right: null,
    bottomLeftCorner: null,
    bottomMiddle: null,
    bottomRightCorner: null
  }
  function edgeCases(id) {

  }
  objectFunc(adjacentEdges);
  function objectFunc(obj) {
    for (let key in obj) {
      if (obj[key] !== null) {
        console.log(obj[key]);
      }
    }
  }
}
adjacentFinder();

function adjMaker(left, right) {
  this.hello = left,
  this.bye = right
}
