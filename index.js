var randomNumber1 = Math.floor(Math.random()*6)+1;

var img_1 = document.getElementById("img1");

img_1.setAttribute("src",`./images/dice${randomNumber1}.png`);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var img_2 = document.getElementById("img2");

img_2.setAttribute("src",`./images/dice${randomNumber2}.png`);

/**Title */

var varTitle = document.getElementById("title");

if (randomNumber1 === randomNumber2){
    varTitle.innerText = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    varTitle.innerText = "Player 1 Wins !";
}

else if(randomNumber2 > randomNumber1){
    varTitle.innerText = "Player 2 Wins !";
}
