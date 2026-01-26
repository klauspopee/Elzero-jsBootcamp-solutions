let addInput = document.getElementsByTagName('input')[0];
let removeInput = document.getElementsByTagName('input')[1];

addInput.onblur = function () {
    if (document.getElementsByClassName('classes-list')[0].lastElementChild.innerHTML === '') {
        document.getElementsByClassName('classes-list')[0].lastElementChild.innerText = "no classes to show"
    }
    if (addInput.value !== '') {
        document.getElementsByClassName('classes-list')[0].lastElementChild.innerText = "";
        let addList = addInput.value.split(" ");
        for (i = 0; i < addList.length; i++) {
            let newClass = document.createElement('span');
            newClass.innerText = `${addList[i].toLowerCase()}`;
            document.getElementsByClassName('classes-list')[0].lastElementChild.append(newClass);
            document.getElementsByClassName('current')[0].classList.add(`${addList[i].toLowerCase()}`)
    }
    } 


    addInput.value = '';
}

removeInput.onblur = function () {
    if (document.getElementsByClassName('classes-list')[0].lastElementChild.innerHTML === '') {
        document.getElementsByClassName('classes-list')[0].lastElementChild.innerText = "no classes to show"
    }

    if (removeInput.value !== '') {
        document.getElementsByClassName('classes-list')[0].lastElementChild.innerText = "";
        let removeList = removeInput.value.split(" ");
        for(i = 0; i < removeList.length ; i++) {
            let removedClass = document.createElement('span');
            removedClass.innerHTML = `${removeList[i].toLowerCase()}`
            let classes = document.getElementsByClassName("classes-list")[0].lastElementChild.children;
            for (j = 0 ; j < classes.length ; j++ ) {
                if(removedClass.textContent === classes[j].textContent) {
                    classes[j].remove();
                    document.getElementsByClassName('current')[0].classList.remove(`${removeList[i].toLowerCase()}`)
                }
            }
        }
    }
    removeInput.value = '';
}


