let computerSelection = ""

function rpsMatch(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;
  if (player == computer) {
    alert("It's a draw!");
    return 0;
  }
  if (player != "rock" && player != "paper" && player != "scissors") {
    alert("Player chose unvalid option! Please rock, paper, or scissors.");
    return 0;
  }
  if (player == "rock") {
      if (computer == "paper") {
        alert("You lose! Paper covers rock.");
        return -1;
      } else {
        alert("You win! Rock smashes scissors.");
        return 1;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        alert("You lose! Scissors cuts paper.");
        return -1;
      } else {
        alert("You win! Paper covers rock.")
        return 1;
      }
    } else {
      if (computer == "rock") {
        alert("You lose! Rock smashes scissors");
        return -1;
      } else {
        alert("You win! Scissors cuts paper.");
        return 1;
      }
    }
  }

function game() {
  let score = 0;
  let counter = 0;
  while (counter < 5) {
    score += rpsMatch(playerPlay(), computerPlay());
    counter++;
  }
  if (score > 0) {
    return "You won the game!"
  } else if (score < 0) {
    return "You lost the game. :("
  } else {
    return "It's a tie game."
  }
}

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

function computerPlay() {
  let play = getRandom(3);
  if (play == 0) {
    computerSelection = "rock";
  } else if (play == 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function playerPlay() {
  let play = prompt("Please pick rock, paper, or scissors", "");
  return play.toLowerCase().trim();
}
