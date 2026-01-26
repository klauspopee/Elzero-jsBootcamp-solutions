fetch("file.json")
.then((result) =>  result.json())
.then((data) => {
    for (i=0; i<5; i++)  {
        let element = `
        <div>
            <h3>${data[i].title}</h3>
            <p>${data[i].description}</p>
        </div>`
        document.body.innerHTML += element;
    }
})