let num1 = 9;
let str = 9;
let str2 = 9;

if (num1 == str) {
    console.log(`num1 is the same value as str`)
    if (num1 !== str) {
        console.log(`num1 is the same value as str but not the same type`)
    } 
} 
if (num1 != str2 && typeof(num1) != typeof(str2)) {
    console.log(`num1 is not the same value or the same type as str2`)
}
if (typeof(str) == typeof(str2) && str != str2) {
    console.log(`str is the same type as str2 but not the same value`)
}

// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

