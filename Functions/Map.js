// arr.map(callbackFnx(value,index,array))

//print all elemnts
let num=[1,4,7];
num.map((val)=>{
    console.log(val)

})

//make new array using map
let newArr=num.map((val)=>{
    return val
})
console.log(newArr);

//twice
let newarr=num.map((val)=>{
    return val*2
})
console.log(newarr);