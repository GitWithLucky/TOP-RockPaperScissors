const playerRock = document.getElementsByClassName('pic')[0],
    playerPaper = document.getElementsByClassName('pic')[1],
    playerScissors = document.getElementsByClassName('pic')[2],
    startBtn = document.querySelector('button');
let computerSelection, playerSelection, scoreCard, yourTotal, botTotal;


const yourScore = document.createElement("div");
let holderManScore = document.createElement("h2"),
    yourResult = document.createElement("h1");
holderManScore.appendChild(document.createTextNode("Your Score"));
yourScore.appendChild(holderManScore);
yourResult.appendChild(document.createTextNode(''));
yourScore.appendChild(yourResult);


const botScore = document.createElement("div");
let holderBotScore = document.createElement("h2"),
    botResult = document.createElement("h1");;
holderBotScore.appendChild(document.createTextNode("Bot's Score"));
botScore.appendChild(holderBotScore);
botResult.appendChild(document.createTextNode(''));
botScore.appendChild(botResult);

const resultSheet = document.createElement("div");
resultSheet.classList.add("result");
resultSheet.appendChild(yourScore);
resultSheet.appendChild(botScore);

const finalResult = document.createElement("h1");
finalResult.appendChild(document.createTextNode(''));

startBtn.addEventListener('click', (e) => {
    document.querySelector('.box').style.display = 'unset';
    e.target.style.display = 'none';
    e.target.textContent = 'RESTART';

    if (e.target.previousElementSibling.className == 'box') {
        document.body.insertBefore(resultSheet, e.target);
        document.body.insertBefore(finalResult, e.target);
    }
    botResult.textContent = 0;
    yourResult.textContent = 0;
    finalResult.textContent = ''

    playerRock.addEventListener('click', () => gamePlay('Rock'));

    playerPaper.addEventListener('click', () => gamePlay('Paper'));

    playerScissors.addEventListener('click', () => gamePlay('Scissors'));

});


const gamePlay = (choice) => {
    playerSelection = choice;
    computerSelection = computerPlay();
    scoreCard = playRound(computerSelection, playerSelection);
    updateScores(scoreCard, playerSelection, computerSelection);
};

const updateScores = (scoreCard, playerSelection, computerSelection) => {
    yourTotal = document.querySelector(".result").firstElementChild.lastElementChild;
    botTotal = document.querySelector(".result").lastElementChild.lastElementChild;

    if (scoreCard === 1) {
        yourTotal.textContent = parseInt(yourTotal.textContent) + 1;
        finalResult.textContent = `${playerSelection} defeats ${computerSelection}`;
    } else if (scoreCard === -1) {
        botTotal.textContent = parseInt(botTotal.textContent) + 1;
        finalResult.textContent = `${computerSelection} defeats ${playerSelection}`;
    } else {
        finalResult.textContent = `It's a tie. You both picked ${computerSelection}`;
    }

    if (parseInt(yourTotal.textContent) === 5) {
        finalResult.textContent = "Congrats! You have WON!!";
        endGame();
    } else if (parseInt(botTotal.textContent) === 5) {
        finalResult.textContent = "Uh Uh! You have LOST!!";
        endGame();
    }
};

const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const playRound = (computerSelection, playerSelection) => {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (computerSelection === "Rock") {
        if (playerSelection === "Paper") {
            return 1;
        } else {
            return -1;
        }
    } else if (computerSelection === "Paper") {
        if (playerSelection === "Scissors") {
            return 1;
        } else {
            return -1;
        }
    } else if (playerSelection === "Rock") {
        return 1;
    } else {
        return -1;
    }
};

const endGame = () => {
    startBtn.style.display = 'unset';
    document.querySelector('.box').style.display = 'none';
}