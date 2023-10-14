const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = "Your choice: " + userChoice
    generateComputerChoice()
    getWinner()

}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()* 3) + 1
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Paper'
    }
    if(randomNumber === 3){
        computerChoice = 'Scissors'   
    }
    console.log(randomNumber + " and " + computerChoice)
    computerChoiceDisplay.innerHTML = "Computer's Choice: " + computerChoice
}

function getWinner(){
    if (computerChoice === userChoice){
        result = 'There is a tie!'
    }

    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You won!'
    }

    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'You lost!'
    }

    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You lost!'
    }

    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You won!'
    }

    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'You lost!'
    }

    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You won!'
    }
   
    resultDisplay.innerHTML = result
}




