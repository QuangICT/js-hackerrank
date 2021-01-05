function gcd(x, y) {
    while (y > 0) {
        var temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function lcm(x, y) {
    return x * (y / gcd(x, y));
}

var a = [2,4]
var b = [16,32,96]
var cd;
var minb = Math.min(...b)
for (var i = minb; i>1; i--) {
    let isCommonDivisor = true;
    for (var j = 0; j<b.length; j++) {
        if (b[j] % i !== 0) {
            isCommonDivisor = false;
            break;
        }
    }
    if (isCommonDivisor) {
        cd = i;
        break;
    }
}
var result = a[0];
for (var i = 1; i<a.length; i++) {
    result = lcm(result, a[i]);
}

var total = 0;
for (var n=1; (n*result)<=cd; n++) {
    var temp = n * result
    if (cd % temp === 0) {
        total++;
    }
}

console.log(total)