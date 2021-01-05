// There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' is at index 25. There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm2 assuming all letters are 1mm wide.

var h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
var word = 'zabacd';
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var heightArr = [];
for (var i=0; i<word.length; i++) {
    for (var j=0; j<alphabet.length; j++) {
        if (word[i] === alphabet[j]) {
            heightArr.push(h[j]);
        }
    }
}
var maxHeight = Math.max(...heightArr);
var area = maxHeight * word.length;
console.log(area)