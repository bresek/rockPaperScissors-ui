// check if script is conncted
console.log("Script connected!")


let cScore = 0;
let uScore = 0;



// elements to manipulate
userScore = document.querySelector("#uScore")
compScore = document.querySelector("#cScore")

//make butons interactive


const buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach((button) =>{
  button.addEventListener("click",() =>{
    round = (playRound(button.id, computerPlay()))
    console.log(round)
    if (round == 'win'){
      uScore ++
      userScore.textContent = uScore
    }else if (round =='lose'){
      cScore ++
      compScore.textContent = cScore
    }

  })
})

// Results display section



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
