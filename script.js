let humanScore=0;
let computerScore=0;
let choices=["rock", "paper" ,"scissors"]

function playRound(getComputerChoice, getHumanChoice){
    const pcChoice= getComputerChoice()
    const humanChoice= getHumanChoice()
    
    if(humanChoice===undefined) console.log("Invalid input. Automatic loss of the round.");
    
    if(pcChoice == humanChoice){
        console.log("Draw");
        console.log(`${humanScore}:${computerScore}`);
    }
    else if(humanChoice=="rock" && pcChoice=="scissors" 
        || humanChoice=="paper" && pcChoice=="rock"
        || humanChoice=="scissors" && pcChoice=="paper"){
            console.log(`You win. ${humanChoice} beats ${pcChoice}.`)
            humanScore++
            console.log(`${humanScore}:${computerScore}`);
        }
    else{
         console.log(`You lose. ${pcChoice} beats ${humanChoice}.`)
         
         computerScore++
         console.log(`${humanScore}:${computerScore}`);
            }
}


function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
}

function getHumanChoice(){
    let choice= prompt("Rock, Paper or Scissors:")
    if (!choice) return undefined;
    choice=choice.toLowerCase()
    if(choices.includes(choice)) return choice;
}

for(let x=0;x<5;x++){
    playRound(getComputerChoice,getHumanChoice)
    if(x==4){
        if(humanScore>computerScore){
            console.log(`You won the game. ${humanScore}:${computerScore}` );
        }
        else if(humanScore<computerScore){
            console.log(`You lost the game. ${humanScore}:${computerScore}` );
        }
        else{
            console.log(`The game is a draw. ${humanScore}:${computerScore}`);
            
        }
    }
}
