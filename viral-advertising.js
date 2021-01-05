// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24
var n = 4;
var shared = 5;
var like = 2;
var result = like;
for (var i=2; i<=n; i++) {
    shared = like*3;
    like = parseInt(shared/2);
    result += like;
}
console.log(result);
