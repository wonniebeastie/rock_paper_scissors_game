
//#3 odin

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "ROCK";
    } else if (compChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS"
    }         
};


//#4 & 5 odin 

function playRound(playerSelection, computerSelection) {
    //1
    //player chooses rock paper or scissors
    //maybe convert to uppercase later?
    

}

console.log (playRound())


//const playerSelection = "rock";
const computerSelection = getComputerChoice();


//console.log (playRound(playerSelection, computerSelection));