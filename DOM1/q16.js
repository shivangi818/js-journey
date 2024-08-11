// let divs= document.querySelectorAll(".box");
// // console.dir(divs)
// divs[0].innerText="new Unique value 1";
// divs[1].innerText="new Unique value 2";
// divs[2].innerText="new Unique value 3";

//by using js loops
let divs= document.querySelectorAll(".box");
idx=1
for(div of divs){
    div.innerText=`new Unique value ${idx}`
    idx++;
}
