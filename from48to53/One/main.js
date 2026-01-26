let start = 10;
let end = 100;
let exclude = 40;

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
for (i = start;i < end + start; i += 10) {
    if(i === exclude) {
        continue;
    }
    console.log(i);
}