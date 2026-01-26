let myReq = new XMLHttpRequest();
myReq.open("GET", "../One/article.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (myReq.readyState === 4 && myReq.status === 200) {
        let mainData = JSON.parse(myReq.responseText);
        for(i = 0; i < mainData.length ; i++) {
            mainData[i].type = "All"
        }
        console.log(mainData)
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData)
    }
}