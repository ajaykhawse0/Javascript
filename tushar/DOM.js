// alert ("Pls look at this website!")
// window.location = 'https://www.youtube.com/';



// document.body.style.background = prompt("Enter a color")

// document.body.childNodes[1].innerText = prompt("")

// // document.body.childNodes[1].style.color = prompt("Enter color of text")

// let byid =  document.getElementById("#H")
// console.dir(byid);

// let firstel = document.querySelector("#H")

// console.dir(firstel);// 1st element
// let Allel = document.querySelectorAll("p")
// console.dir(Allel);//all element




function darkmode(){
  let element = document.body;
  
  let content = document.getElementById("DarkModeText");
  element.className="dark-mode";
  content.innerText= "Dark Mode Is ON ";
  }
  
  
 
function lightmode(){
  let element = document.body;
  
  let content = document.getElementById("DarkModeText");
  element.className="light-mode";
  content.innerText = "Dark Mode Is OFF ";
  } 
let h2 = document.querySelector("h2");

console.dir(h2.innerText); 
h2.innerText =h2.innerText + " From me"

let div = document.querySelector(".box")
// let divs = document.querySelectorAll(".box");
console.log(div);
// let i = 1 ;
// for (div of divs) {
//   div.innerText = `New value ${i}`;
// i++;
// }
// divs[0].innerText = "Ajay";
// divs[1].innerText = "Tushar";
// divs[2].innerText = "Paras";   

// let id = div.getAttribute('id')
// console.log(id);

// let name = div.getAttribute("class")
// console.log(name);

// let nae = div.setAttribute("id","Fox")
// console.log(nae);

// let j = document.querySelector("#j");
// console.log(j);
// j.style.background = prompt("Enter a color");
// j.style.color ="white";
// j.innerText="FF";
//-----------------------------------------------------------------------------------------------
let newbtn = document.createElement("Button")
newbtn.innerText = "Click me"
newbtn.style.background = "Red"
newbtn.style.color = "White"
document.querySelector("body").prepend(newbtn);

//________-------------------------------------------------------------------

let para = document.querySelector("p");
para.classList.add("newpara");
para.classList.add("newpara2");
para.classList.remove("newpara2");

