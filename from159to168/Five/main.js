let dateOne = new Date();

for (i = 0 ; i < 100000 ; i++) {
    console.log(i);
}

let dateTwo = new Date();

let diff = dateTwo - dateOne;


console.log(`Loop Took ${diff} Millseconds`)


// Needed Output

// "Loop Took 1921 Milliseconds."