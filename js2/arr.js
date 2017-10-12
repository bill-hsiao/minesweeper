
var map = [
   [1, 1, 0, 0, 0],
   [0, 1, 0, 0, 1],
   [1, 0, 0, 1, 1],
   [1, 0, 0, 1, 1],
   [1, 0, 1, 0, 1]
];


function solver(arr) {
    function row() {
        var island = 0;
        arr.forEach(function(x, i, a) {
        x.forEach(function(x, i, a) {
            //console.log(x)
            //console.log(a[i]);
            if (x > 0 && a[i - 1] > 0) {
                console.log('adding')
                island + 1;
            }
        })
        
    })
    }
    return row(arr);
}
solver(map);