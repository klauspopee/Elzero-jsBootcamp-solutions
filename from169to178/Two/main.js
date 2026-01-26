let myReq = new XMLHttpRequest();
myReq.open("GET", "../One/article.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (myReq.readyState === 4 && myReq.status === 200) {
    console.log("done")
    console.log(myReq.responseText)
    }
}

myReq.onloadend = function () {
    console.log("Data Loaded")
}

