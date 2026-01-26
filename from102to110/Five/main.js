let myDiv = document.querySelector('div');

function counter () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML === "4") {
        window.open("https://elzero.org/","","width=400,height=400,left=500,top=150")
    }else if (myDiv.innerHTML === "0") {
        clearInterval(myCounter);
    }
}

let myCounter = setInterval(counter,1000);