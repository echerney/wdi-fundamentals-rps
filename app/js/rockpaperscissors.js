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

function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return getInput();
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return randomPlay();
}

var playerMove = "null";
var computerMove = "null";
var playerWins = [];
var computerWins = [];
var ties = [];

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if ((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'scissors' && computerMove == 'paper') || (playerMove == 'paper' && computerMove == 'rock' )){
        playerWins.push("player");
    } else if ((computerMove == 'rock' && playerMove == 'scissors') || (computerMove == 'scissors' && playerMove == 'paper') || (computerMove == 'paper' && playerMove == 'rock' )) {
        computerWins.push("computer");
    } else {
        ties.push("tie");
    }
}

function playToFive() {
    while(computerWins.length < 2 && playerWins.length < 2) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        getWinner(playerMove, computerMove);
        //console.log(computerWins);
       // console.log(playerWins);
    }
    if (computerWins.length == 2) {
        console.log("Computer wins this round!");
    } else if (playerWins.length == 2) {
        console.log("Player wins this round!");
    } else {
        console.log("Something screwed up.");
    }
}

playToFive();

