console.log(a);
var a=6;

//console.log(b);
let b=7;

let ob1={age:33};
let ob2=ob1;
ob2.age=22;
console.log(ob1.age);

function sum(a,b){
    console.log(a+b);
}
sum(2,3);

const sum2=(a,b,c)=>{
    return a+b+c;
}   
console.log(sum2(2,3,4));

const mull=(a,b)=>a*b;

const square=a=>a*a;

const print=(n)=>{
    let s=square(n);
    console.log("Square is:");
    console.log(s);
}
print(6);


console.log("First");
Promise.resolve().then(console.log("From Promise"));
setTimeout(()=>console.log("From setTimeout"),2000);
console.log("Last");