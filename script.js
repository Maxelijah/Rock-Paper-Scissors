let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let round = 0;

const display = document.querySelector(".score-display");
const pick = document.querySelector(".picks");
const end = document.querySelector(".end");
const gameRound = document.querySelector(".round");
const winLose = document.querySelector(".winLose");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
  playGame("scissors");
});
rockBtn.addEventListener("click", () => {
  playGame("rock");
});
paperBtn.addEventListener("click", () => {
  playGame("paper");
});

function getComputerChoice() {
  randValue = Math.floor(Math.random() * 3 + 1);
  let selection;

  computerChoice =
    randValue === 1
      ? (selection = "rock")
      : randValue === 2
      ? (selection = "paper")
      : (selection = "scissors");
  return computerChoice;
}

function playRound(humanChoice) {
  end.textContent = "";
  computerChoice = getComputerChoice();
  computerChoiceStr = `Computer choice is ${getComputerChoice()}`;
  humanChoiceStr = `\nhuman choice is ${humanChoice} `;

  pick.textContent = ` ${computerChoiceStr} , ${humanChoiceStr}`;

  if (humanChoice === computerChoice) {
    winLose.textContent = `A FREAKING DRAW`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    winLose.textContent = `YOU WIN`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    winLose.textContent = " YOU WIN";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    winLose.textContent = " YOU WIN";
  } else {
    computerScore += 1;
    winLose.textContent = " YOU LOSE";
  }

  round += 1;
  gameRound.textContent = `ROUND ${round}`;
  display.textContent = `SCORE: YOU: ${humanScore} VS COMPUTER: ${computerScore}`;

  if (round > 5) {
    declareWinner();
    winLose.textContent = "";
    end.textContent = ` FINAL JUDGEMENT: ${declareWinner()}`;
    gameRound.textContent = `ROUND 5`;
    humanScore = 0;
    computerScore = 0;
    round = 0;
  }

  return { humanScore, computerScore, round };
}

function declareWinner() {
  if (humanScore > computerScore) {
    return "Congratulations you win !!!";
  } else if (humanScore < computerScore) {
    return "Sorry you lose !!!";
  } else {
    return "A freaking draw !!!";
  }
}

function playGame(humanChoice) {
  humanChoice = humanChoice;
  computerChoice = getComputerChoice();

  const result = playRound(humanChoice, computerChoice);
  humanScore = result.humanScore;
  computerScore = result.computerScore;
}
