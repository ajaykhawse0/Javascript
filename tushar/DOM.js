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
