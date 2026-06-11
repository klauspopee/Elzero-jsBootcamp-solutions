// my version
function formatName(theName) {

    let arryFromName = theName.split(' ');
    let result = [];
    result.push(arryFromName[0][0].toUpperCase())
    for (i = 1 ; i < arryFromName.length ; i++) {
        result.push(arryFromName[i][0].toLowerCase())
    }

    return result.join('.')
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s

// better version i got using ai
// function formatName (theName) {
//     return theName.split(' ').map((word,index) => index === 0 ? word[0].toUpperCase() : word[0].toLowerCase()).join('.')
// }






