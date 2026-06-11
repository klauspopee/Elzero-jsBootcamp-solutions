function replaceFirstWithLast(word) {
    

    let newArr = word.split('');
    let firstLetter = newArr.slice(0,1);
    let lastLetter = newArr.slice(newArr.length - 1);

    newArr.splice(0,1,...lastLetter);
    newArr.splice(newArr.length - 1 ,1,...firstLetter);


    return newArr.join('');

}











console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oellH