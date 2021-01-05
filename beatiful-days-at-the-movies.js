// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.
//
//     She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
//
//     Given a range of numbered days,  and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where abs(i-reverse(i)) is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

var i = 13;
var j = 45;
var k = 3;

var count = 0;
for (var n=i; n<=j; n++) {
    var reverse = Number(n.toString().split("").reverse().join(""));
    if (Math.abs(n-reverse) % k === 0) {
        count++;
    }
}
console.log(count);