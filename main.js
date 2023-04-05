let playerSelection;
let computerSelection;
let Computer_score = 0;
let Player_score = 0;

// let r = document.getElementById('rock'); // 0
// let p = document.getElementById('paper'); // 1
// let c = document.getElementById('scissors'); // 2

        

function getComputeSelection(){
    return Math.floor(Math.random() * 3); // o rock , 1 paper , 2 scissors
}

// 0 defeats 2 , 1 defeats 0 , 2 defeats 1, 
function playRound(playerSelection,computerSelection, round){

    if( playerSelection === computerSelection){
                
        alert(`round ${round}: draw`);

    }else if( playerSelection === 0 && computerSelection === 1 ||
            playerSelection === 1 && computerSelection === 2  ||
            playerSelection === 2 && computerSelection === 0){
                
        Computer_score = Computer_score + 1 ;
        alert(`round ${round}: win for computer`);

    }else{ 

        Player_score = Player_score + 1 ;
        alert(`round ${round}: a win for the player` );
    }
}

function game(){

           
    for(let round = 0 ; round < 5 ; ++round){

        console.log(`ROUND ${round}`);
        let input = prompt('choose Rock, Paper or Scissors: ','').toLocaleLowerCase();
        playerSelection = (input === 'rock') ? 0 : (input === 'paper'? 1 : 2) ;

        // to show computer selection as words not numbers (0,1,2)
        computerSelection = getComputeSelection();
        let computerInput = (computerSelection === 0) ? 'rock' : (computerSelection === 1? 'paper' : 'scissors') ;

        alert(`you chose: ${input}, computer chose: ${computerInput}` );
        //console.log();

        playRound(playerSelection,computerSelection , round);
    }

    alert(`Score: ${Player_score}, computer's Score: ${Computer_score}`);

    if(Computer_score > Player_score){
        alert('YOU LOST');
    }else if(Computer_score < Player_score){
        alert(' YOU WON');
    }else {
        alert('draw');
    }
}


        game();
        // r.addEventListener('onclick', () => {
        //     playerSelection = 0;
        //     computerSelection = getComputeSelection();
        //     game();
        // });

