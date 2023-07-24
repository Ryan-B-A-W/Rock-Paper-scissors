let computerScore = 0
let playerScore = 0
let gameChoices = [`rock`, `paper`, `scissors`]

//getComputerChoice selects the computers option for each round, this uses a random generated number to get a rounded number between 0 and 2, this is then used to select one of three options within gameChoices.

function getComputerChoice(){
    let CPUselection = Math.floor((Math.random() * 10) % 3)
    console.log(`CPU SELECTION TEST - ` + gameChoices[CPUselection])
    return gameChoices[CPUselection]
}

//getPlayerChoice allows the player to select a option via a prompt(), this will allow capital letters or non capital letters as long as it is spelled correctly, it also has a fail safe to ensure the player selects an option instead of inputting random values.

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

//playRound plays a single round of rock paper scissors, this firsts to check for a tie and returns 0 if it is, if it isn't it the function will check which option won the round and then check who selected that option, if it was the player it returned 1 and if it was the computer it returned 2.

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

//game() plays the game by calling the functions above within a while loop, depending on the number returned by the playRound() it will either not add a number to the score or increase the score of the Computer or Player, when the score reaches 5 a if statement will check to see who won, declare the winner and then reset the scores back to 0

function game(){
    while (true){
        switch (playRound()){
            case 0:
                console.log(`Current score is: Player ${playerScore} / Computer ${computerScore}`)
                break;
            case 1:
                ++playerScore
                console.log(`Current score is: Player ${playerScore} / Computer ${computerScore}`)
                break;
            case 2:
                ++computerScore
                console.log(`Current score is: Player ${playerScore} / Computer ${computerScore}`)
                break;
        }
        if (playerScore == 5){
            console.log(`You won!`)
            playerScore = 0
            computerScore = 0
            break;
        } else if (computerScore == 5) {
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