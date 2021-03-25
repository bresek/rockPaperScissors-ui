// check if script is conncted
console.log("Script connected!")


let cScore = 0;
let uScore = 0;



// elements to manipulate
userScore = document.querySelector("#uScore")
compScore = document.querySelector("#cScore")
title = document.querySelector('#title')
compMove = document.querySelector('.lastMove')

//make butons interactive


const buttons = document.querySelectorAll("button")
console.log(buttons)

buttons.forEach((button) =>{
  button.addEventListener("click",() =>{
    let compPlay = computerPlay()
    round = (playRound(button.id, compPlay))
    console.log(round)
    if (round == 'win'){
      uScore ++
      userScore.textContent = uScore
    }else if (round =='lose'){
      cScore ++
      compScore.textContent = cScore
    }
    compMove.textContent = "Computer's last move"
    if (compPlay === "paper"){
      compMove.textContent += "\n 📃"
    }else if (compPlay === "scissors"){
      compMove.textContent += "\n ✂️"
    }else{
      compMove.textContent +="\n 🗿"
    }



    if (uScore === 5){
      title.textContent = '🥳You win!🎈'
      title.classList.add('gameEnd')
    }else if (cScore === 5){
      title.textContent = "😔You lose!😔"
      title.classList.add('gameEnd')
    }


  })// end click function
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
