let date = new Date();
let months = ['january', 'February', 'Mars', 'April', 'May', 'June', 'July', 'Augeust', 'September', 'October', 'November', 'December']


date.setMonth(8,30)

console.log(date)
console.log(`Previous Month is ${months[date.getMonth()]} last day is ${date.getDate()}`)