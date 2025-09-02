function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 6) + 1;

    if (randomChoice === 1 || randomChoice === 4) {
        console.log("Rock")
    } else if (randomChoice === 2 || randomChoice === 5) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}