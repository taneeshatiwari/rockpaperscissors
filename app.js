let compScore=0;
let userScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice==compChoice){
        msg.innerText="game was draw";
        msg.style.backgroundColor="blue";
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
            userWin=compChoice=="scissors"?true:false;
        }

        if(userChoice=="paper"){
            userWin=compChoice=="rock"?true:false;
            userWin=compChoice=="scissors"?false:true;
        }

        if(userChoice=="scissors"){
            userWin=compChoice=="rock"?false:true;
            userWin=compChoice=="paper"?true:false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})