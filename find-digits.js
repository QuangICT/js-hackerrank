var n = 1012;
var temp = n;
    var count = 0;
    while (temp>0) {
        var digit = temp%10;
        temp = parseInt(temp/10);
        if (n % digit === 0) {
            count++;
        }
    }
console.log(count)