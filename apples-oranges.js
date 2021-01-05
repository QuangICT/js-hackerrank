var sumApp = 0;
var sumOr = 0;
var s = 7;
var t = 11;
var a = 5;
var b = 15;
var apples = [-2, 2, 1];
var oranges = [5, -6]
for (var i =0; i<apples.length; i++) {
    var checkApp = a+apples[i]
    if (checkApp >= s && checkApp <= t) {
        sumApp++
    }
}
for (var i =0; i<oranges.length; i++) {
    var checkOr = b+oranges[i]
    if (checkOr >= s && checkOr <= t) {
        sumOr++
    }
}
console.log(sumApp);
console.log(sumOr);