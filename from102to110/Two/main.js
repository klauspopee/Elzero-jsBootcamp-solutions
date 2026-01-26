let appear = function () {
    document.getElementById('holder').style.display = "block";
}
let btn = document.querySelector('button');
btn.onclick = function () {
    document.getElementById('holder').remove();
}
setTimeout(appear,3000)