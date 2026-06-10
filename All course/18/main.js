let st = "elzero";

// [1]
console.log([...st].map((char,index) => char[index] === char[0] ? char.toUpperCase() : char.toLowerCase()).join(''));
// [2]
console.log(st.replace(st[0],st[0].toUpperCase()));
// [3] 
console.log([st[0].toUpperCase()].concat([...st].slice(1)).join(''))
// [4]
console.log([st[0].toUpperCase()].concat([...st].splice(1)).join(''));
// [5]
console.log(`${st[0].toUpperCase()}`.concat(st.slice(1)));
// [6]
console.log(`${st[0].toUpperCase()}`.concat(st.substring(1)));
// [7] 
console.log(`${st[0].toUpperCase()}${st.substring(1)}`);
//[8]
console.log(`${st[0].toUpperCase()}${st.slice(1)}`)






// Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"