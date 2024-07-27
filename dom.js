let ele = document.querySelector("h2");
console.dir(ele.innerText);

ele.innerText = ele.innerText + " from apna college students.";
console.log(ele.innerText);



let div = document.querySelectorAll(".box");
console.dir(div.innerText);

// div[0].innerText = "this is div first.";
// div[1].innerText = "this is div second.";
// div[2].innerText = "this is div third.";


for( let i = 0; i<div.length; i++){
    div[i].innerText = `this is div ${i}`;
}


let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body_ele = document.querySelector("body");
body_ele.prepend(newBtn);

let para = document.querySelector("p");
para.getAttribute("class");
para.classList.add("newClass");

