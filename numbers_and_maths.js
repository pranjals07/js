const score = 400
console.log(score); //op is only 400

const balance = new Number(100)
console.log(balance); //op is [Number: 100]

console.log(balance.toString().length); //gives 3 as the op bcz 100 has 3 strings in it
console.log(balance.toFixed(2)); //gives op 10.00 till 2 decimal places chopping

const otherNum = 123.8966
console.log(otherNum.toPrecision(3)) //op is 124 rounds off the nnumber 

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //op is 1,000,000 inserts commas according to us standards
console.log(hundreds.toLocaleString('en-IN')) // now op is according to indian standards i.e. 10,00,000
// +++++++++++++++++++Maths+++++++++++++++++++++++++ 

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives a random number b/w 0 and 1 (included)
console.log(Math.random()*10 + 1); // gives a random number ranging from 1 to 10
console.log(Math.floor(Math.random()*10) + 1); // same as above but more formatted

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)

