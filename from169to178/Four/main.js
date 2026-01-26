let dataDiv = document.createElement('div');
dataDiv.setAttribute('id','data');
document.body.append(dataDiv);


let req = new XMLHttpRequest();
req.open("GET","../One/article.json");
req.send();
req.onloadend = function() {
    let data = JSON.parse(req.responseText);
    console.log(data);
    for(i = 0; i < req.responseText.length ; i++) {
        let article = `
        <div>
            <h2>${data[i].title}</h2>
            <p>${data[i].body}</p>
            <p>Author: ${data[i].writer_name}</p>
            <p>Category: ${data[i].type}</p>
        </div>`
        document.getElementById('data').innerHTML += article;
    }
}

