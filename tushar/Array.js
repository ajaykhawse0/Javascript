// Array
// DEFINATION - The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations

//In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies)



const Arr = [0,1,2,3,4,5,6]
const myHeros = ["shaktiman", "Ironman",9]
const Arr2 = new Array(1,2,3,4)

console.log(Arr[1]);
console.log(Arr2[0]);
console.log(typeof myHeros[2]);
console.log(typeof myHeros[0]);
console.log(typeof myHeros[1]);
console.log(myHeros);


///========== Array Methods ===============///

 Arr.push(7)// to add anythig in an array
console.log(Arr);
Arr.pop()// IT REMOVES THE LAST ELEMENT

console.log(Arr);

Arr.unshift(8)
Arr.shift()// it will remove the first element
console.log(Arr);

console.log(Arr.includes(5));// it  will give answer in boolean value
console.log(Arr.indexOf(2));

const newArr = Arr.join()
console.log(Arr);
console.log(newArr);

// Slice , splice

console.log("A",Arr);

const mynewArr1 = Arr.slice(1,4)
console.log(mynewArr1);
console.log("B",Arr);


const mynewArr2 = Arr.splice(1,4) // it manipulates original array
console.log(mynewArr2);
console.log("C",Arr);

////////////////////////////////////////////////////////////////////////////////

const Marvel_Heros = [ "THOR" , "IRONMAN", "SPIDERMAN"]
const dc_Heros  = ["SUPERMAN","FLASH","BATMAN"]// if you push an array into other array then the value of pushed  is considered only as one element of array //

Marvel_Heros.push(dc_Heros)
console.log(Marvel_Heros);
console.log(Marvel_Heros[3]);
console.log(Marvel_Heros[3][2]);

const Allheros =Marvel_Heros.concat(dc_Heros)// BY MDN DOCS- The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(Allheros);

const heros = [...Marvel_Heros, ...dc_Heros] // we prefer this in plae of concat beacause we can add more then two arrays in it
console.log(heros);

const AnotherArr = [ 1,2.3,4,[5,6,7],7,[8,[9,10],11],12]
const realanotherArr = AnotherArr.flat(Infinity)
console.log(realanotherArr);


console.log(Array.isArray("Ajay"));// this is to check whether the given dat is array or not
console.log(Array.from("Ajay")); // This function onverts verything into array

console.log(Array.from({name : "Ajay"})); // Intresting case for interview

let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2));

//The Array.isArray() static method determines whether the passed value is an Array.
//The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object
