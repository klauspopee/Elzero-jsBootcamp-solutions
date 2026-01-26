
//Header
let container = document.createElement(`div`);
container.id = "container";
container.style.cssText = "width:100%; " ;


let header = document.createElement("header");
header.className = "website-head"
header.style.cssText = "display:flex; align-items:center; justify-content:space-between; background-color:white; padding:10px 20px";


let logo = document.createElement("div");
logo.className = "logo";
logo.innerText = "Elzero";
logo.style.cssText = "font-size:20px; font-weight:bold; color:rgb(35,169,110);";


let nav = document.createElement("ul");
nav.className = "menu";
nav.style.cssText = "display:flex; justify-content:space-between; font-size:14px; color:grey;"


document.body.prepend(container);
document.body.style.cssText = "font-family:arial;  box-sizing:border-box; background-color:#eee; margin:0;"
document.getElementById("container").append(header);
document.getElementsByTagName("header")[0].append(logo);
document.getElementsByTagName("header")[0].append(nav);
for (i = 1 ; i <= 4 ; i++) {
    let link = document.createElement("li");
    link.classList.add(`link-${i}`,`link`);
    link.style.cssText= "list-style-type:none; padding-left:20px"
    document.querySelector("ul").append(link);
}
document.querySelector(".link-1").innerText = "Home";
document.querySelector(".link-2").innerText = "About";
document.querySelector(".link-3").innerText = "Service";
document.querySelector(".link-4").innerText = "Contact";

//Content
let content = document.createElement('div');
content.id = "content";

content.style.cssText = `
display:flex; 
padding:20px;

gap:20px; 
flex-wrap:wrap;`;


document.getElementById("container").append(content);
for(i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    product.className = "product";
    product.style.cssText = `
    padding:30px 20px; 
    background-color:rgb(255,255,255); 
    border:1px solid rgb(221,221,221);
    border-radius:4px;
    text-align:center;
    line-height:1.8;
    width:calc((100% - 40px) / 3);
    box-sizing:border-box;
    min-width:fit-content;
    color:grey;` 
    product.innerHTML = `<span style = "font-weight:bold; font-size:20px; display:block; color:black;">${i}</span>Product`
    document.getElementById("content").append(product);
    
    
}

// footer

let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText = `
background-color:rgb(35,169,110);
color:white;
font-size:26px;
text-align:center;
padding:20px`
footer.innerText = "Copyright 2025"

document.getElementById('container').append(footer);




