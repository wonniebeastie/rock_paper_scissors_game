
//#3


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else {
        return "scissors"
    }         
}


//#4 & 5 

// let a = "Rock"

// let b = "scissors"

// playRound(a, b)

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie! Try again.";

        //player wins

    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock smashes Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper stifles Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors shred Paper!";

        // computer wins

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper stifles Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors shred Paper!";
    } else {
        return "You lose! Rock smashes Scissors!";
    }
}



//#6 

function game() {
    let playerInput = prompt("Choose your fighter! Rock, Paper, or Scissors?");
    let playerChoice = playerInput.toLowerCase();
    let computerChoice = getComputerChoice();

    let playerScore = 0;
    let computerScore = 0;

    let gameResult;

    console.log (playerChoice);
    console.log (computerChoice);

    if (playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
      ) {
        gameResult = playRound(playerChoice, computerChoice);
        console.log (gameResult);
      }


    if (gameResult.includes("You win!")) {
        console.log ("Your score: " + ++playerScore);
        console.log ("Computer score: " + computerScore);
    } else if (gameResult.includes("You lose!")) {
        console.log ("Your score: " + playerScore);
        console.log ("Computer score: " + ++computerScore);
    } else {
        console.log ("Your score: " + playerScore);
        console.log ("Computer score: " + computerScore);
    }
}


console.log (game());

// Declare a function called game() {

// Create variable called playerInput that stores the answer to the prompt 
// "Choose your figher! Rock, Paper, or Scissors?";

// Create variable called playerChoice, that stores whatever got stored inside playerInput,
// but changed all to lowercase;

// Create variable called computerChoice, which will store the result of the function
// getComputerChoice();

// Create variable called playerScore storing "Player Score: " + 0 inside;

// Create variable called computerScore storing "Computer Score: " + 0 inside;

// Display the playerScore on the console;

// Display the computerScore on the console; 

// Display the result for playerChoice on the console;

// Display the result for computerChoice on the console;

// if what was stored inside playerChoice is identical to "rock", "paper", or "scissors",
// store the result of the function playRound() - with the parameters of the value for
// whatever is stored inside playerChoice, and whatever the result of getComputerChoice()
// was - inside ANOTHER variable called gameResult;

// return the string stored inside gameResult;

// if what is returned is "It's a tie!" just run the function playRound(playerChoice,
// computerChoice) again;

// if what is returned has "You win!" in it, then give 1 point to player;

// if what is returned has "You lose!" in it, then give 1 point to computer; 

// Keep running the function game() until 5 rounds have been won or lost;

// Announce final winner of the game. 

