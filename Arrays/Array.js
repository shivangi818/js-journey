//Approach 1
//  let mark_std1=98;
//  let mark_std2=90;
//  let mark_std3=75;
//  let mark_std4=80;
//  let mark_std5=35;

// Approach 2
// let marks={
//     stu:98,
//     stu2:65,
// }

//Approach 3
let marks=[98,65,78,90];
console.log(marks);
console.log(marks.length); //property=gives value

console.log(marks[3]);
marks[3]=88
console.log(marks[3]);

//Strings are immutable in js
//arrays are mutable in js

//looping over an array- print all elements of an array

//using for loop
for(let idx=0;idx<marks.length;idx++){
    console.log(marks[idx]);
}

//using for-of loop
for(let el of marks){
    console.log(el);
}

 