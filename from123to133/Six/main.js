// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let numbersOnly = [];
let stringsOnly = [];
let newArr = []




for (i = 0 ; i < chars.length ; i++) {
    if(typeof chars[i] === "number") {
        numbersOnly.push(chars[i])
    }else {
        stringsOnly.push(chars[i])
    }
}
newArr.push(...numbersOnly,...stringsOnly);
console.log(newArr)
for (i = 1 ;i < newArr.length ; i++) {
    if(typeof newArr[i] === 'string') {
        newArr.copyWithin(0,i,i+numbersOnly.length)
        break
    }
}
console.log(newArr)





