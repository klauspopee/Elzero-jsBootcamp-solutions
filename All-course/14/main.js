// my version
function repeatWithRules(word) {
    let repeatCount = 1;
    let arryFromWord = [...word];
    let wordRpeatedArry = []
    arryFromWord.forEach((char) => {
        wordRpeatedArry.push(char.repeat(repeatCount))
        repeatCount++;
    })

    return wordRpeatedArry.join('')
}

// better version i got after using ai
// function repeatWithRules(word) {
//     return [...word]
//         .map((char, i) => char.repeat(i + 1))
//         .join('');
// }

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo