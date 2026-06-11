function checkRange(n1, n2, n3, n4, n5) {
    if (Math.min(n1,n2,n3) >= Math.min(n4,n5) && Math.max(n1,n2,n3) <= Math.max(n4,n5)) {
        return 'Yes ,All Numbers In Range';
    }else {
        return 'Not All Numbers In Range'
    }
}

console.log(checkRange(5, 10, 15, 5, 50));
console.log(checkRange(8, 4, 20, 2, 50));
console.log(checkRange(10, 15, 20, 5, 18));