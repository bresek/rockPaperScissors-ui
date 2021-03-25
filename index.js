// check if script is conncted
console.log("Script connected!")

//define moves for game
let moves = ["rock", "paper", "scissors"]

function randomNumber() {
  return Math.floor(Math.random() * moves.length)
}



function computerPlay() {
  randMove = randomNumber()
  move = moves[randMove]
  return move
}

//rock beats scissors
//paper beats rock
//scissors beat paper

function playRound(playerSelection, computerSelection) {
  //process inputs to account for case
  playerSelection.toLowerCase()
  computerSelection.toLowerCase()

  //logic to decide who wins
  if (playerSelection === computerSelection) {
    return "tie"
  } else{
    if (playerSelection === "rock"){//handle rock
      if (computerSelection === "paper"){
        return "lose"
      }else{
        return "win"
      }
    }else if(playerSelection === "paper"){
      if (computerSelection ==="rock"){
        return "win"
      }else{
        return "lose"
      }
    }else{
      if(computerSelection === "paper"){
        return "win"
      }else{
        return "lose"
      }
    }
  }

}

function game(rounds){
  playerScore = 0;
  computerScore = 0;
  for (let i=0; i < rounds; i++){
    playerMove = prompt("rock, paper, or scissors?")
    computerMove = computerPlay()
    result = playRound(playerMove, computerMove)
    console.log(result + "! computer's move was " + computerMove)
    if (result === "win"){
      playerScore = playerScore + 1
    }else if(result ="lose"){
      computerScore = computerScore + 1
    }
  }
  if (playerScore > computerScore){
    return "You win the game! Score was:" + playerScore + "to" + computerScore
  }else if (playerScore < computerScore) {
    return "You lose the game! Score was:" + playerScore + "to" + computerScore
  }else{
    return "tie! Score was:" + playerScore + "to" + computerScore
  }
}
