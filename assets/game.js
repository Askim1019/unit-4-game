// Game starts on page load

// A random number should be generated every win and loss and on page load


var blueGem = 0;
var redGem = 0;
var greenGem = 0;
var purpleGem = 0;
var currentScore = 0;
var randNum = 0;
var win = 0;
var loss = 0;

function generateRandomNum() {
   randNum = Math.floor((Math.random() * 102) + 19);
   $("#random-number").text(randNum);
}

function generateGemNumber(){
    return Math.floor((Math.random() * 12) + 1);
}

function blueGemNum() {
    blueGem = generateGemNumber();
}

function redGemNum() {
    redGem = generateGemNumber();
}

function purpleGemNum() {
    purpleGem = generateGemNumber();
}

function greenGemNum() {
    greenGem = generateGemNumber();
}

function resetCurrentScore() {
    $("#score").text(0);
}

function newGame(){

    blueGem = 0;
    redGem = 0;
    greenGem = 0;
    purpleGem = 0;
    currentScore = 0;
    randNum = 0;

    resetCurrentScore();
    generateRandomNum();
    blueGemNum();
    redGemNum();
    purpleGemNum();
    greenGemNum();
}

// if my score matches the random number, I win and the game restarts
function winGame() {
    if (currentScore === randNum) 
    {
        $(".winloss").text("You Won!");
        $(".winloss").css("background-color", "green");
    // A win adds 1 to the record
        win++; 
        $("#wins").text(win);
        newGame();
    }
}


// if my score is above the random number, I lose and the game restarts
function loseGame() {
    if (currentScore > randNum)
    {
        $(".winloss").text("You Lost!");
        $(".winloss").css("background-color", "red");
    // A loss adds 1 to the record
        loss++;
        $("#losses").text(loss);
        newGame();
    }
}

// As a user, I want to click on a crystal and it should add to my total score
$("#blue-gem").click(function(){
    currentScore += blueGem;
    $("#score").text(currentScore);

    winGame();
    loseGame();
});

$("#purple-gem").click(function(){
    currentScore += purpleGem;
    $("#score").text(currentScore);

    winGame();
    loseGame();
});

$("#green-gem").click(function(){
    currentScore += greenGem;
    $("#score").text(currentScore);

    winGame();
    loseGame();
});

$("#red-gem").click(function(){
    currentScore += redGem;
    $("#score").text(currentScore);

    winGame();
    loseGame();
});


$(document).ready(function(){
    newGame();
});