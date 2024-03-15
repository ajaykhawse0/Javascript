///////////////////////////////////////////////////////////

let marksofstudent = [89,93,96,78,42,90,92];

let markswith90plus = marksofstudent.filter((val)=>{
    return val >= 90;
})
console.log(markswith90plus);
///////////////////////////////////////////////////////

let n = prompt("Enter a number");
let arr =[];

for (i=1;i<=n;i++){

   arr [i-1]=i; 
}
console.log(arr);

let arr1 = (arr.reduce((prev, curr) => {
        return prev + curr;
    }));
console.log(arr1);

const arr2 = (arr.reduce((prev, curr) => {
    return prev * curr;
}));
console.log(arr2);

