var grades = [73, 67, 38, 33]

for (var i=0; i<grades.length; i++) {
    if (grades[i] < 38) {
        console.log(grades[i])
    } else {
        if (grades[i] % 5 === 0) {
            console.log(grades[i])
        } else {
            var remainder = grades[i] % 5;
            var temp = 5 - remainder;
            if (temp < 3) {
                console.log(grades[i]+temp);
            } else {
                console.log(grades[i])
            }
        }
    }
}