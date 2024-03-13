// let fullname= prompt("Enter a name without spaces");
// let username = "@"+fullname+fullname.length
// console.log(username);

// let browsername = prompt("ENTER YOUR BROWSER NAME")
// const browserType = browsername;

// if (browserType.includes("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

// const browserType = browsername;

// if (browserType.startsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

let marks = [5,6,7,8,9,10];
// let  r = marks.sort();
// console.log(typeof marks);
// console.log(r);
// console.log(marks.length);
// console.log(marks.sort());
// strings are immutable while arrays are mutable

///////////////////////////
//Lopping over array


////////////////////////////////////////////////////////////////////
///Given marks of the stuidents of a class find the avg marks
    

let markS = [80,67,89,45,93,78];

let sum =0;
for (let val of markS) {
 sum = sum +val   
};
console.log(sum);
let avg = sum/markS.length;
console.log(`The average marks of class =${avg}`);
console.log(markS.length);


///////////////////////////////////////////////////////////////////////////
// here is given an arraybon which we have to aplly a offer using loops


 let rateofitems =[300,459,890,780,345,564];
  rateofitems = rateofitems.sort();
  console.log(rateofitems);

  for(i=0;i<rateofitems.length;i++)
  {
    let offer = rateofitems[i]/10;
    rateofitems[i]-=offer
  }
  console.log(rateofitems);
////////////////////////////////////////////////

let heros = ["Ironman", "Shaktiman","Batman"];
heros=heros.push("Spider-Man","Captain America");
console.log(heros);
