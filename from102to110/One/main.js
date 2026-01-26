
let popUp = prompt('Print number from - to', 'Example:5-20').split("-").sort();
console.log(popUp);
let bigger;
let smaller;

if (+popUp[0] > +popUp[1]) {
    bigger = +popUp[0];
    smaller = +popUp[1];
}else {
    bigger = +popUp[1];
    smaller = +popUp[0];
}



for (i = smaller; i <= bigger ; i++) {
    let holder = document.createElement('div');
    holder.innerText = `${i}`
    document.body.append(holder);
}