var p = [4, 3, 5, 1, 2]
for (var x=1; x<=p.length; x++) {
    for (var i=0; i<p.length; i++) {
        if (x === p[i]) {
            for (var j=0; j<p.length; j++) {
                if ((i+1) === p[j]) {
                    console.log(j+1);
                }
            }
        }
    }
}
