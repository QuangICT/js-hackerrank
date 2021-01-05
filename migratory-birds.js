var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
arr.sort(function(x, y){return x-y});
var count = 1;
var temp = 0;
var save;
for (var i=0; i<arr.length; i++) {
    if (arr[i] === arr[i+1]) {
        count++;
        if (temp < count) {
            temp = count;
            save = arr[i];
        }
    } else {
        count=1;
    }
}
console.log(save)