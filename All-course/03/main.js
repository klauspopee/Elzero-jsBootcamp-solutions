let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

let first = myString.indexOf('@');
let second = myString.indexOf('@', first+1);

console.log(myString.slice(0,second))