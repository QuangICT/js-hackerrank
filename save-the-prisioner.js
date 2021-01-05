var n = 7;
var m = 19;
var s = 2;

var mod = m % n;
var result;
if (mod===0 && s===1) {
    result = n;
} else {
    result = (s-1) + mod;
    if (result > n) {
        result = result-n;
    }
}
console.log(result)