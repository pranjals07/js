// Two types of data types: primitive and reference(non primitive)
// Primitive 7 types: string number boolean null undefined BigInt symbol

// const id = symbol('123');
// const id1 = symbol('123');
// console.log(id === id1); //op is false
//symbols are unique and immutable; symbols are not iterable; not converted into strings and numbers

//Reference 3 types: array objects functions
// const heros = ["thor", "ironman", "spiderman"]; //array
// let myObj = {
//     name: "pranjal",
//     age: 21,
// }

// const myFunc = function(){
//     console.log("hello people");
// }
// datatype of null is object
// all reference types have datatype object function gives op functionas datatype but it is function object
//+++++++++++++++++++++++++++++++++Types of memory+++++++++++++++++++++++++++++++++++++++++++
// stack: stores primitive data type values
// heap: stores reference data type values
let myName = "pranjalsharma"
let anotherName = myName
anotherName = "yashikasharma"
console.log(myName);
console.log(anotherName);