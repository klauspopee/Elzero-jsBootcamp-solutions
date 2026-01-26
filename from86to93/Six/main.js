
let numberInput = document.querySelectorAll(`input`)[0];
let textInput = document.querySelectorAll(`input`)[1];
let typeSelect = document.querySelector(`select`);



let elementsCount;
let elementsText;
let elementsType;




document.forms[0].onsubmit = function (sub) {

        sub.preventDefault();
        elementsCount =  numberInput.value;
        elementsText = textInput.value;
        elementsType = typeSelect.value;

        document.getElementById("boxes").innerHTML = '';

        if (+elementsCount > 0 && elementsText !== '' ) {
            for(i = 1; i <= +elementsCount; i++) {
                let box = document.createElement(elementsType);
                box.innerHTML = `${elementsText}`;
                box.className = "box";
                box.title = "Element"
                box.id = `id-${i}`
                document.getElementById("boxes").appendChild(box);
            }
        }
    }
    



