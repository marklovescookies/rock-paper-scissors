const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    var choice = choices[Math.floor(Math.random()* 3)];
    console.log(choice);
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
    return "Tie";
    }
        else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock") 
        ){
            return "Player";
        }
        else {
            return "Computer";
        }
}

function playRound(playerSelection, computerSelection){
   const result = checkWinner(playerSelection, computerSelection);
   if (result == "Tie"){
    return "Its a Tie";
   }
   else if (result == "Player"){
    return `You win! ${playerSelection} beats ${computerSelection}`
   }
   else {
    return `You lose! ${playerSelection} beats ${computerSelection}`
   }
}   

function getPlayerChoice(){
    let validChoice = false;
    while (validChoice == false){
       const choice = prompt("Rock Paper or Scissors");
    if (choice == null){
        continue; 
    }
    const caseChoice = choice.toLowerCase();  
    if (choices.includes(caseChoice)){
        validChoice = true;
        return caseChoice;
    }
    }
}

function game(){
    console.log("welcome");
    let userScore = 0;
    let computerScore = 0;    
    for (i=0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection == "Player")){
            userScore ++;  
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore ++ ;
        }
    }
    console.log("game over");
    if (userScore > computerScore){
        console.log("user has won");
    }
    else if (userScore < computerScore){
        console.log("user has lost");
    }
    else {
        console.log ("tie");
    }
}
game();