//Attributes:
//getAttribute(attr) to get the attribute value
let div= document.querySelector("div");
console.log(div);
let id=div.getAttribute("id")
console.log(id)
let name=div.getAttribute("name")
console.log(name)
let para= document.querySelector("p");
console.log(para.getAttribute("class"))

//setAttribute(attr,value) to set the attribute val th
let paras= document.querySelector("p");
console.log(paras.setAttribute("class","new Class"))

//Style:
//node.style
let divs= document.querySelector("div")
divs.style.backgroundcolor="green";

//Insert Elements:
// let el = document.createElement("div")
let newBtn=document.createElement("button");
newBtn.innerText="Click Me"
console.log(newBtn);
//node.append(el) adds at the end of node (inside)
let divi=document.querySelector("div");
divi.append(newBtn);
// node.preappend(el) adds at the start of node (inside);
let divis=document.querySelector("div");
divis.append(newBtn);
// node.before(el) adds before the Node(outside)
let divu=document.querySelector("div");
divu.before(newBtn);
// node.after(el) adds after the node(outside)
let divus=document.querySelector("div");
divus.after(newBtn);
//Delete Elements:
// Node.remove() to removes the node

