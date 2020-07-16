function computerPlay() {
    let picklist = ["rock", "paper", "scissors"];
    return picklist[0];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("Tie! No points For both");
        return "";
    }
    else if (playerSelection   == "rock" &&
         computerSelection == "paper") {
        console.log("Computer chose 'Paper': You loose.");
        return "computer";
    }
    else if (playerSelection   == "rock" &&
         computerSelection == "scissors") {
        console.log("Computer chose 'Scissors': This round goes to you!");
        return "player";
    }
    else if (playerSelection   == "paper" &&
             computerSelection == "rock") {
        console.log("Computer chose 'Rock': This round goes to you!");
        return "player";
    }
    else if (playerSelection   == "paper" &&
         computerSelection == "scissors") {
        console.log("Computer chose 'Scissors': You loose.");
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
         computerSelection == "rock") {
        console.log("Computer chose 'Rock': You loose.");
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
         computerSelection == "paper") {
        console.log("Computer chose 'Paper': This round goes to you!");
        return "player";
    }
    else {
        console.log("Error. This state should not happen\n" +
                "Player: {playerState}\n" +
                "Computer: {computerState}");
    }
}


let playerScore   = 0;
let computerScore = 0;
let computerSelection = computerPlay();
let roundWinner;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //alert(button.id);
    
        if      (button.id == 'rock')     roundWinner = playRound('rock', computerSelection);
        else if (button.id == 'paper')    roundWinner = playRound('paper', computerSelection);
        else if (button.id == 'scissors') roundWinner = playRound('scissors', computerSelection);
    });
});

if      (roundWinner == "player")   playerScore++;
else if (roundWinner == "computer") computerScore++;


console.log("You have won {playerScore} Rounds.");
console.log("The computer won {computerScore} Rounds.");
