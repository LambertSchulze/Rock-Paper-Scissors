function computerPlay() {
    let picklist = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * Math.floor(3));
    return picklist[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        message.textContent = "Tie! No points For both";
        return "";
    }
    else if (playerSelection   == "rock" &&
        computerSelection == "paper") {
        message.textContent = "Computer chose " + String.fromCodePoint(0x270B) + ": You loose.";
        return "computer";
    }
    else if (playerSelection   == "rock" &&
        computerSelection == "scissors") {
        message.textContent = "Computer chose " + String.fromCodePoint(0x270C) + ": This round goes to you!";
        return "player";
    }
    else if (playerSelection   == "paper" &&
        computerSelection == "rock") {
        message.textContent = "Computer chose " + String.fromCodePoint(0x270A) + ": This round goes to you!";
        return "player";
    }
    else if (playerSelection   == "paper" &&
        computerSelection == "scissors") {
        message.textContent = "Computer chose " + String.fromCodePoint(0x270C) + ": You loose.";
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
        computerSelection == "rock") {
        message.textContent = "Computer chose " + String.fromCodePoint(0x270A) + ": You loose.";
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
        computerSelection == "paper") {
        message.textContent = "Computer chose " + String.fromCodePoint(0x270B) + ": This round goes to you!";
        return "player";
    }
    else {
        message.textContent = "Error. This state should not happen\n";
    }
}

function givePoints(roundWinner) {
    if      (roundWinner == "player")   playerScore++;
    else if (roundWinner == "computer") computerScore++;
    
    score.textContent = "Player-Computer: "+playerScore.toString()+"-"+computerScore.toString();
}

function declareWinnerAndStartNewGame(Winner) {
    message.textContent = Winner + " won the game!";
    playerScore = 0;
    computerScore = 0;
}

const buttons = document.querySelectorAll('button');
const message = document.querySelector('#message');
const score =   document.querySelector('#score');

let playerScore   = 0;
let computerScore = 0;
let computerSelection;
let roundWinner;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerSelection = computerPlay();

        if      (button.id == 'rock')     roundWinner = playRound('rock', computerSelection);
        else if (button.id == 'paper')    roundWinner = playRound('paper', computerSelection);
        else if (button.id == 'scissors') roundWinner = playRound('scissors', computerSelection);

        givePoints(roundWinner);

        if      (computerScore == 5)    declareWinnerAndStartNewGame("Computer");
        else if (playerScore == 5)      declareWinnerAndStartNewGame("Computer");
    });
});

