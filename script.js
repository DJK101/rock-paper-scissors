let scores = { player: 0, computer: 0 };
let winner = "";

function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);

  switch (choiceIndex) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else {
    switch (playerChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          scores["player"] += 1;
          return "Player Wins!";
        } else {
          scores["computer"] += 1;
          return "Computer Wins!";
        }
      case "paper":
        if (computerChoice === "rock") {
          scores["player"] += 1;
          return "Player Wins!";
        } else {
          scores["computer"] += 1;
          return "Computer Wins!";
        }
      case "scissors":
        if (computerChoice === "paper") {
          scores["player"] += 1;
          return "Player Wins!";
        } else {
          scores["computer"] += 1;
          return "Computer Wins!";
        }
    }
  }
}

function playRound(playerChoice) {
  if (!winner) {
  document.getElementById("results").textContent = `${getResult(
    playerChoice,
    getComputerChoice()
  )} Player: ${scores["player"]} | Computer: ${scores["computer"]}`;
  }
  if (scores["player"] > 4) {
    winner = "Player Won The Game";
  } else if (scores["computer"] > 4) {
    winner = "Computer Won The Game";
    if (winner) {
      document.getElementById("results").textContent = winner;
    }
  }
}

function setup() {
  document
    .getElementById("rock")
    .addEventListener("click", () => playRound("rock"));
  document
    .getElementById("paper")
    .addEventListener("click", () => playRound("paper"));
  document
    .getElementById("scissors")
    .addEventListener("click", () => playRound("scissors"));
}

setup();
