let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttons = document.querySelectorAll('.button');
const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        let playerSelection = button.getAttribute('value');
        playRound(playerSelection);
    })
})

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        resultElement.textContent = ('Tie Game! You both chose ' + playerSelection);
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        resultElement.textContent = ('Congratulations, you won! ' + playerSelection + ' beats ' + computerSelection);
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++;
        resultElement.textContent = ('Oh no, the computer won! ' + computerSelection + ' beats ' + playerSelection);
    }

    updateScores();

    if (playerScore === 5) {
        resultElement.textContent = ('You won! Refresh to play again');
        disableButtons();
    } else if (computerScore === 5) {
        resultElement.textConten = ('The computer won, better luck next time! Refresh to play again');
        disableButtons();
    }
}

function updateScores() {
    playerScoreElement.textContent = 'Player Score: ' + playerScore;
    computerScoreElement.textContent = 'Computer Score: ' + computerScore;
}