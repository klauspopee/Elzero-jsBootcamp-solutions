let birthDay = new Date("26 Dec, 2006");
let dateNow  = new Date();
let theAge = dateNow - birthDay;

console.log(`${theAge /1000} Seconds`)
console.log(`${theAge /1000 / 60} Minutes`)
console.log(`${theAge /1000 / 60 / 60} Hours`)
console.log(`${theAge /1000 / 60 / 60 / 24} Days`)
console.log(`${theAge /1000 / 60 / 60 / 24 / 30} Months`)
console.log(`${theAge /1000 / 60 / 60 / 24 / 30 / 12} Years `)