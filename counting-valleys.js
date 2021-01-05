var steps = 12;
//D = downhill; U = uphill
var path = 'DDUUDDUDUUUD';
var coord = 0;
var valley = 0;
for (var i=0; i<steps; i++) {
    if (path[i] === 'D') {
        if (coord === 0) {
            valley++;
        }
        coord--;
    } else {
        coord++;
    }
}
console.log(valley)