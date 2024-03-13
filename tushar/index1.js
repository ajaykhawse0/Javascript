// let number = prompt("Enter a number:")
// if (number%5===0) {
//     answer="Is Divisible By 5"
//     console.log(answer);
// }
// else{answer="Is Not Divisible By 5"
// console.log(answer);
// }

// let score = prompt("Enter a Score 0-100");

// if (score>=80 && score<=100) {
//     Grade="A" 
    
// }

// else if (score>=70&&score<=79) {
// Grade="B"
    
// }

// else if (score>=60&&score<=69) {
//     Grade="C"
       
// }

// else if (score>=50&&score<=59) {
//     Grade="D"
        
// }

// else{
//     Grade="F"
    
// }
    
// console.log("According to your score your Grade is :",Grade);



// loop example
// for( let i=1;i<=5;i++)
// {
//     console.log("Ajay");
// }
// console.log("Loop is ended");

// // Loop forsumof no. from 1 to 5

// let sum =0;

// for(let j=1; j<=5;j++){
// sum = sum+j;
// }
// console.log(sum)


// let k = 1;
// while (k<=6) {
// console.log(k)
// k++    
// }

// let u = 8;
// do {
//     console.log("Ajay");
//     u++;
// } while (u<=20);

// for of loop
// let even ;
// for(let t=0;t<=100;t++){
//     if (t%2 === 0) {

//         console.log("even",t)
        
//     }
//     else{
//         console.log("odd",t)
//     }

// }


///practice q 2

let gamenumber = 18;

let usernum=prompt("Enter a Game Number:")

while (usernum!=gamenumber) {
    usernum=prompt("OOPS! You Have Entered A wrong Number , Enter  New Number:");
}
console.log("Congratulations! You Have a Entered A Right Number");


let str1 = "ajay   "  ;
let str2 = `Khawse`;
str1=str1.trim()
str3 = str1.concat(str2)
str1=str1.toUpperCase();
str2=str2.toLowerCase();

console.log(str1);
console.log(typeof str1);
console.log(str1.length);
console.log(str1[0],str1[1]);
console.log(typeof str2);
console.log(`My Name is ${str1} ${str2}`);
console.log(str3);
