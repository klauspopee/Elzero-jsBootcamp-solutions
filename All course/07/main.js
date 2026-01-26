let nums = [20, 100, 50, 10, 15, -20, 30,-50];
let two = []

function turnBiggest (nums) {
    two.push((Math.max(...nums)));
    nums.splice((nums.indexOf(Math.max(...nums))),1)
    two.push(Math.max(...nums))
    return two
}

console.log(turnBiggest(nums))




// function turnBiggest (nums) {

// }

// Needed Output
// [100, 50]