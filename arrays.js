const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]); //gives element at 0th position

// myArr.push(7) //inserts 7 in the end of array
// myArr.pop() //removes the last element from the array

// myArr.unshift(9) //inserts 9 in the starting of the array
// myArr.shift() //removes first element from the start of the array

// console.log(myArr.includes(9)) //checks if element is present or not
// console.log(myArr.indexOf(10)) //10 is not present so op is -1

// console.log(myArr.slice(1,3)) //prints elements at 1 to 2 index 3 is not included
// console.log(myArr.splice(1,3)) // it deleted the elements from 1 to 3 ,3 is included
// console.log(myArr) // now the array will not include 1,2,3

const marvel = ['ironman', 'batman']
const dc = ['superman', 'spiderman']
const bee = marvel.push(dc) // array inside an array 
console.log(bee)
const hive = marvel.concat(dc) // merges the two arrays
console.log(hive)
