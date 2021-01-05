var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

ar.sort(function(x, y){return x-y});
var count = 0;
while (ar.length > 1) {
    if (ar[0] === ar[1]) {
        count++;
        ar = ar.slice(2);
    } else {
        ar.shift();
    }
}
console.log(count)