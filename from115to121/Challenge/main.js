// Distructuring Challenge

let choosen = 3;

let myFriends = [
    {title: "osama", age: 29, available: true, skills: ["html" , "css"]},
    {title: "ahmed", age: 25, available:false, skills: ["python" , "django"]},
    {title: "sayed", age: 36, available: true, skills: ["php" , "laravel"]},
];

let [firstPerson,secondPerson,thirdPerson] = myFriends;
let title,age,available,skill2;
if (choosen === 1) {
    ({title,age,available,skills:[,skill2]} = firstPerson);
}else if (choosen === 2) {
    ({title,age,available,skills:[,skill2]} = secondPerson);
}else if (choosen === 3) {
    ({title,age,available,skills:[,skill2]} = thirdPerson);
}


console.log(title);
console.log(age);
console.log(available === true ? "available" : "not available");
console.log(skill2);
