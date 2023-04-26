
//#3 odin

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }         
}


//#4 & 5 odin 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log (playerSelection);
    computerSelection = computerSelection.toLowerCase();
    console.log (computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
}

let computerSelection = getComputerChoice();

console.log (playRound("roCK", computerSelection));