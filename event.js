let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("hello! i am a button.");
}

let btn_1 = document.querySelector("#btn1");
btn_1.onclick = () => {
    alert("hello!");          // only this func. will execute coz it is over writing the above function 
}

// if we write event on js like above 
// then we cannot perform multiple task in an event.
// to resolve this we use addEventListener
// this can perform multiple task in one event 

//code written in js file will get higher priority than inline codes 

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() => {
    console.log("hello! i am a button.");
});

let btn = document.querySelector("#btn2");
btn.addEventListener("click",() => {               // both the func. will execute
    alert("hello!");
});

let newBtn1 = document.createElement("button");
newBtn1.innerText = "change mode";

btn.after(newBtn1);

newBtn1.addEventListener("click",() => {
    console.log("change mode button");
})

let mode = "light";

newBtn1.addEventListener("click",() => {
    if(mode=="light"){
        mode = "dark";
        let body = document.querySelector("body");
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        mode = "light";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }

    console.log(mode);

});




 