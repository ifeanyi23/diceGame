/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

//dice = Math.floor(Math.random() * 6) + 1; 

/*document.querySelector('#current-' + activePlayer).textContent =  dice;
var x = document.querySelector('#current-' + activePlayer).textContent
console.log(x)*/


var scores, roundScore, activePlayer, gamePlaying, count;
init();
var lastDice;


document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying){
            //1. random number

    
    var dice1 = Math.floor(Math.random() * 6) + 1; 
    var dice2 = Math.floor(Math.random() * 6) + 1; 
    
   

    // Display result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
   
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    if (dice1 !== 1 && dice2 !==1) {
      //display score
     roundScore += dice1 + dice2;
     document.querySelector('#current-' + activePlayer).textContent =  roundScore;
    }else{
      //next player
      //document.querySelector('.dice').style.display = 'none';
      nextPlayer();
  }
    
    //update the round score IF the number is not a 1
    /*

    if(dice === 6 && lastDice === 6) {
       scores[activePlayer] = 0;
       document.querySelector('#score-' + activePlayer).textContent = '0';
       nextPlayer();
    }else if (dice !== 1) {
        //display score
       roundScore += dice;
       document.querySelector('#current-' + activePlayer).textContent =  roundScore;
       
    
    }else{
        //next player
        document.querySelector('.dice').style.display = 'none';
        nextPlayer();
    }

    lastDice =  dice;
    */
   
}
});

 document.querySelector('.btn-hold').addEventListener('click', function () {
     if(gamePlaying){
        //add current score to the global score
        scores[activePlayer] +=  roundScore;
        


     //update to the UI
     document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];

     //check player who won the game
      var input = document.querySelector('.final-score').value;
      var winningScore;  
      // 0 ,null, undefined, '' are coerced to false
      // anything else is coerced to true
      if(input) {
         winningScore = input;
      }else{
         winningScore = 100;
      }
     if(scores[activePlayer] >= winningScore){
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
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
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        
        
 }

 function init () {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    count = 0;
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
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


















