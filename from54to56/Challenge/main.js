// Loop Challenge
let myAdmins = ["Ahmed" , "Osama" , "Sayed" , "Stop" , "Samera"];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
let realAdmins = [];
let counter = 1;




for (i = 0 ; i < myAdmins.length ; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    realAdmins.push(myAdmins[i]);
}
document.write(`
    <div>We have ${realAdmins.length} Admins</div>
    <hr>`);


for (i  = 0; i < realAdmins.length;1 + i++) {
    document.write(`
        <div>
            "The admin for the team ${i+1}is ${realAdmins[i]}"
            <h3>Team Members:</h3>
        </div>
        `);
    for(j = 0;j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
            document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`);
        }
    }
    document.write(`<hr>`);
    counter = 1;
}

