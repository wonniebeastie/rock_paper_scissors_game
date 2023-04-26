
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

        //player wins

    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock smashes Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper stifles Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors shred Paper!"

        // computer wins

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper stifles Rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors shred Paper!"
    } else {
        return "You lose! Rock smashes Scissors!"
    }

    //let displayMessage = `You ${}! ${} beats ${}!`
}

let computerSelection = getComputerChoice();

console.log (playRound("SciSsors", computerSelection));