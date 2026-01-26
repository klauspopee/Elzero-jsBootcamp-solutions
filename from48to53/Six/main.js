let start = 0;
let swappedName = "elZerO";
let orgnized = [];
for (i = start; i < swappedName.length ; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        orgnized.push(swappedName[i].toUpperCase());
    }else {
        orgnized.push(swappedName[i].toLowerCase())
    }
}
console.log(orgnized.join(""))
// Output
// Output
// "ELzERo"


