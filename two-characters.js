// In this challenge, you will be given a string. You must remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Your goal is to create the longest string possible that contains just two alternating letters.
//
//     As an example, consider the string abaacdabd. If you delete the character a, you will be left with the string bcdbd. Now, removing the character c leaves you with a valid string bdbd having a length of 4. Removing either b or d at any point would not result in a valid string.
//
//     Given a string , convert it to the longest possible string  made up only of alternating characters. Print the length of string  on a new line. If no string  can be formed, print  instead.

'use strict';
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var max = 0;
var s = 'asdcbsdcagfsdbgdfanfghbsfdab';
for (var i = 0; i < alphabet.length; i++) {
    for (var j = i + 1; j < alphabet.length; j++) {
        var x = alphabet[i];
        var y = alphabet[j];
        var t = '';
        var check = true;
        for (var k = 0; k < s.length; k++) {
            if (s[k] === x || s[k] === y) {
                t += s[k];
            }
        }
        for (var p = 0; p + 1 < t.length; p++) {
            if (t.charAt(p) === t.charAt(p + 1)) {
                check = false;
                break;
            }
        }
        if (check && t.length > 1) {
            console.log(t)
            max = Math.max(max, t.length);
        }
    }
}
console.log(max);

