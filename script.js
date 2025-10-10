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