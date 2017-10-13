
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
        var islandSize = 0;
        arr.forEach(function(x, y, z) {
            
        x.forEach(function(a, b, c) {
            if (a === 0 && x[b] === 0 && x[b-1] === 0 && x[b+1]===0) {
                island + 1;
                islandSize = 0;
            } else {
                if (a > 0 && c[b - 1] > 0) {
                    console.log('adding')
                    islandSize + 1;
                } else if (a === 0 && c[b -1] > 0 && c[b + 1] === 0) {
                    x[b] === 1 ?
                }
            }
                
            } 
        })
        
    })
    }
    return row(arr);
}
solver(map);