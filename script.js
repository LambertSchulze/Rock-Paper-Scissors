function computerPlay() {
    let picklist = ["rock", "paper", "scissors"];
    return picklist[0];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        message.textContent = "Tie! No points For both";
        return "";
    }
    else if (playerSelection   == "rock" &&
        computerSelection == "paper") {
        message.textContent = "Computer chose 'Paper': You loose.";
        return "computer";
    }
    else if (playerSelection   == "rock" &&
        computerSelection == "scissors") {
        message.textContent = "Computer chose 'Scissors': This round goes to you!";
        return "player";
    }
    else if (playerSelection   == "paper" &&
        computerSelection == "rock") {
        message.textContent = "Computer chose 'Rock': This round goes to you!";
        return "player";
    }
    else if (playerSelection   == "paper" &&
        computerSelection == "scissors") {
        message.textContent = "Computer chose 'Scissors': You loose.";
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
        computerSelection == "rock") {
        message.textContent = "Computer chose 'Rock': You loose.";
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
        computerSelection == "paper") {
        message.textContent = "Computer chose 'Paper': This round goes to you!";
        return "player";
    }
    else {
        message.textContent = "Error. This state should not happen\n";
    }
}
const message = document.querySelector('#message');
const score =   document.querySelector('#score');

score.textContent = "Player-Computer: 0-0";


let playerScore   = 0;
let computerScore = 0;
let computerSelection = computerPlay();
let roundWinner;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {    
        if      (button.id == 'rock')     roundWinner = playRound('rock', computerSelection);
        else if (button.id == 'paper')    roundWinner = playRound('paper', computerSelection);
        else if (button.id == 'scissors') roundWinner = playRound('scissors', computerSelection);

        if      (roundWinner == "player")   playerScore++;
        else if (roundWinner == "computer") computerScore++;
    
        score.textContent = "Player-Computer: "+playerScore.toString()+"-"+computerScore.toString();
    });
});

