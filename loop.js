//practice ques_1

for (let i=0; i<=100; i++){
   
    if(i%2 == 0){
       console.log(i);
       
    }else{}
 }
 

 //practice ques_2

 let guess_no=25;

 let input = prompt("guess any no.");

 while(guess_no != input){

    input = prompt("you've guessed wrong no. , guess once again");
    
 }

console.log("you have guessed right no.");


//practice ques_3

let name=prompt("enter your name(character only)");

let username=`@${name}${name.length}`;
console.log("username: ",username);
