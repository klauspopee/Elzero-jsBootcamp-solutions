document.getElementsByTagName('p')[0].remove();


let startElement = document.createElement('div');
startElement.className = "start";
startElement.title = "Start Element";
startElement.innerText = "Start";
startElement.setAttribute('data-value','start');
document.querySelector(".our-element").before(startElement); 


let endElement = document.createElement('div');
endElement.className = "end";
endElement.title = "End Element";
endElement.innerText = "End";
endElement.setAttribute('data-value','end');
document.querySelector(".our-element").after(endElement); 