let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let all = [];
all.push(...numsOne,...numsTwo);


console.log(all)
console.log(numsOne.concat(numsTwo));
console.log([...numsOne,...numsTwo]);


// Needed Output
// [1, 2, 3, 4, 5, 6]