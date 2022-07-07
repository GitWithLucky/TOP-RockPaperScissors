"use strict"

const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];    
};

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You win! Paper beats Rock"
        } else {
            return "Bot wins! Rock beats Scissors"
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return "You win! Scissors beats Paper"
        } else {
            return "Bot wins! Paper beats Rock"
        }
    } else if (playerSelection === "rock") {
        return "You win! Rock beats Scissors"
    } else {
        return "Bot wins! Scissors beats Paper"
    }
};

const game = () => {
    let yourScore = 0;
    let botScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Choose between Rock,Paper,Scissors");
        let computerSelection = computerPlay();
        console.log(computerSelection); //TBR
        let result = playRound(playerSelection,computerSelection);
        console.log(result);  
        if (result[0] === 'Y') {
            ++yourScore;
            console.log("Your Score: ", yourScore, "Bot Score: ", botScore);
        } else {
            ++botScore;
            console.log("Your Score: ", yourScore, "Bot Score: ", botScore);
        }
    }

    if (botScore > yourScore) {
        console.log("Bot wins");
    } else {
        console.log("You win")
    }
}


game()