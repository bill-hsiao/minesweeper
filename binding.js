global.x = 10;
var module = {
  x: 11,
  getX: function() {
    return this.x
  }
}

console.log(module.getX());

console.log(module.getX());

var retrieveX = module.getX;

var boundX = retrieveX.bind(module);

console.log(boundX());

console.log(retrieveX())
