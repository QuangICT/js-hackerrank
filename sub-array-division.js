var s = [5, 1, 2, 4, 4, 2, 4, 2, 2, 5, 1, 4, 3, 1, 1, 1, 2, 1, 4, 1]
var d = 18;
var m = 6;
var count = 0;
for (var i=0; i<=s.length-m; i++) {
    var subArr = s.slice(i, i+m);
    var sumSubArr = 0;
    for (var j=0; j<subArr.length; j++) {
        sumSubArr += subArr[j];
    }
    if (sumSubArr === d) {
        count++;
    }
}
console.log(count);