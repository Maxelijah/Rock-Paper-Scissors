console.log("hello")

/* 
play the game 5 times and declare the winner at the end 
Secondly I want to make the score continous each time

*/
let humanScore= 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  randValue = Math.floor(( Math.random() * 3 ) + 1);
  let selection;

  randValue === 1 ? selection = "rock"  : randValue === 2 ? selection = "paper" : selection = "scissors"
return selection;
}

function getHumanChoice() {
    humanValue = prompt("Please pick Rock , Paper or Scissors");
    console.log(humanValue.toLowerCase())
    return humanValue.toLowerCase();
    
}



function playRound(humanChoice, computerChoice , humanScore , computerScore) {
console.log(`Computer choice is ${computerChoice}`);
console.log(`human choice is ${humanChoice}`);

if(humanChoice === computerChoice) {
    console.log(`A freaking draw`)
    console.log(`Your score :${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    }

else if (humanChoice === "rock" && computerChoice ==="scissors") {
    console.log ( "You win!")
    humanScore +=1;
    console.log(`Your score :${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

else if ( humanChoice === "paper" && computerChoice ==="rock" ) {
    console.log ( "You win!")
        humanScore +=1;
    console.log(`Your score :${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

else if ( humanChoice === "scissors" && computerChoice ==="paper" ) {
    console.log ( "You win!")
        humanScore +=1;
    console.log(`Your score :${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
     }

    

else {console.log("You lose !")
    computerScore +=1;
    console.log(`Your score :${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

}

return { humanScore, computerScore };

}

function declareWinner() {
    if (humanScore > computerScore) {
        console.log ("Congratulations you win !!!")
    }

    else if (humanScore < computerScore) {
        console.log ("Sorry you lose !!!")
    }

    else {console.log("A freaking draw !!!")}
}

function playGame() {
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

const result = playRound(humanChoice , computerChoice , humanScore , computerScore)
humanScore = result.humanScore;
computerScore = result.computerScore;

}



while (round < 5) {
playGame()

round +=1
console.log(round)
}

if (round = 5 ) {
    declareWinner()
}
