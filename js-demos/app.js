console.log(`Welcome to MEAN Stack ${10 + 20}`); // es6
console.log('Welcome to MEAN Stack');

var res1 = 0;
const res2 = 90 // es6
let res3 = 50 // es6

function calc(num1, num2) { // normal functions
    return num1 + num2
}

console.log(calc(10, 20))

const calc2 = (num1 , num2) => num1 + num2 // es6 fat arrows
console.log(calc2(10, 10))