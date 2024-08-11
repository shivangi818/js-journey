//node.event=()=>{
    //handle here
//  }

// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn was clicked");
//     let a =25;
//     a++;
//     console.log(a); //26
// }

let div= document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are on div")
}

//event obj:
// node.event=(e)=>{
//     //handle here
// }
// e.target, e.type,e.clientX,e.clientY
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//}

//event Listeners :
// node.assEvet(event,callback)
// node.removeEventListener(event,callback)
//node:the callback reference should be same to remove
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
    console.log("btn1 was clicked");
    
})
btn1.addEventListener("click", ()=>{
    console.log("btn1 was clicked-2");
})





