let input = document.querySelectorAll('input');
let select = document.querySelectorAll('select');


// save inputs value to sesseion storage
input.forEach (function(input,index) {
    input.addEventListener('blur', function() {
        sessionStorage.setItem(`input${index}`, input.value);
    })
})

for(i = 0; i < input.length ; i++) {
    if (sessionStorage.getItem(`input${[i]}`)) {
    input[i].value = sessionStorage.getItem(`input${[i]}`)  
}
}

//save select value to session storage
select.forEach(function (option) {
    option.addEventListener('change', function (e) {
        sessionStorage.setItem('state', e.target.value);
        document.querySelector(`[value = "${e.target.value}"]`);
    })
})
if (sessionStorage.getItem('state')) {
    document.querySelector(`[value = "${sessionStorage.getItem('state')}"]`).setAttribute('selected','');
}
