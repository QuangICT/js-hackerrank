var c = [0, 0, 1, 0, 0, 1, 1, 0]
var k = 2;
var i = 0;
var energy = 100;
while (energy>0) {
    i = (i+k) % c.length;
    if (c[i] === 0) {
        energy--;
    } else {
        energy -= 3;
    }
    if (i===0) {
        break;
    }
}
console.log(energy)