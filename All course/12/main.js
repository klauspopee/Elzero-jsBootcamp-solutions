let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

for (i = 0; i < names.length ; i++) {
    if (names[i].at(0).toLowerCase() === names[i].at(-1).toLowerCase()) {
        result.push(names[i])
    }
}

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']