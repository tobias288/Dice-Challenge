
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//writing code for the second player
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src", randomImageSource);

//you can also use this code instead of code line
//var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if Player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) { //if Player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!"; //if both Player draws
}
