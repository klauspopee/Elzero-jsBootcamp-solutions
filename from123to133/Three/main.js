let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myInfoMap = new Map([
    ['username',myInfo.username],
    ['role',myInfo.role],
    ['country',myInfo.country]
]
);

console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has('role'))