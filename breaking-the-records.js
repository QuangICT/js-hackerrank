var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
var min = scores[0];
var max = scores[0];
var sumMin = 0;
var sumMax = 0;
for (var i=1; i<scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
        sumMax++;
    } else if (scores[i] < min ){
        min = scores[i];
        sumMin++;
    } else {

    }
}
console.log(sumMax + ' ' + sumMin);