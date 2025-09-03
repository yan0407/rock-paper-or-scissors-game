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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`empate`)
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You wont! ${humanChoice} beats ${computerChoice}`)
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}.`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)