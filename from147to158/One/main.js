// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

class Car {
    constructor (name,model,price) {
    this.n = name;
    this.m = model;
    this.p = price;
    }
    run () {
        return `Car Is Running Now`
    }
    stop () {
        return `Car Is Stopped`
    }
}

let carOne = new Car("Mg","2022",420000);
let carTwo = new Car("toto","2025",450000);
let carThree = new Car("yaris","2014",200000);



console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And the price is ${carOne.p}`);
console.log(carOne.run());



// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"