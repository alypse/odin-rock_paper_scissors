const game = () => {
    let pScore = 0;
    let cScore = 0;

    document.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
        playRound(button.id, getComputerChoice());
        })
    })

    const getComputerChoice = () => {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * (choices.length));
        return choices[randomIndex];
    }

    function playRound(playerSelection, computerSelection) {
        const roundResult = document.querySelector(".resultsView");
        const playerHand = document.querySelector(".playerChoice");
        const computerHand = document.querySelector(".computerChoice");
        const playerScoreboard = document.querySelector(".playerScore");
        const computerScoreboard = document.querySelector(".computerScore");
        const gameStatus = document.querySelector(".selectionsView");
        getComputerChoice();

        if (playerSelection === computerSelection) {
            playerHand.src = `/assets/${playerSelection}.png`;
            computerHand.src = `/assets/${computerSelection}.png`;
            roundResult.textContent = `Tie! You and the computer both chose ${playerSelection}!`;
        } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Rock")) {
            pScore++;
            playerScoreboard.textContent = `${pScore}`;
            playerHand.src = `/assets/${playerSelection}.png`;
            computerHand.src = `/assets/${computerSelection}.png`;
            roundResult.textContent = `You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
        } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
            (playerSelection === "Scissors" && computerSelection === "Rock") ||
            (playerSelection === "Paper" && computerSelection === "Scissors")) {
            cScore++;
            computerScoreboard.textContent = `${cScore}`;
            playerHand.src = `/assets/${playerSelection}.png`;
            computerHand.src = `/assets/${computerSelection}.png`;
            roundResult.textContent = `You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
        } else roundResult.textContent = `Error! You: ${playerSelection}, Computer: ${computerSelection}`;
    }
}

game();















