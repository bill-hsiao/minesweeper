
this.string = "hi";

var module = {
  string: "hello",
  getString:function() {
    return this.string;
  }
}

module.getString();

var retrieveString = module.getString;
retrieveString();
console.log(module);
console.log(retrieveString());

var aha = retrieveString.bind(module);
aha();

console.log(aha());
