function saymyname(params) {
    console.log("Ajay Khawse");
    console.log("I am learning Javascript");
};
saymyname();
// function message(msg) {
//   console.log(msg);  
// }
// message()

function sumoftwonumber(n,m){
    console.log(`sum of two  numbers is ${n+m}`);

}
sumoftwonumber(3,4)



function multiply(n,m){
    into = n*m
    return into
}


let mul = multiply(9,6);
console.log(mul);



//  Arrow functions 

// const add = (x,y)=>{
//     console.log(x+y);
// };
const add = (x,y)=>{
    return x+y;
};

//

// function CountVowels(str){
//     let count = 0;
//     for (const char of str) {
//         if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"
//         || char==="A" || char==="E" || char==="I" || char==="O" || char==="U") {

//     count++;  
//  }
//  }
//  return count ;
// }
const CountVowels = (str)=>{
    let no_ofvowels=0;
    for (const char of str) {
 if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"
|| char==="A" || char==="E" || char==="I" || char==="O" || char==="U") {
    
    no_ofvowels++;
    
 }  

    }
    
    return no_ofvowels; 
}


let cities = ["Bhopal","betul","multai"]

cities.forEach((val,idx,cities)=>{
console.log(val.toUpperCase(),idx,cities);
})



let num = [2,3,4,5,6,7]



num.forEach((val=>
    {console.log(val**2)}
    )
    )
console.log(num);

let newnum = num.map((val)=>{
    return val*val*val;
    
})
console.log(newnum);


let no_ = [2,4,6,45,8,22,10,11]
let evenno_ = no_.filter((val)=>{
    return val%2 ===0;
})
let oddno_ = no_.filter((val)=>{
    return val%2 !==0;
})
console.log(evenno_);
console.log(oddno_);

let Arr = [2,3,4,5,6,10]

const sumofArr = Arr.reduce((previous,current)=> 
{ return previous+current})

console.log(sumofArr);

const greatestnoinArr = Arr.reduce((previous,current)=>
{return previous>current?previous: current;})

console.log(greatestnoinArr);
