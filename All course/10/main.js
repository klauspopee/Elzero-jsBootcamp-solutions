// Write Your Function Implementation Here



String.prototype.elzeroRepeat = function (count) {
    let myArr = []
    for(i=0; i<count ;i++) {
        myArr.push(this)
    }
    return myArr.join('')
}

console.log("ahmed ".elzeroRepeat(3))

