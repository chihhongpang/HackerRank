/*

Original question from Hacker Rank - 30 days of code.
https://www.hackerrank.com/contests/7days-javascript/challenges/the-love-letter-mystery-2-js-only

James found a love letter his friend Harry wrote to his girlfriend. Being a prankster, he decides to make some fun adjustments to it by changing each of its words into palindromes.

To do this, he follows two rules:

He can reduce the value of a letter (e.g.: he can reduce d to c, but can't increment c to d).
A letter can be reduced more than once, but once it is reduced to a it becomes locked at a and its value can no longer be changed.
Each reduction in a letter's value is counted as 11 operation. For each test case, find the minimum number of operations required to convert the given string to a palindrome.

Input Format

The first line contains an integer, TT (the number of test cases). 
Each of the TT subsequent lines contains a single string of lowercase characters.

Constraints 
1≤T≤101≤T≤10 
1≤1≤ length of string ≤104≤104 
All characters are lowercase English letters.

Output Format

For each test case, print a new line with the minimum number (as an integer) of operations required to convert the given string to a palindrome.

*/

function processData(input) {
    //Enter your code here
    //console.log(typeof input);
    var newInput = input.split("\n");
    var T = newInput.splice(0,1);
    //console.log(typeof newInput);
    //var testcases = newInput.shift();
    for (var p of newInput) {
        var count = 0;
        var length = p.length;
        var i = 0;
        var j = length - 1;
        while (i < j) {
            count += ( Math.abs( p.charCodeAt(i) - p.charCodeAt(j) ) );
            i++;
            j--;
        }
        console.log(count);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});