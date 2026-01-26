let start = 10;
let end = 0;
let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

for (i = start; i > end; i--) {
    if (i < start) {
        console.log(`${end}${i}`);
    }else {
        console.log(String(i));
    }
    if (i === 3) {
        break;
    }
}