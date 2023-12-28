// Primtive
// 7 types : string,null,number,undefined,boolean,ssymbol,BigINt{A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value}

// REFERENCE[Non Primitive]

//types - Arrray,Objects,Functions

const heros = ["Ironman","Hulk","Wonderwoman"]
console.log(typeof heros);


// +++++++++++++++++++++++++++++++++++++++++++++ MEMORIES +++++++++++++++++++++//

// stack[primitive],heap[non-primitive]


let mygithubname = "Ajaykhawse0"
let anothername= mygithubname
anothername = "someone"

console.log(mygithubname);
console.log(anothername);




let user1 = {
 email : "user1@google",
 upi : "user1@axl"
}

console.log(user1.email);

console.log(user1.upi);

let user2 = user1
user2.email = "user2@google"

console.log(user2);
