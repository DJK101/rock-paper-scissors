function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);

  switch (choiceIndex) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
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
      "\nPlayer chose: " +
      playerChoice +
      "\nComputer chose: " +
      computerChoice;
    alert(result)
  }
}

game();
