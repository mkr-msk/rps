function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function getComputerChoice() {
        const rand = Math.floor(Math.random() * 3);

        switch (rand) {
            case 0: return 'rock';
            case 1: return 'paper';
            case 2: return 'scissors';
        }
    }

    function getHumanChoice() {
        return prompt('Enter Rock, Paper or Scissors').toLowerCase();
    }

    function playRound(computerChoice, humanChoice) {
        // Status code: 0 - no winners, 1 - human win, 2 - pc win
        let result;

        switch (humanChoice) {
            case 'rock': {
                switch (computerChoice) {
                    case 'rock': result = 0; break;
                    case 'paper': result = 2; break;
                    case 'scissors': result = 1; break;
                }
                break;
            }
            case 'paper': {
                switch (computerChoice) {
                    case 'rock': result = 1; break;
                    case 'paper': result = 0; break;
                    case 'scissors': result = 2; break;
                }
                break;
            }
            case 'scissors': {
                switch (computerChoice) {
                    case 'rock': result = 2; break;
                    case 'paper': result = 1; break;
                    case 'scissors': result = 0; break;
                }
                break;
            }
        }

        switch (result) {
            case 0: {
                console.log(`Draw. ${humanChoice} and ${computerChoice}`); 
                break;
            }
            case 1: {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore += 1;
                break;
            }
            case 2: {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerChoice += 1;
                break;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }

    if (humanScore > computerScore) console.log('You are a winner!');
    else if (humanScore < computerScore) console.log('You are a loser!');
    else console.log('Draw.')
}