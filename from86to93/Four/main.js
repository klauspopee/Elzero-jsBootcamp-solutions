document.querySelector(".one").title = document.querySelector(".two").title;
document.querySelector(".one").innerHTML = document.querySelector(".two").innerHTML;
document.querySelector(".two").title = document.querySelector(".two").className;
document.querySelector(".two").innerHTML =document.querySelector(".two").className + document.querySelector(".one").attributes.length;

