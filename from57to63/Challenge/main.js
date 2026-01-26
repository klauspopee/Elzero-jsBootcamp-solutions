// Function Random Argument Challenge
//===================================
//Creat Fucntion showDetails
//Function Accepts 3 parameters [a,b,c]
//Data types for info is 
// - String => Name
// - Number => Age 
// - Boolean =>Status
//Argument is random
//Data is not sorted output depend on data types
//use ternary conditional operator

let A;//name
let B;//age
let C;//hiring



function showDetails (a,b,c) {
    //To select the string "name"
    typeof a === "string" ? A = a : typeof b === "string" ? A = b : A = c
    // To seclet the number "age"
    typeof a === "number" ? B = a : typeof b === "number" ? B = b : B = c
    // To select the boolean "hires or not"
    typeof a === "boolean" ? C = a :typeof b === "boolean" ? C = b :  C = c 

    c === true ? console.log(`Hello ${A},Your Age is ${B},You are availabe For Hire`) : console.log(`Hello ${A},Your Age is ${B},You are Not availabe For Hire`);
}



showDetails("osama",13,true);
showDetails(12,"osama",false);
showDetails(false,"ahmed",13);
showDetails("mohamed", 19 , true);








