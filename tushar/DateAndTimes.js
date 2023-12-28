// Date

let MyDate = new Date ()
console.log(MyDate);
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toISOString());
console.log(MyDate.toLocaleString());
console.log(MyDate.toJSON());

console.log(typeof MyDate);// object


let CreatedDate = new Date(2023, 3 , 2)
console.log(CreatedDate);
console.log(CreatedDate.toString());

///+======++++++++++++++++++++++= TIMESTAMPS+++++++++++++?//

let myTimeStamp = Date.now()
console.log(myTimeStamp);// value here are in millisecond
console.log(CreatedDate.getTime());// value here are in millisecond
console.log(Math.floor(Date.now()/1000));// value here are in second

console.log(MyDate);
console.log(MyDate.getMonth());
console.log(MyDate.getYear());
console.log(MyDate.getDay());

