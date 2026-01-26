let myDiv = document.querySelector('div');

function counter () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML === "0") {
        clearInterval(myCounter);
    }
}

let myCounter = setInterval(counter,1000)