// If Challenge

let a = 10;

// rewrite this with ternary if syntax
if (a < 10) {
    console.log(10);
}else if (a >= 10 && a <= 40) {
    console.log("10to40");
}else if (a > 40) {
    console.log(">40");
}else {
    console.log("unknown");
}

a < 10 
? console.log(10)
:a >=10 && a <= 40
?console.log("10to40")
:a > 40 
?console.log(">40")
:console.log("unknown");


let st = "Elzero Web School";
if ( typeof st === typeof"34") {
    console.log("good"); //should return good
}

if (st.charAt(st.indexOf("W")).toLocaleLowerCase() === "w") {
    console.log("good"); //should return good and w position can change
}

if (st !== "string") {
    console.log("good");
}

if (typeof st === typeof "number") {
    console.log("good");
}

if ((st.slice(0,6)).repeat(2) === "ElzeroElzero") {
    console.log("good");
}

