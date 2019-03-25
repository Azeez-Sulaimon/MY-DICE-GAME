var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomSrcImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSrcImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomSrcImage2 = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSrcImage2);



 if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="🚩Player 1 win!"
}  else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 win🚩"
} else  {
    document.querySelector("h1").innerHTML = "Draw";
} 