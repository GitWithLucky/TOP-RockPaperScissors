"use strict"

const playerRock = document.getElementsByClassName('pic')[0];
const playerPaper = document.getElementsByClassName('pic')[1];
const playerScissors = document.getElementsByClassName('pic')[2];
const startBtn = document.querySelector('button');
let computerSelection; let playerSelection; let score; let yourTotal; let botTotal;


const yourScore = document.createElement("div");
let holderMan = document.createElement("h2");
holderMan.appendChild(document.createTextNode("Your Score"));
yourScore.appendChild(holderMan);
let yourResult = document.createElement("h1");
yourResult.appendChild(document.createTextNode(0));
yourScore.appendChild(yourResult);


const botScore = document.createElement("div");
let holderBot = document.createElement("h2");
holderBot.appendChild(document.createTextNode("Bot's Score"));
botScore.appendChild(holderBot);
let botResult = document.createElement("h1");
botResult.appendChild(document.createTextNode(0));
botScore.appendChild(botResult);

startBtn.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    document.querySelector(".human").prepend(yourScore);
    document.querySelector(".bot").prepend(botScore);


    playerRock.addEventListener('click', () => {
        playerSelection = 'Rock';
        computerSelection = computerPlay();
        e.target.classList.add('image-click');
        setTimeout(() => e.target.classList.remove('image-click'),200);
        score = playRound(computerSelection, playerSelection);
        updateScores(score, playerSelection, computerSelection);
    });

    playerPaper.addEventListener('click', () => {
        playerSelection = 'Rock';
        computerSelection = computerPlay();
        e.target.classList.add('image-click');
        setTimeout(() => e.target.classList.remove('image-click'),200);
        score = playRound(computerSelection, playerSelection);
        updateScores(score, playerSelection, computerSelection);
    });

    playerScissors.addEventListener('click', () => {
        playerSelection = 'Scissors';
        computerSelection = computerPlay();
        e.target.classList.add('image-click');
        setTimeout(() => e.target.classList.remove('image-click'),200);
        score = playRound(computerSelection, playerSelection);
        updateScores(score, playerSelection, computerSelection)
    });

});

const updateScores = (score, playerSelection, computerSelection) => {
    yourTotal = document.querySelector('.box').previousElementSibling.lastElementChild;
    botTotal = document.querySelectorAll('.box')[1].previousElementSibling.lastElementChild;
    const finalResult = document.createElement("h1");
    finalResult.appendChild(document.createTextNode(''));

    if (score === 1) {
       yourTotal.textContent = parseInt(yourTotal.textContent) + 1;
       finalResult.replaceChild(document.createTextNode(`${playerSelection} defeats ${computerSelection}`),finalResult.lastChild);   
    } else if (score === -1) {
        botTotal.textContent = parseInt(botTotal.textContent) + 1;
        finalResult.replaceChild(document.createTextNode(`${computerSelection} defeats ${playerSelection}`),finalResult.lastChild);
    } else {
        finalResult.replaceChild(document.createTextNode(`It's a tie. You both picked ${computerSelection}`), finalResult.lastChild);
    }
    document.body.replaceChild(finalResult, document.body.lastChild);

    if (yourTotal.textContent == 5) {
        finalResult.replaceChild(document.createTextNode("Congrats! You have WON!!"), finalResult.lastChild);
        document.body.replaceChild(finalResult, document.body.lastChild);
        endGame();
    } else if (botTotal.textContent == 5) {
        finalResult.replaceChild(document.createTextNode("Uh Uh! You have LOST!!"), finalResult.lastChild);
        document.body.replaceChild(finalResult, document.body.lastChild);
        endGame();
    }
};

const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];    
};

const playRound = (computerSelection,playerSelection) => {
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
    
}