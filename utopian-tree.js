function utopianTree(n) {
    var height = 1;
    var temp = 1;
    while (temp<=n) {
        if (temp % 2 === 0) {
            height++;
        } else {
            height *= 2;
        }
        temp++;
    }
    console.log(height);

}

var n = [4, 3]
for (let i = 0; i < n.length; i++) {
    utopianTree(n[i]);
}