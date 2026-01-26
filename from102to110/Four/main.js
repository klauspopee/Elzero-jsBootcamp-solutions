let myDiv = document.querySelector('div');

function counter () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML === "0") {
        clearInterval(myCounter);
        window.open("https://elzero.org/","_self","")
    }
}

let myCounter = setInterval(counter,1000)