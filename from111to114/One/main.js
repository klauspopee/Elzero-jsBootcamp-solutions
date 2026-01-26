let options = document.querySelectorAll('#font-family');
let colors = document.querySelectorAll('#color');
let fontSizes = document.querySelectorAll('#font-size');

//font family select
options.forEach(function(option) {
    option.addEventListener('change',function(e) {
        localStorage.setItem('font-family',e.target.value);
        document.body.style.fontFamily = `${e.target.value}`;
    })
})
if (localStorage.getItem('font-family')) {
    document.querySelector(`[value = "${localStorage.getItem('font-family')}"]`).setAttribute('selected','')
    document.body.style.fontFamily = `${localStorage.getItem('font-family')}`;
}


//font color select
colors.forEach(function (color) {
    color.addEventListener('change', function(e) {
        document.body.style.color = `${e.target.value}`
        localStorage.setItem('color', e.target.value);
    })
})
if (localStorage.getItem('color')) {
    document.body.style.color = `${localStorage.getItem('color')}`
    document.querySelector(`[value = "${localStorage.getItem('color')}"]`).setAttribute('selected','')
}


//font size select
fontSizes.forEach(function (fontSize) {
    fontSize.addEventListener('change', function(e) {
        document.body.style.fontSize = `${e.target.value}px`
        localStorage.setItem('font-size', e.target.value);
    })
})
if (localStorage.getItem('font-size')) {
    document.body.style.fontSize = `${localStorage.getItem('font-size')}px`
    document.querySelector(`[value = "${localStorage.getItem('font-size')}"]`).setAttribute('selected','')
}