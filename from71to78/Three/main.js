let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.join("").split("").filter(function (ele) {
    return ele !== ",";
}).reduce(function(acc,curr) {
    return `${acc}${curr}`
});
console.log(newArray)
// Elzero