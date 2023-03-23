function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);
  let output;

  switch (choiceIndex) {
    case 0:
      output = "Rock";
      break;
    case 1:
      output = "Paper";
      break;
    default:
      output = "Scissors";
  }

  return output;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else {
    switch (playerChoice) {
      case "Rock":
        if (computerChoice === "Scissors") {
          return "Player Wins!";
        } else {
          return "Computer Wins!";
        }
      case "Paper":
        if (computerChoice === "Rock") {
          return "Player Wins!";
        } else {
          return "Computer Wins!";
        }
      case "Scissors":
        if (computerChoice === "Paper") {
          return "Player Wins!";
        } else {
          return "Computer Wins!";
        }
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Please choose Rock Paper or Scissors: ");
    const computerChoice = getComputerChoice();
    const result =
      playRound(playerChoice, computerChoice) +
      " Player chose: " +
      playerChoice +
      " | Computer chose: " +
      computerChoice;
    console.log(result);
  }
}

game();
