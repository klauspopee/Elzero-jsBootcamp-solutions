function getDetails (zName,zAge,zCountry) {
    
    function namePattern (zName) {
        let arry = zName.split(" ");
        return `${arry[0]} ${arry[1][0].toUpperCase()}., `;
    }
    
    function ageWithMessage (zAge) {
        let arry = zAge.split(" ");
        let realAge = arry[0];
        return `Your Age is ${realAge}, `;
    }

    function countryTwoLetters (zCountry) {
        let twoLetters = `${zCountry.charAt(0)}${zCountry.charAt(1)}`.toUpperCase();
        return `You Live In ${twoLetters}`;
    }

    function fullDetails () {
        return `${namePattern(zName)}${ageWithMessage(zAge)}${countryTwoLetters(zCountry)}`;
    }
    return fullDetails();
} 

console.log(getDetails("Ahmed omar", "26 age is 17", "syria"))







