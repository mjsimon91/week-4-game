// Create variables for the chrystals, wins, score to beat, losses, and your scoreToBeat
var Chrystal_1;
var Chrystal_2;
var Chrystal_3;
var Chrystal_4;
var wins = 0;
var losses = 0;
var scoreToBeat;
var yourScore;
var clickValue;
var buttonsClicked
var result;

//Make sure that page is ready before runnuing
$(document).ready(function(){

//Create a function for the start of the Game

//Create a statement for applying a random value to the score to beat which will be between 19 and 120


function initialGame() {
  scoreToBeat = Math.floor((Math.random() * 120) + 19);
  yourScore = 0;
  chrystal1();
  chrystal2();
  chrystal3();
  chrystal4();
  $('#wins').text(wins);
  $('#losses').text(losses);
  $('#scoreToBeat').text(scoreToBeat);
  $('#yourScore').text(yourScore);


}

initialGame();




//Create a function for applying a random value for Chrystal_1 between 1 and 12
function chrystal1(){
  Chrystal_1 = Math.floor((Math.random() * 12) + 1);
  $('#button1').val(Chrystal_1);
}

//Create a function for applying a random value for Chrystal_2 between 1 and 12

function chrystal2(){
  Chrystal_2 = Math.floor((Math.random() * 12) + 1);
  $('#button2').val(Chrystal_2);
}

//Create a function for applying a random value for Chrystal_3 between 1 and 12

function chrystal3(){
  Chrystal_3 = Math.floor((Math.random() * 12) + 1);
  $('#button3').val(Chrystal_3);
}
//Create a function for applying a random value for Chrystal_4 between 1 and 12

function chrystal4(){
  Chrystal_4 = Math.floor((Math.random() * 12) + 1);
  $('#button4').val(Chrystal_4);
}

//Create a function for each additional Game
$('.chrystal').click(function(){
  clickValue = $(this).val();
  yourScore = parseInt(clickValue) + yourScore;
  $('#yourScore').text(yourScore);
  console.log('click value ' + yourScore);

  if (yourScore === scoreToBeat) {
    alert("You win!");
    wins++;
    initialGame();
  } else if (yourScore > scoreToBeat) {
    alert("Oh no you went over! Try again");
    losses++;
    initialGame();
  }
});

});
