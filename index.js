var name = document.querySelectorAll("#play1").value;
document.querySelectorAll("#p1").textContent = name;

var name1= document.getElementById('play1').value;
  var name2= document.getElementsByTagName("input")[1].value;

 document.querySelector("input")[0].textContent="name1" ;
  

  document.querySelector("input")[1].textContent=name2 ;

function starting(){
 
var randomNumber1 = Math.floor(Math.random() * 10) + 1; //1-6

var randomDiceImage = "card" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 10) + 1;

var randomImageSource2 = "images/card" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"; 
    
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
   
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

}

  

