// Number Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Finding the smallest number 
console.log(Math.trunc(Math.min(a, b ,c ,d)))

// get number 10000 from a and d 
console.log(a ** (Math.trunc(d)))

//get the integer 2 from d four times  with four methodes
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(+((d).toFixed()));
console.log(Math.trunc(d));

//use vars b and d to get these values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); //66.67 =>string
console.log(Math.round((Math.trunc(b) / Math.ceil(d)))); //67 =>number