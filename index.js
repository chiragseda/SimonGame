var buttonColours=["red", "blue", "green", "yellow"];

var userClickedPattern=[];
var gamePattern=[];

var level=0;
var started = false;

$(".btn").click(function(event) {
    var userChosenColour= event.target.id
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    makeSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function(event)
{
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});

function nextSequence()
{
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random() * 4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
  
}

function checkAnswer(currentLevel)
{
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
    {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length)
        {
           setTimeout(function(){nextSequence();},1000);
        }
    } 
    else 
    {
        makeSound("wrong");
        $('body').addClass("game-over");
        setTimeout(function(){
            $('body').removeClass("game-over");
        },200);
        $('h1').text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function startOver()
{
    level=0; 
    gamePattern=[]; 
    started=false;
}

function makeSound(randomChosenColor)
{
    var audio=new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();                
}

function animatePress(currentColour)
{
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    },100);
}
