// arr.forEach(callBackFunction)
//CallbackFunction: here, it is a function to execute for each element in the array 
// for each is a method
function abc(){
    console.log("hello");
}

function myfun(abc){
    return abc;
}

let arr=[1,2,3,4,5,6];
arr.forEach(function printVal(val){  //each value at each index
console.log(val);

})