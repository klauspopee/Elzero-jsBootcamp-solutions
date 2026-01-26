let result = 1;

function multiply (...input) {
    for (i = 0; i < input.length ; i++) {
        if (typeof input[i] === "number") {
        input[i] =  Math.floor(input[i]);
        result = result * input[i];
    }
}
console.log(result);
result = 1;
}

console.log()

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000