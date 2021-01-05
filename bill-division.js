var bill = [3, 10, 2, 9]
var k = 1;
var b = 12;

bill.splice(k, 1)
var sum = 0;
var charge = 0;
for (var i=0; i<bill.length; i++) {
    sum += bill[i];
}
var result = sum/2;
if (b > result) {
    charge = b - result;
    console.log(charge)
} else if (b === result) {
    console.log('Bon Appetit')
}