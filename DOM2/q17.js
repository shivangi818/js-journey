// Create a new button element . Give it a text "click me" , background color of red and text color of white.

// insert the button as the first element inside the body tag

let button= document.querySelector("button");
button.innerText="Click me"
button.style.backgroundColor="red";
button.style.color="white"
document.querySelector("body").prepend(button);
