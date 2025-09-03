let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let inputHuman = prompt("choose rock, paper or scissors").toLowerCase();
    return inputHuman;
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 6) + 1;

    if (randomChoice === 1 || randomChoice === 4) {
        return "rock"
    } else if (randomChoice === 2 || randomChoice === 5) {
        return "paper"
    } else {
        return "scissors"
    }
}