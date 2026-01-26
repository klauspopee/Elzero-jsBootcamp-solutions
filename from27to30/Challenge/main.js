let a = "Elzero Web School";

// This should include [slice,charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,7)); // Zero

//8H
console.log((a.charAt(13).toUpperCase()).repeat(8)); //HHHHHHHH

//Returen an arry
console.log(a.split(" ",1)); // [Elzero]

//Use only "substr" method + template Literals in the solution
console.log( `${a.substr(0,6)} ${a.substr(11)}`);

//Solution must be dynamic and string may change lmhm lwl w lkhr small
console.log(a.charAt(0).toLowerCase()+a.slice(1,length - 1).toUpperCase()+a.charAt(1 - length).toLocaleLowerCase());