
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
};


//#4 & 5 odin 

function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt("Choose your fighter! Rock, Paper, Scissors?");
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log (playRound())

//console.log (playRound(playerSelection, computerSelection));