var n = 6;
var k = 3;
var ar = [1, 3, 2, 6, 1, 2]
var count=0;
for (var i=0; i<n; i++) {
    for (var j=i+1; j<n; j++) {
        var sum = ar[i] + ar[j];
        if (sum % k === 0) {
            count++;
        }
    }
}
console.log(count);