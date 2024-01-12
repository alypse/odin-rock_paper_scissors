const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Add event listener to each button and initialise a round
    document.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
            playRound(button.id, getComputerChoice());
        })
    })

    // Manage the match state
    function matchTracker(playOutcome,playerSelection,computerSelection) {
        const roundResult = document.querySelector(".resultsView");
        const playerHand = document.querySelector(".playerChoice");
        const computerHand = document.querySelector(".computerChoice");
        const playerScoreboard = document.querySelector(".playerScore");
        const computerScoreboard = document.querySelector(".computerScore");
        const gameStatus = document.querySelector(".selectionsView");

        if (playOutcome === "tie") {
            playerHand.src = `/assets/${playerSelection}.png`;
            computerHand.src = `/assets/${computerSelection}.png`;
            roundResult.textContent = `Tie! You and the computer both chose ${playerSelection}!`;
        }
        if (playOutcome === "computer_win") {
            computerScoreboard.textContent = `${cScore}`;
            playerHand.src = `/assets/${playerSelection}.png`;
            computerHand.src = `/assets/${computerSelection}.png`;
            roundResult.textContent = `You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            if (cScore >= 5) {
                gameStatus.textContent = "Computer wins the game!"
            }
        }
        if (playOutcome === "player_win") {
            playerScoreboard.textContent = `${pScore}`;
            playerHand.src = `/assets/${playerSelection}.png`;
            computerHand.src = `/assets/${computerSelection}.png`;
            roundResult.textContent = `You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            if (pScore >= 5) {
                gameStatus.textContent = "You win the game!"
            }
        }
        if (playOutcome === "error") {
            roundResult.textContent = `Error! You: ${playerSelection}, Computer: ${computerSelection}`;
        }
    }

    // Get a random selection for the computer's hand
    const getComputerChoice = () => {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * (choices.length));
        return choices[randomIndex];
    }

    // Play a single round and determine the winner. Pass the outcome to the match function
    function playRound(playerSelection, computerSelection) {
        getComputerChoice();

            if (playerSelection === computerSelection) {
                matchTracker("tie",playerSelection,computerSelection);
            } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Rock")) {
                pScore++;
                matchTracker("player_win",playerSelection,computerSelection);
            } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Scissors" && computerSelection === "Rock") ||
                (playerSelection === "Paper" && computerSelection === "Scissors")) {
                cScore++;
                matchTracker("computer_win",playerSelection,computerSelection);
            } else matchTracker("error",playerSelection,computerSelection);
        }
}

game();















