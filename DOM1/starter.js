//<style> tag connects HTML with CSS
//<script> tag connects HTML with JS
//Why so as above ?
//readability
//modular
//browser caching

console.dir(document.body);

//Dom Manipulation:
//Selection with Id :
//document.getElementById("myId")
let heading=document.getElementById("heading"); //h1
console.dir(heading);

//Selecting with Class:
//document.getElementByClassName("myClass")
let headings=document.getElementsByClassName("heading-class");
console.dir(headings)


//Selecting with Tag:
let paras=document.getElementsByTagName("p")
console.dir(paras);

//Query Selector:
// document.querySelector("myId/myClass/tag") //returns first element

let frstelements=document.querySelector("p")
console.dir(frstelements);//1st element

// document.querySelectorAll("myId/myClass/tag")
let allEl=document.querySelectorAll("p");//all element
console.dir(allEl);

//Properties:(get, set, change, update):

// tagName:returns tag for element nodes
let tagName=frstelements.tagName
console.dir(tagName);

// innerText:returns the text content of the elemet and all its children 
console.dir(document.body.firstChild)
let div=document.querySelector("div");
console.dir(div)

// innerHTML : returns the plain text or HTML contents in the Element.

//TextContent :returns textual content even for hidden elements