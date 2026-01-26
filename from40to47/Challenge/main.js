// Arrays Challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal", "Ameer"];

// Write Code here
my.reverse().splice(zero,my.indexOf("Mazero") - my.indexOf("Osama"));

console.log(my);// ["Osama" , "Elham" , "Mazero" , "Ahmed"]
console.log(my.slice(length - counter,counter));//["Elham" , "Mazero"]
console.log(my.splice(zero,length).toString(), "Elzero");//"Elzero"
console.log(my.splice(zero,length).toString(), "rO"); 
