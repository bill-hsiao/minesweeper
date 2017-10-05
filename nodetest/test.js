function objectFactory(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  return this
}


var hehe = 'hello';
var hoohoo = 'hello';
var haha = objectFactory(hehe, hoohoo);

console.log(haha);
