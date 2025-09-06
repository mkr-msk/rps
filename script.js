let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0 : return 'rock';
        case 1 : return 'paper';
        case 2 : return 'scissors';
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
                case 'rock': result = 0;
                case 'paper': result = 2
                case 'scissors': result = 1
            }
        }
        case 'paper': {
            switch (computerChoice) {
                case 'rock': result = 1
                case 'paper': result = 0
                case 'scissors': result = 2
            }
        }
        case 'scissors': {
            switch (computerChoice) {
                case 'rock': result = 2
                case 'paper': result = 1
                case 'scissors': result = 0
            }
        }
    }

    switch (result) {
        case 0: console.log(`No winners. ${humanChoice} and ${computerChoice}`)
        case 1: {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore += 1;
        }
        case 2: {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerChoice += 1;
        }
    }
}