// Create a list of possible choices with type string
// Randomly select one of the choices
//     Using math random, select one choice from the list
//     Return the selected choice
// ----


// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection
// and computerSelection - and then return a string that declares the winner
// of the round like so: "You Lose! Paper beats Rock"
//
// Make your function’s playerSelection parameter case-insensitive
// (so users can input rock, ROCK, RocK or any other variation).
// Account for TIES by re-playing the round.

const CHOICES = ["Rock", "Paper", "Scissors"];
let pScore = 0
let cScore = 0

function getComputerChoice(arr) {
    arr = CHOICES

    // get a random index value
    const randomIndex = Math.floor((Math.random() * (arr.length +1)));

    // return the item at the random index
    return arr[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection) {
        return(`Tie! You and the computer both chose ${playerSelection}!`);
        // todo: Need to update to replay the game ONCE as well as reporting the tie
    }

    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        pScore++;
        return(`You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`);
    }

    else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Rock") ||
        (playerSelection === "Paper" && computerSelection === "Scissors")) {
        cScore++;
        return(`You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}`);
    }

    else return ("No match, something has gone terribly wrong! Computer chose");
}


for (let rounds = 0; (pScore < 3 && cScore < 3); rounds++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));
    if (pScore === 3) {
        console.log("You win, groovy!");
        break;
    }
    if (cScore === 3) {
        console.log("Computer wins, you suck!");
        break;
    }
    if (rounds === 20) {
        console.log("You've been playing for 20 rounds, let's call this a tie..")
        break;
    }
}