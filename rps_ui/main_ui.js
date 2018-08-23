let computerScore = 0;
let playerScore = 0;
let round = 0;

function reset() {
    computerScore = 0;
    playerScore = 0;
    round = 0;
    document.getElementById('round').textContent = round;
    document.getElementById('com-score').textContent = computerScore;
    document.getElementById('player-score').textContent = playerScore;

    start.style.cssText = 'display: none';
    buttons.forEach((button) => {
        button.style.cssText = 'display: inline';
    });
}

const start = document.querySelector('#start');
start.addEventListener('click', reset);

const buttons = document.querySelectorAll('button:not(#start)');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let winner = playRound(button.id, computerPlay());
        updateScoreboard(winner);
        if (round === 5) {
            checkWinner()
            start.style.cssText = 'display: inline';
            buttons.forEach((button) => {
                button.style.cssText = 'display: none';
            });
        };
    });
});

function checkWinner() {
    let choices = playerScore > computerScore ? "You win! :D" : "The Computer wins :(";
    document.getElementById("winner").textContent = choices;
}

function updateScoreboard(winner) {
    document.getElementById("round").textContent = round;
    if (winner === "player-score") {
        document.getElementById("player-score").textContent = playerScore;
    } else {
        document.getElementById("com-score").textContent = computerScore;
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    document.getElementById("com").textContent = computer;
    document.getElementById("player").textContent = player;
    round += 1;
    if (player == computer) {
        document.getElementById("choices").textContent = "It's a Draw!";
        return;
    }
    if (player == "rock") {
        if (computer == "paper") {
          document.getElementById("choices").textContent = "You lose! Paper covers rock.";
          computerScore += 1;
          return "com-score";
        } else {
          document.getElementById("choices").textContent = "You win! Rock smashes scissors.";
          playerScore += 1;
          return "player-score";
        }
      } else if (player == "paper") {
        if (computer == "scissors") {
          document.getElementById("choices").textContent = "You lose! Scissors cuts paper.";
          computerScore += 1;
          return "com-score";
        } else {
          document.getElementById("choices").textContent = "You win! Paper covers rock."
          playerScore += 1;
          return "player-score";
        }
      } else {
        if (computer == "rock") {
          document.getElementById("choices").textContent = "You lose! Rock smashes scissors";
          computerScore += 1;
          return "com-score";
        } else {
          document.getElementById("choices").textContent = "You win! Scissors cuts paper.";
          playerScore += 1;
          return "player-score";
        }
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
