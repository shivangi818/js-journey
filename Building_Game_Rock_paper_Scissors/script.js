let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
choices.forEach((choice)=>{
    

    const genCompChoice=()=>{
        //rock,paper,scissors
        const options=["rock","paper","scissors"]
        const randIdx=Math.floor(Math.random()*3) // 0-2 we can generate no. and use it at index for options
        //and if we use Math.floor() then we can generate a no without decimal value
        return options[randIdx];


    };

    const drawGame=()=>{
        msg.innerText="game was draw.Play again"
            msg.style.backgroundColor="orange"
      
    }

    const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText=`You Win Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green"
        }else{
            compScore++;
            compScorePara.innerText=compScore;
            msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`
            msg.style.backgroundColor="red"
            
        }

    }

    
    



    const playGame=(userChoice)=>{
        console.log("user choice =",userChoice);
        //Generate comp choice -> modular
        const compChoice=genCompChoice();
        console.log("comp choice=",compChoice);

        if(userChoice===compChoice){
            //Draw
            drawGame();
            
        }else{
            let userWin= true;
            if(userChoice==="rock"){
                //scissors,paper
                userWin=compChoice==="paper"?false:true;

            }else if(userChoice==="paper"){
                userWin=compChoice==="scissors"?false:true;
            }else{
                //comp=rock,paper
                //user=scissors
                compChoice==="rock"? false:true;
            }
            showWinner(userWin, userChoice, compChoice);
        }


    }


    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        
        playGame(userChoice)
    })
})