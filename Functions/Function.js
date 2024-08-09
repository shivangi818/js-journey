// console.log("hello!");
// "abc".toUpperCase()
// "xyz".toUpperCase

// [1,2,3].push(4);


//Function Defination:
// function functionName(){ 
       //do some work
//}

// function functionName(param1,param2...){
//do some work
//}

//Function Cell:
//functionName();

function myFunction(){
    console.log("I am Shivangi Sahay");
    console.log("I am learning js");
}
myFunction(); //1 time print
myFunction(); //2 time print
myFunction(); //3 time print

function yourFunction(msg){ //parameter->input
    console.log(msg);
}
yourFunction("I love Js"); //argument

//to add
function sum(a,b){ //local variables->Scope
    console.log(a+b);
}
sum(4,2)

//to add using return
function sumFun(x,y){
    s=x+y;
    return s;
}
let val=sumFun(3,4);
console.log(val);

//to learn:
//fun param are like local var of fun . -> kahan tk zinda rehte h func ke block tak zinda rehte hai

