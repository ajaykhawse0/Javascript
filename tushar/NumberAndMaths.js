const score = 350

console.log(score)
console.log( typeof score)

const Balance =  new Number (3900)
console.log(Balance)
console.log(typeof Balance);

console.log(Balance.toString().length);
console.log(Balance.toFixed(2));

const otherNumber = 246.789

console.log(otherNumber.toPrecision(4));
const hundreds = 10000000
console.log(hundreds.toLocaleString()) // in this function it will return the value according to us number system
console.log(hundreds.toLocaleString('en-IN'))// in this it will return the value according to indian no. system

 //+++++++++++++++++++ Maths +++++++++++++++++//

 console.log(Math);
 console.log(Math.abs(-4));// only negative coverts in positive
 console.log(Math.round(4.6));// will round of the number
 console.log(Math.ceil(4.6));// it will the abovvalue only
 console.log(Math.floor(4.6));// it will give the below no.

 console.log (Math.min(2,3,4,5,6));
 console.log (Math.max(2,3,4,5,6));

 console.log(Math.random());// always gives value between 0 and 1
 console.log((Math.random()*10) + 1);


 console.log(Math.floor(Math.random()*10) + 1);



