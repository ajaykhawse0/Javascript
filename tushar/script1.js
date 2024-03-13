let marvelheros =["Spiderman","Antman","Deadpool"];
let dcheros = ["Aquaman","Batman","Superman"];
heros = marvelheros.concat(dcheros);

console.log(heros);
console.log(heros.slice(0,3));
dcheros.splice(0,2,"GreenArrow")
console.log(dcheros);1

let FAANG = ["Facebook","Apple","Amazon","Netflix","Google"]
// FAANG.shift()
FAANG.splice(0,1,"Ola")
FAANG.push("Uber")
console.log(FAANG);
