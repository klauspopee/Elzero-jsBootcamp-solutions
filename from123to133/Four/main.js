let theNumber = 100020003000;

console.log(...[...new Set(`${theNumber}`)].sort().filter((n) => n != +false).map((n) => +n));