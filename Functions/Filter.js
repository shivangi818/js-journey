//Creates new array of elemnts that give true for conditions/filter.


//eg: all even elemnts:
//let newArr=arr.filter((val)=>{
   // return val%2===0;
//})

let arr=[2,3,5,6];
let even_arr=arr.filter((val)=>{
    return val%2===0;
});
console.log(even_arr);