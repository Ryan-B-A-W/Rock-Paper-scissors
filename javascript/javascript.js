let playerScore = 0
let CPUScore = 0
let roundsPlayed = 0
let gameChoices = [`rock`, `paper`, `scissors`]

function getComputerChoice(){
    let CPUselection = Math.floor((Math.random() * 10) % 3)
    console.log(`CPU SELECTION TEST - ` + gameChoices[CPUselection])
    return gameChoices[CPUselection]
}

function getPlayerChoice(i = false){
    while (i != true){
        let playerChoice = prompt(`Please enter your're choice: `)
        playerChoice = playerChoice.toLowerCase()
        if (gameChoices.includes(playerChoice) == true){
            console.log(`USER SELECTION TEST - ` + playerChoice)
            i = true
            return playerChoice
        } else {
            console.log(`USER SELECTION TEST - ` + playerChoice)
            console.log(`You have input ${playerChoice} what is an invalid choice, please type Rock, Paper or Scissors`)
        }

    }
}

function playRound(playerSelection,computerSelection){
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()
    if (playerSelection == computerSelection){
        console.log(`Draw! Player selected ${playerSelection} & the computer selected ${computerSelection}`)
    }
}

playRound()
