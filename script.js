function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);
  let output;

  console.log(choiceIndex);

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

function play(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else {
    switch (playerChoice) {
      case "Rock":
        if (computerChoice === "Scissors") {
          return "Player Wins!";
        } else {
          return "Computer Wins";
        }
      case "Paper":
        if (computerChoice === "Rock") {
          return "Player Wins!";
        } else {
          return "Computer Wins";
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

const result = play("Paper", "Scissors");
console.log(result);