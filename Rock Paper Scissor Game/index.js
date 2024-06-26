const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const getRandomComputerResult = () => {
    const options = ["Rock", "Paper", "Scissors"];

    return options[Math.floor(Math.random() * 3)];

}

let playerScore = 0;
let computerScore = 0;

const hasPlayerWonTheRound = (player, computer) => {

    
    if(player === "Rock" && computer === "Scissors") {
        return true
    } else if(player === "Scissors" && computer === "Paper") {
        return true
    } else if(player === "Paper" && computer === "Rock") {
        return true
    } else {
        return false
    }

    // return (
    //     (player === "Rock" && computer === "Scissors") || 
    //     (player === "Scissors" && computer === "Paper") || 
    //     (player === "paper" && computer === "Rock")
    // )

}

const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult();

    if(hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`
    } else if(userOption === computerResult){
        return `It's a tie! Both chose ${userOption}`
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}


const showResults = (userOption) => {

    roundResultsMsg.innerText = getRoundResults(userOption)
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    
    if(playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }

    // if(playerScore >= 3) {
    //     winnerMsgElement.innerText = "Player has won the game!"
    //     resetGameBtn.style.display = "block";
    //     optionsContainer.style.display = "none";
    // } else {
    //     winnerMsgElement.innerText = "Computer has won the game!"
    //     resetGameBtn.style.display = "block";
    //     optionsContainer.style.display = "none";
    // }

}

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = 0;
    computerScoreSpanElement.innerText = 0;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);


rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

// showResults("Rock");

// console.log(getRandomComputerResult())

// console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
// console.log(hasPlayerWonTheRound("Scissors", "Rock")); 

// console.log(getRoundResults("Rock"));
// console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

