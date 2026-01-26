let myPromise = new Promise((resolve) => {

    let req = new XMLHttpRequest(); 
    req.open("GET" , "file.json"); 
    req.send();

    req.onload = function () {
        if (this.status === 200 && this.readyState === 4) {
            let data = JSON.parse(this.responseText)
            resolve(data)
        }
    }
}).then((data) => {
    for(i = 0 ; i < 5 ; i++) {
        let element = `
        <div>
            <h3>${data[i].title}</h3>
            <p>${data[i].description}</p>
        </div>`
        document.body.innerHTML += element;
    }
})




