let computerScore = 0;
let playerScore = 0;
let round = 0;

function reset() {
	computerScore = 0;
	playerScore = 0;
	round = 0;
	document.getElementById("round").textContent = round;
	document.getElementById("com-score").textContent = computerScore;
	document.getElementById("player-score").textContent = playerScore;
	document.getElementById("final-result").textContent = "";
	document.getElementById("outcome").textContent = "";
	start.style.cssText = "display: none";
	buttons.forEach(button => {
		button.style.cssText = "display: inline-block";
	});
}

const start = document.querySelector("#start");
start.addEventListener("click", reset);

const buttons = document.querySelectorAll("button:not(#start)");
buttons.forEach(button => {
	button.addEventListener("click", e => {
		let winner = playRound(button.id, computerPlay());
		updateScoreboard(winner);
		if (round === 5) {
			checkWinner();
			start.style.cssText = "display: inline";
			buttons.forEach(button => {
				button.style.cssText = "display: none";
			});
		}
	});
});

function checkWinner() {
	let choices;
	if (playerScore > computerScore) {
		choices = "You win the game! :D";
	} else if (playerScore < computerScore) {
		choices = "The computer wins the game :(";
	} else {
		choices = "It's a tie!";
	}
	document.getElementById("final-result").textContent = choices;
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
	document.getElementById("com").textContent =
		computer.charAt(0).toUpperCase() + computer.slice(1);
	document.getElementById("player").textContent =
		player.charAt(0).toUpperCase() + player.slice(1);
	round += 1;
	if (player == computer) {
		document.getElementById("outcome").textContent = "It's a Draw!";
		return;
	}
	if (player == "rock") {
		if (computer == "paper") {
			document.getElementById("outcome").textContent =
				"Round lost! Paper covers rock.";
			computerScore += 1;
			return "com-score";
		} else {
			document.getElementById("outcome").textContent =
				"Round won! Rock smashes scissors.";
			playerScore += 1;
			return "player-score";
		}
	} else if (player == "paper") {
		if (computer == "scissors") {
			document.getElementById("outcome").textContent =
				"Round lost! Scissors cuts paper.";
			computerScore += 1;
			return "com-score";
		} else {
			document.getElementById("outcome").textContent =
				"Round won! Paper covers rock.";
			playerScore += 1;
			return "player-score";
		}
	} else {
		if (computer == "rock") {
			document.getElementById("outcome").textContent =
				"Round lost! Rock smashes scissors";
			computerScore += 1;
			return "com-score";
		} else {
			document.getElementById("outcome").textContent =
				"Round won! Scissors cuts paper.";
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
