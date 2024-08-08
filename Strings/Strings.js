let str="Shivangi";
let str2='Shivangi';
//property
str.length
console.log(str[0],str[1]);

// template Literals
let specialString='This is a template literal';
console.log(typeof specialString)

// example
let obj ={
    item:"pen",
    price:10,

};
let output= `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of", obj.item,"is",obj.price);

//methods
let str3="hello"
console.log(str3.toUpperCase());

let str4="HELlo";
console.log(str4.toLowerCase());

let str5="     hi this is shivangi"
console.log(str.trim());

console.log(str.slice(1,4));
console.log(str.concat(str2));
console.log(str3.replace(l,s));
console.log(str3.charAt(2));
