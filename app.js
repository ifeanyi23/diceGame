/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//dice = Math.floor(Math.random() * 6) + 1; 

/*document.querySelector('#current-' + activePlayer).textContent =  dice;
var x = document.querySelector('#current-' + activePlayer).textContent
console.log(x)*/


var scores, roundScore, activePlayer, gamePlaying, count;
init();


document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying){
            //1. random number

    
    var dice = Math.floor(Math.random() * 6) + 1; 
    
   

    // Display result
    var diceDom =  document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';


    //update the round score IF the number is not a 1
    if (dice !== 1) {
        //display score
       roundScore += dice;
       count += 1
       document.querySelector('#current-' + activePlayer).textContent =  roundScore;
       
    
    }else{
        //next player
        document.querySelector('.dice').style.display = 'none';
        nextPlayer();
    }
   
}
});

 document.querySelector('.btn-hold').addEventListener('click', function () {
     if(gamePlaying){
        //add current score to the global score
        scores[activePlayer] +=  roundScore;
        


     //update to the UI
     document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];

     //check player who won the game

     if(scores[activePlayer] >= 20){
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
     }else{
        nextPlayer();
     }
    }
     
    


 });

 document.querySelector('.btn-new').addEventListener('click', init);


 function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0; 
        document.getElementById('current-0').textContent =  '0';
        document.getElementById('current-1').textContent =  '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        
 }

 function init () {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    count = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 }


















