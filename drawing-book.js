var n = 73201;
var p = 57075;
var countX = parseInt(p/2);
var countN = parseInt(n/2) - parseInt(p/2);
var result = Math.min(countX, countN);
// My method:
// var countX = 0;
// var countN = 0;
// for (var i=1; i<p; i+=2) {
//     countX++;
// }
// for (var i=n; i>p; i-=2) {
//     countN++;
// }
// if (n % 2 !== 0 && p%2===0) {
//    countN--;
// }
// var result = Math.min(countX, countN);
console.log(result);