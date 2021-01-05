var a = [1, 2, 3]
var k = 2;
var queries = [0, 1, 2]
for (var i=1; i<=k; i++) {
    a.unshift(a[a.length-1])
    a.pop();
}
for (var i=0; i<queries.length; i++) {
    console.log(a[queries[i]])
}
