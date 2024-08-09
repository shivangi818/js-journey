//sumFunction
function sum(a,b){
    return a+b;
}

//Multiplication
function mul(a,b){
    return a*b;
}
// by using arrow function we can write above codes like:
// const functionName=(param1,param2...)=>{
//do some work
//}
const arrowSum=(a,b) => {
    console.log(a+b);
}

// const arrowMult=(q,r){
//     console.log(a*b);
// }