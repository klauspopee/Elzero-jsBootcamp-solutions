let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log( num + +true + +true + +true); // 6

// Soultion Three
console.log(+true + +true + +true + +true + +true + +true); // 6

// Soultion Four
console.log(num * num - num); // 6

// Solution Five
console.log((+true + +true) * num); // 6

// Solution Six
console.log(num ** (+true  + +true) -  num); // 6