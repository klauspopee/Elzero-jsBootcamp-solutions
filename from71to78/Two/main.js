let myString = "EElllzzzzzzzeroo";

let noRepeated = myString.split('').filter(function(ele,index) {
    return ele !== myString[index + 1]
});

console.log(noRepeated)

// Elzero