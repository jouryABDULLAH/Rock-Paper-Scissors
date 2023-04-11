let playerSelection;
let computerSelection;
let Computer_score = 0;
let Player_score = 0;

let r = document.getElementById('rock'); // 0
let p = document.getElementById('paper'); // 1
let s = document.getElementById('scissors'); // 2

let Pscore = document.getElementById('Pscore');
let Cscore = document.getElementById('Cscore');

let div = document.getElementById('results');

function results(C_score ,C_selection ,P_score ,P_selection ,phrase){

    // temp solution, i'll enhance it soon: done?
    //let computerInput = C_selection /*(C_selection === 0) ? 'rock' : (C_selection === 1? 'paper' : 'scissors')*/ ;
    //let PlayerInput = P_selection /*(P_selection === 0) ? 'rock' : (P_selection === 1? 'paper' : 'scissors') */;


    div.innerText = `computer\'s choice: ${C_selection}, Player\'s choice: ${P_selection}, ${phrase}
    `;

    
    Pscore.innerText =`${P_score}`;
    Cscore.innerText =`${C_score}`;
};

function getComputeSelection(){
    let C_selection = Math.floor(Math.random() * 3);
    return (C_selection === 0) ? 'rock' : (C_selection === 1? 'paper' : 'scissors') ; // o rock , 1 paper , 2 scissors
}

// 0 defeats 2 , 1 defeats 0 , 2 defeats 1, 
function playRound(playerSelection){

    computerSelection = getComputeSelection();


    if( playerSelection === computerSelection){
                
        results(Computer_score, computerSelection,Player_score,playerSelection,'draw');

    }else if( playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors'  ||
            playerSelection === 'scissors' && computerSelection === 'rock'){
                
        Computer_score = Computer_score + 1 ;
        results(Computer_score, computerSelection,Player_score,playerSelection,'1 for computer');

    }else{ 

        Player_score = Player_score + 1 ;
        results(Computer_score, computerSelection,Player_score,playerSelection,'1 for player');
    }

    if( Computer_score === 5){
        results(Computer_score, computerSelection,Player_score,playerSelection,'\nwinner is Computer');
        Player_score = 0;
        Computer_score = 0;
    }else if(Player_score === 5){
        results(Computer_score, computerSelection,Player_score,playerSelection,'\nwinner is Player');
        Player_score = 0;
        Computer_score = 0;
    }
}

r.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection);
});
p.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection);
});
s.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection);
});


       // game();
        // r.addEventListener('onclick', () => {
        //     playerSelection = 0;
        //     computerSelection = getComputeSelection();
        //     game();
        // });

