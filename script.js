const humanScoreHolder=document.getElementById("human-score")
const humanChoiceHolder=document.getElementById("human-choice")

const computerScoreHolder=document.getElementById("computer-score")
const computerChoiceHolder=document.getElementById("computer-choice")

const gameInfo=document.getElementById("game-info")

const restartButton=document.getElementById("restart-button")

const userInput= document.querySelector(".user-input")


let humanScore=0;
let computerScore=0;
let choices=["rock", "paper" ,"scissors"]


const checkWinner = ()=>{
    if(humanScore==5||computerScore==5) {
        gameInfo.textContent= humanScore==5 ? "Player won!": "Computer won!"
        gameInfo.style.color= humanScore==5 ? "green" : "red"
        return;
    }
}

function playRound(pcChoice, humanChoice){
    
    if(pcChoice == humanChoice){
        gameInfo.textContent="Draw"
        humanChoiceHolder.textContent=`Player chose: ${humanChoice}`
        computerChoiceHolder.textContent=`Computer chose: ${pcChoice}`
    }
    else if(humanChoice=="rock" && pcChoice=="scissors" 
        || humanChoice=="paper" && pcChoice=="rock"
        || humanChoice=="scissors" && pcChoice=="paper"){

            gameInfo.textContent="Player won round."
            humanChoiceHolder.textContent=`Player chose: ${humanChoice}`
            computerChoiceHolder.textContent=`Computer chose: ${pcChoice}`
            humanScore++
            humanScoreHolder.textContent=humanScore
            checkWinner()
            
        }
    else{
        gameInfo.textContent="Computer won round."
        humanChoiceHolder.textContent=`Player chose: ${humanChoice}`
        computerChoiceHolder.textContent=`Computer chose: ${pcChoice}`
        computerScore++
        computerScoreHolder.textContent=computerScore
        checkWinner()
        
    }
}

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
}


userInput.addEventListener("click",(e)=>{
    const button = e.target.closest('button');
    if (!button) return; 

    const playerChoice = button.dataset.choice;
    if(humanScore==5||computerScore==5) {
        gameInfo.textContent= humanScore==5 ? "Player won!": "Computer won!"
        return;
    }
    playRound(getComputerChoice(),playerChoice)
})


restartButton.addEventListener("click",()=>{
    humanScore=0,computerScore=0
    humanScoreHolder.textContent=humanScore
    computerScoreHolder.textContent=computerScore

    gameInfo.textContent="X"
    gameInfo.style.color="black"

    humanChoiceHolder.textContent=`You chose:`
    computerChoiceHolder.textContent=`Computer chose:`
})