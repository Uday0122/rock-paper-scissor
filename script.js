console.log("script loaded");
const buttons = document.querySelectorAll('.buttons button');
const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const restartButton = document.getElementById('restart');
let playerscore = 0;
let computerscore = 0;
let gameOver = false;
buttons.forEach(button => {
    button.addEventListener('click', () => {
            if (gameOver) {
                resultElement.textContent = "Game is over! Please restart the game.";
                return;
            }
        const result =playRound(button.id, computerplay());
        document.getElementById('result').textContent = result;
      
        
    });
});

function computerplay(){
    const choices = ["rock","paper","scissors"];
    const randomchoice = choices[Math.floor(Math.random() * choices.length)];
    return randomchoice;
}
function playRound(playerSelection, computerSelection){
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper"))
            {
                playerscore++;
                playerScoreElement.textContent = playerscore;
                if(playerscore >= 5){
                    gameOver = true;
                    return "Congratulations! You won the game!";
                }
                 return "You win! " + playerSelection + " beats " + computerSelection;
        }
    else{
            computerscore++;
            computerScoreElement.textContent = computerscore; 
            if(computerscore === 5){
                gameOver = true;
                return "Sorry! You lost the game!";
            }  
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } 
} 
restartButton.addEventListener('click', () => {
    playerscore = 0;
    computerscore = 0;
    gameOver = false;
    playerScoreElement.textContent = playerscore;
    computerScoreElement.textContent = computerscore;
    resultElement.textContent = " game reset! Play again!";
});

