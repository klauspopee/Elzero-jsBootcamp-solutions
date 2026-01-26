let usd = 0;
let inp = document.querySelector(`input`);
let mydiv = document.getElementById("result");
console.log(mydiv)  
inp.oninput = function () {
    if (inp.value > 0) {
        usd = Number(document.querySelector(`input`).value);
        mydiv.innerHTML = (`{${usd}}USD Dollar = {${(usd * 15.6).toFixed(2)}} Egyptian Pound`);
    }else {
        mydiv.innerHTML = (`{0}USD Dollar = {0} Egyptian Pound`)
    }
}

