Project & Scope:

Project will to recreate the game Rock Paper Scissors without user interface.

Key Actions:

    The game must be played up until 5 rounds.
    The game will be human vs computer - Computer will use basic random number generator from Math.random
    Inputs from player will not have to be exact - rock, RoCK, ROCK will all select rock lowering issues from user.
    Use prompt() to get user selection

User interface will be implemented at a later date after the project is created.

Tasks:

    Prepare HTML file, linking in both CSS and Javascript files. [X]
    Create a function what will get the CPU selection [X]
    Create a function for player selection [X]
    Create function that plays a single round of the game. [X]
    Create function what loops the game 5 or more times, while tracking score, winner is first to 5 wins, loop must end when winner is declared. [X]

Lessons Learned:

    Understanding how important it is to test during building phase, also learning how to debug code and using the dev tools, I have left the debugging and testing logs within the file.

    Understanding how to break a project down, I didn't want to break the project down into if statements and tried to approach the project in a different manner, this lead me to taking a 15 minute break away from the computer and getting back old pencil and paper.

        I noticed their are 6 possibilities, out of the 6 three are ties the others aren't, but using a bit of math I noticed a pattern:

            Rock = 0            0 + 2 = 2 (Rock wins)             
            Paper = 1           0 + 1 = 1 (Paper wins)
            Scissors = 2        2 + 1 = 3 (Scissors wins)
        
        The remaining three options didn't matter and it didn't matter who selected winning option has I could check that after calculations, so I used the array I had previously built to get the index number and simply added them together, then used a switch to detect which option won the round, then using a if statement I simply checked if the player had selected that option, if he did he won the round, if he didn't the computer did.
    
    Getting a basic understanding of loops and how they can be used.

    Getting a basic understanding of arrays and how they can be used.
        

