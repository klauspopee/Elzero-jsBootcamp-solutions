let theName = "Elzero";
let arr = [];

for (i = 0 ; i < theName.length ;i++) {
    arr.push(theName[i])
}    




console.log(Object.assign([],theName))
console.log(arr)
console.log(theName.split(''));
console.log([...theName]);
console.log(Array.from(theName));
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']