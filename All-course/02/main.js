function addEl (str) {

    if (str.startsWith("El") || str.length === 0) {
        return str;
    }
    else {
        return `El${str}`;
    }

}

console.log(addEl(''))
console.log(addEl('zero'))
console.log(addEl('Elzero'))

