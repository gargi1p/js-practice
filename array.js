//practice ques_1

let arr=[56,52,45,58,84];

let sum=0;

// for (let i of arr){ 
//   sum=sum+i;
// }

for (let i=0; i<arr.length; i++){
    sum=sum+arr[i];
}

console.log(sum);

console.log(sum/arr.length);



//practice ques_2

let price=[100,569,256,452,200];

for(let i=0; i<price.length; i++){

   let offer=price[i]/10;
   let offer_price = price[i]-offer;

   console.log(offer_price);
}



//arrow function

const mul= (a,b) => {
    return a*b;
};

console.log(mul(5,6));


//practice ques_3

function vowel_count(str){
    let count=0;
    for (let i = 0; i<str.length; i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            count++;
        }
    }
    console.log(count);
}

vowel_count("gargisingh");


//using arrow function

const vowel=(str) => {
    let count=0;
    for (let i = 0; i<str.length; i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            count++;
        }
    }
    console.log(count);
};

vowel('gargi');


//forEach loop

let array=[1,2,3];

const num= (val) => {
    console.log(val*val);
};

array.forEach(num);




