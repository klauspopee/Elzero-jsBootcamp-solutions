

let taskList = [];




document.querySelector('.add').addEventListener('click', function () {
    let inputValue = document.querySelector('input').value;

    let taskHolder = document.createElement('div');
    taskHolder.classList.add('task');
    taskHolder.innerText = inputValue;
    taskHolder.title = inputValue;

    let deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delete';
    deletBtn.classList.add('delete');

    taskHolder.append(deletBtn);

    if (inputValue !== "") {
        document.querySelector(".output").append(taskHolder);

    }
    document.querySelector('input').value = '';

    let attrHolder = {};
    attrHolder['title'] = inputValue;
    attrHolder['class'] = taskHolder.className;
    taskList.push(attrHolder);
    if(taskList.value !== '') {
        localStorage.setItem('tasks',JSON.stringify(taskList))
    }

    

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    })
})



