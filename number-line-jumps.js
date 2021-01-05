var x1 = 0;
var v1 = 3;
var x2 = 4;
var v2 = 2;
if (x1>x2 && v2>v1){
    if ((x1-x2) % (v2-v1) === 0) {
        console.log('YES');
    } else {
        console.log('NO');
    }
} else if (x1<x2 && v1>v2) {
    if ((x2-x1) % (v1-v2) === 0) {
        console.log('YES');
    } else {
        console.log('NO');
    }
} else if (x1===x2 && v1===v2) {
    console.log('YES');
} else {
    console.log('NO');
}