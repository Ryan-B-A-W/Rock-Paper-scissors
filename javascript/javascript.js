let computerScore = 0
let playerScore = 0
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
    computerSelection = getComputerChoice()
    playerSelection = getPlayerChoice()
    if (playerSelection == computerSelection){
        console.log(`Draw! player selected ${playerSelection} & the computer selected ${computerSelection}`)
        return 0
    } else {
        let gameDecision = gameChoices.indexOf(playerSelection) + gameChoices.indexOf(computerSelection)
        console.log(gameDecision)
        switch (gameDecision){
            case 1:
                if (playerSelection == `paper`){
                    console.log(`Player wins! player selected ${playerSelection} & the computer selected ${computerSelection}`)
                    return 1
                } else {
                    console.log(`Computer wins! player selected ${playerSelection} & the computer selected ${computerSelection}`)
                    return 2
                }
            case 2:
                if (playerSelection == `rock`){
                    console.log(`Player wins! player selected ${playerSelection} & the computer selected ${computerSelection}`)
                    return 1
                } else {
                    console.log(`Computer wins! player selected ${playerSelection} & the computer selected ${computerSelection}`)
                    return 2
                }
            case 3:
                if (playerSelection == `scissors`){
                    console.log(`Player wins! player selected ${playerSelection} & the computer selected ${computerSelection}`)
                    return 1
                } else {
                    console.log(`Computer wins! player selected ${playerSelection} & the computer selected ${computerSelection}`)
                    return 2
                }
        }
    }
}

function game(){
    while (true){
        switch (playRound()){
            case 0:
                console.log(`Current score is: Player ${playerScore} / Computer ${computerScore}`)
                break;
            case 1:
                playerScore++
                console.log(`Current score is: Player ${playerScore} / Computer ${computerScore}`)
                break;
            case 2:
                computerScore++
                console.log(`Current score is: Player ${playerScore} / Computer ${computerScore}`)
                break;
        }
        if (playerScore == `5`){
            console.log(`You won!`)
            playerScore = 0
            computerScore = 0
            break;
        } else if (computerScore == `5`) {
            console.log(`You lost!`)
            playerScore = 0
            computerScore = 0
            break;
        } else{
            continue
        }
    }
}

game()

/*
    if (playerSelection == computerSelection){
        console.log(`Draw! Player selected ${playerSelection} & the computer selected ${computerSelection}`)
        return 0
    } 
*/