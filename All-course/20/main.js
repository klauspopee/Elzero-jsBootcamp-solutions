let st = "Elzero";

// [1]
console.log(st[st.length-1]);
// [2]
console.log(st.at(-1));
// [3]
console.log(st.charAt(st.length -1));
// [4]
console.log(st.slice(-1));
// [5]
console.log(st.substring(st.length - 1));
// [6]
console.log(st.split('').splice(-1).join(''));
// [7]
console.log([...st][st.length - 1])

// win is win



// Needed Output
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"