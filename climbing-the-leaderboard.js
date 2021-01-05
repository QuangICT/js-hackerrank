function binarySearch(arr, key) {
    var max = arr.length - 1;
    var min = 0;
    while (min <= max){
        var mid = parseInt((max + min)/2);
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key && key < arr[mid-1]) {
            return mid;
        } else if (arr[mid] > key && key >= arr[mid+1]) {
            return mid+1;
        } else if (arr[mid] < key) {
            max = mid - 1;
        } else if (arr[mid] > key) {
            min = mid + 1;
        }
    }
    return -1;
}

var scores = [100, 90, 90, 80, 75, 60]
var alice = [50, 65, 77, 90, 102]
var rankArr = [1];
var count = 1;
var aliceRank;
for (var i=1; i<scores.length; i++) {
    if (scores[i] < scores[i-1]) {
        count++;
    }
    rankArr.push(count);
}

for (var i=0; i<alice.length; i++) {
    if (alice[i] >= scores[0]) {
        aliceRank = 1;
    } else if (alice[i] < scores[scores.length - 1]) {
        aliceRank = rankArr[rankArr.length-1] + 1;
    } else {
        var index = binarySearch(scores, alice[i]);
        aliceRank = rankArr[index];
    }

    console.log(aliceRank)
}
