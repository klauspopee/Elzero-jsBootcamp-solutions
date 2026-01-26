let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 14;
let diff = []

for(i = 0;i < nums.length; i++) {
    diff.push(Math.abs(goal - nums[i]))
}

let smallDiffIndex = diff.indexOf(Math.min(...diff))
let closest = nums[smallDiffIndex]
console.log(closest)



// Closest Number Is 88