
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
$(".btn").click(function(event) {
    var userChosenColour= event.target.id
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    makeSound(userChosenColour);
});

function nextSequence()
{
    var randomNumber=Math.floor(Math.random() * 4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
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