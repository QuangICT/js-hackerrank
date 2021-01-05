var keyboards = [3, 1]
var drives = [5, 2, 8]
var b = 10;
var priceArr = [];
for (var i=0; i<keyboards.length; i++) {
    for (var j=0; j<drives.length; j++) {
        var price = keyboards[i] + drives[j];
        if (price<=b) {
            priceArr.push(price);
        }
    }
}
if (priceArr.length === 0) {
    console.log(-1)
} else {
    console.log(Math.max(...priceArr));
}