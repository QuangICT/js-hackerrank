//Only 3x3 matrices
var s = [[4, 8, 2], [4, 5, 7], [6, 1, 6]];
var cost = [0,0,0,0,0,0,0,0];
const magicSquares =
    [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ]
for (var i=0; i<magicSquares.length; i++) {
    for (var k=0; k<3; k++) {
        for (var l=0; l<3; l++) {
            cost[i] = cost[i] + Math.abs(magicSquares[i][k][l] - s[k][l]);
        }
    }
}
console.log(Math.min(...cost));

