var string = "+d+=3=+s+";
var string2 = "f++d+";

function SimpleSymbols(str) {
    //console.log(str.split('').forEach((x) => console.log(/[+][a-zA-Z][+]/.test(x))));
    //console.log(str.split(''))
    var falseAlarm = false;
    str = str.split('');
    for (var i = 0; i < str.length; i++ ) {
      if (/[a-zA-Z]/.test(str[i])) {
        //console.log(str[i - 1], str[i], str[i + 1]);
        console.log(/[+]/.test(str[i - 1] && str[i + 1]));
      }
    }
  // code goes here
  return str;

}
   SimpleSymbols(string);
