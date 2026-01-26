// Function Arrow Challenge

// 1-One statement in fucntion
// 2-Convert to arrow function
// 3-Print the output (argument may change)





let names = (...input) => {
    return `String [${input.join("],[")}]=> Done !`
}
console.log(names("ahmed" , "osama" , "omar"))


//---------------------------------------------

//Challenge Two

let myNumbers = [20,50,10,60];
// let calc = (one,two,...nums) => one + two + +nums;
let calc = function (one,two,...nums) {
    return one + two + +nums;
}
console.log(calc(10,50,20)); //80


