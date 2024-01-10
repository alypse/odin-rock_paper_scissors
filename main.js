const game = () => {
    let pScore = 0;
    let cScore = 0;

    document.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
            playRound(button.id,getComputerChoice());
        })
    });

    const getComputerChoice = () => {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * (choices.length));
        return choices[randomIndex];
    }

    function playRound(playerSelection, computerSelection) {
        const roundResult = document.querySelector(".resultsView");
        const playerScoreboard = document.querySelector(".playerScore");
        const computerScoreboard = document.querySelector(".computerScore");
        const gameStatus = document.querySelector(".selectionsView");
        getComputerChoice();

        if (playerSelection === computerSelection) {
            roundResult.textContent =`Tie! You and the computer both chose ${playerSelection}!`;
        }

        else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Rock")) {
            pScore++;
            playerScoreboard.textContent = `${pScore}`;
            roundResult.textContent = `You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
        }

        else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
            (playerSelection === "Scissors" && computerSelection === "Rock") ||
            (playerSelection === "Paper" && computerSelection === "Scissors")) {
            cScore++;
            computerScoreboard.textContent = `${cScore}`;
            roundResult.textContent = `You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
        }
        // Provide logging for arguments outside of the scope of the if statements. ie; case, types, etc.
        else roundResult.textContent = `No match, something has gone terribly wrong! You: ${playerSelection}, Computer: ${computerSelection}`;
    }
}

game();








// Logic for a match
// for (let rounds = 0; (pScore < 3 && cScore < 3); rounds++) {
//     // let playerSelection = playerChoice
//     let computerSelection = getComputerChoice()
//     console.log(playRound(playerSelection, computerSelection)); // Log the return of playRound
//
//     if (pScore === 3) {
//         console.log("You win, groovy!");
//         break;
//     }
//     if (cScore === 3) {
//         console.log("Computer wins, you suck!");
//         break;
//     }
//     if (rounds === 20) {
//         console.log("You've been playing for 20 rounds, let's call this a tie..")
//         break;
//     }
// }





