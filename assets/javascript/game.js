// Create variables for the cookies, wins, score to beat, losses, and your scoreToBeat
var cookie_1;
var cookie_2;
var cookie_3;
var cookie_4;
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
    cookie1();
    cookie2();
    cookie3();
    cookie4();
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#scoreToBeat').text(scoreToBeat);
    $('#yourScore').text(yourScore);


}

initialGame();




//Create a function for applying a random value for cookie_1 between 1 and 12
function cookie1(){
  cookie_1 = Math.floor((Math.random() * 12) + 1);
  $('#button1').val(cookie_1);
}

//Create a function for applying a random value for cookie_2 between 1 and 12

function cookie2(){
  cookie_2 = Math.floor((Math.random() * 12) + 1);
  $('#button2').val(cookie_2);
}

//Create a function for applying a random value for cookie_3 between 1 and 12

function cookie3(){
  cookie_3 = Math.floor((Math.random() * 12) + 1);
  $('#button3').val(cookie_3);
}
//Create a function for applying a random value for cookie_4 between 1 and 12

function cookie4(){
  cookie_4 = Math.floor((Math.random() * 12) + 1);
  $('#button4').val(cookie_4);
}

//Create a function for each additional Game
$('.cookie').click(function(){
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
