let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
for (i = friends.indexOf("Ahmed"); i < friends.length ; i++) {
    if (friends[i].startsWith(letter.toUpperCase())){
        friends.splice(i,1);           
    }
    console.log(`${i+friends.indexOf("Eman")}=>${friends[i]}`);
}