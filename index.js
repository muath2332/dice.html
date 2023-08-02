var dice=Math.floor(Math.random() * 6) + 1;




if (dice===1) {
    decument.querySelector("img").setAttribute("src", "images/dice1.png");
}
if(dice===2){
    document.querySelector("img").setAttribute("src", "images/dice2.png");
}

if(dice===3){
    document.querySelector("img").setAttribute("src", "images/dice3.png");
}

if(dice===4){
    document.querySelector("img").setAttribute("src", "images/dice4.png");
}

if(dice===5){
    document.querySelector("img").setAttribute("src", "images/dice5.png");
}

if(dice===6){
    document.querySelector("img").setAttribute("src", "images/dice6.png");
}






var dice2=Math.floor(Math.random() * 6) + 1;


if (dice2===1) {
    decument.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
if(dice2===2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}

if(dice2===3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}

if(dice2===4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}

if(dice2===5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}

if(dice2===6){
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}


if (dice2 > dice){
    
  document.getElementById("h1").innerHTML="Player 2 Wins";}

if (dice > dice2){

  document.getElementById("h1").innerHTML="Player 1 Wins";}

  if(dice===dice2){
    document.getElementById("h1").innerHTML="Try again";
  }
