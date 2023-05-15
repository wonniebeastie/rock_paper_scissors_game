//#3

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      return 'ROCK';
    } else if (compChoice === 1) {
      return 'PAPER';
    } else {
      return 'SCISSORS';
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
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      return 'You win! Rock smashes Scissors!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
      return 'You win! Paper stifles Rock!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
      return 'You win! Scissors shred Paper!';
  
      // computer wins
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
      return 'You lose! Paper stifles Rock!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
      return 'You lose! Scissors shred Paper!';
    } else {
      return 'You lose! Rock smashes Scissors!';
    }
  }
  
  //#6
  
  function game() {
    //Round One
  
    let playerInput = prompt('Choose your fighter! Rock, Paper, or Scissors?');
    let playerChoice = playerInput.toUpperCase();
    let computerChoice = getComputerChoice();
  
    let playerScore = 0;
    let computerScore = 0;
  
    let gameResult;
  
    console.log('You Chose: ' + playerChoice);
    console.log('Computer Chose: ' + computerChoice);
  
    if (
      playerChoice === 'ROCK' ||
      playerChoice === 'PAPER' ||
      playerChoice === 'SCISSORS'
    ) {
      gameResult = playRound(playerChoice, computerChoice);
      console.log(gameResult);
    }
  
    if (gameResult.includes('You win!')) {
      let roundOnePlayerScore = (playerScore += 1);
      console.log('Your score: ' + roundOnePlayerScore);
      console.log('Computer score: ' + computerScore);
    } else if (gameResult.includes('You lose!')) {
      let roundOneComputerScore = (computerScore += 1);
      console.log('Your score: ' + playerScore);
      console.log('Computer score: ' + roundOneComputerScore);
    } else {
      console.log('Your score: ' + playerScore);
      console.log('Computer score: ' + computerScore);
    }
  
    console.clear();
  
  }
  
  console.log(game());
  