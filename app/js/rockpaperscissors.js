////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    var x = move || getInput();
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return x /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    var x = move || randomPlay();
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return x /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    if (playerMove === computerMove){
        return "It's a tie.";
    }else if (playerMove === "rock"){
        if (computerMove === "scissors"){return "Player wins"} else { if (computerMove === "paper") {return "Computer wins"}}
    } else if (playerMove === "scissors") {
        if (computerMove === "paper"){return "Player wins"} else { if (computerMove === "rock") {return "Computer wins"}}
    }else if (playerMove === "paper"){
        if (computerMove === "rock"){return "Player wins"} else { if (computerMove === "scissors") {return "Computer wins"}
    }}
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0; 
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var computerMove = getComputerMove();
    var playerMove = getPlayerMove();
    var winner = getWinner();
    for (var x = 1; x <=5; x++){
        if(winner === "Player wins"){return playerWins += 1;}
    else if (winner === "Computer wins"){ return computerWins += 1;}
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
        return console.log("The score is currently " + playerWins + " to " + computerWins + '.')}

    return [playerWins, computerWins];
}

