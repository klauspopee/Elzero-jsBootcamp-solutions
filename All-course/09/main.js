function swapEveryTwoChars(word) {
    let result = word.split('');
    for (i = 0; i < result.length ; i+=2) {
        if (result[i] === result[i].toUpperCase()) {
            result[i]=result[i].toLowerCase()
            
        }else {
            result[i]= result[i].toUpperCase()
            
        }
    }
    return result.join("")
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello