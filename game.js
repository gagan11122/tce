const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const result = getGameResult(playerChoice, computerChoice);

  resultDiv.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}. Result: ${result}`;
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getGameResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}