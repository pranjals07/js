// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 24) // here 0 means jan 
// console.log(myCreatedDate.toDateString());
// let  formatedDate = new Date('2025-02-15')
// console.log(formatedDate.toLocaleString());

let moredate = new Date('01-13-2025')
console.log(moredate);
console.log(moredate.getMonth() + 1) //getMonth start counting from 0 so for starting from 1 we add an extra 1
console.log(moredate.getDay()); //gives day starts from 1 as monday and so on

moredate.toLocaleString('default',{
    weekday: 'Long',
    year: '2-digit',
    month: 'short',
})