let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let inputHuman = prompt("choose rock, paper or scissors").toLowerCase();
    console.log(inputHuman)
    return inputHuman;
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 6) + 1;

    if (randomChoice === 1 || randomChoice === 4) {
        console.log("rock")
    } else if (randomChoice === 2 || randomChoice === 5) {
        console.log("paper")
    } else {
        console.log("scissors")
    }
}