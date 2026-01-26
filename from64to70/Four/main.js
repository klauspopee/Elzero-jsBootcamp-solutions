function specialMix(...data) {
    let result = 0;
    for (i = 0 ;i < data.length ; i++) {
        let num = parseInt(data[i]);
        
        if (isNaN(num)) {
            num = 0;
        }
        result += num;
    }
    return result === 0 ? "all is strings" : result;
    
}


//thx to hubaydi I GOT THE SOLUTION FROM HIM




console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

