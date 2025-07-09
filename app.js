var holes = ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9"];
var gameNumber = [];
var userClick = [];
var started = false;
var intervalId;
var countDown;
var currentHole;
var userChosen;
var score = 0;
$(document).keypress(function () {
    //nextSequence();
    if (started) return;//The application only responds when a key is pressed. Clicking any button does not trigger any response.
    started = true;
    timeLeft = 30;
    $("#level-title").text("Started!!!");
    intervalId = setInterval(nextSequence, 800); // one hole every 800ms and storing timer
    countDown = setInterval(updateCountdown, 1000);
    console.log(intervalId);
    setTimeout(function () {
        started = false;
        clearInterval(intervalId);
        clearInterval(countDown);
        console.log("game over afer 30 sec");
        console.log("your score: " + score)
        gameOver();

    }, 30000)

});
//to display timer on left
function updateCountdown() {
    timeLeft--;
    $("#timer").text("Time left: " + timeLeft + "sec");
    if (timeLeft <= 0) {//without this loop also works 
        clearInterval(countDown);
    }
}
$(".btn").click(function (event) {//user choice 
    //console.log("success");
    if (!started) return;
    //console.log($(this).text());
    userChosen = $(this).attr("id");
    userClick.push(userChosen);
    // console.log("user: "+userClick);
    $(this).addClass("pressed");
    var clickedButton = this;
    setTimeout(function () {
        $(clickedButton).removeClass("pressed");
    }, 100);
    checkAnswer();

});
function nextSequence() {//game generating random
    var randomNumber = Math.floor(Math.random() * 9);
    var randomChosenHole = holes[randomNumber];//
    currentHole = randomChosenHole;
    gameNumber.push(randomChosenHole);
    //console.log("game:" +gameNumber);
    //console.log(randomChosenHole);
    $("#" + randomChosenHole).addClass("active");
    setTimeout(function () {
        $("#" + randomChosenHole).removeClass("active");
    }, 600);
    var audio = new Audio("Sounds/mole.mp3"); audio.play();
}
function checkAnswer() {
    if (!started) return;
    if (userChosen == currentHole) {
        // Although we could directly compare with randomChosenHole,
        // we could also make this variable global for reuse.
        // However, since randomChosenHole is only used inside nextSeq(),there's no benefit in making it global.

        console.log("succes");
        // var audio = new Audio("Sounds/yay-6120.mp3"); audio.play();
        score = score + 100;
        $("#score").text("score:" + score);
    }
    else {
        console.log("not");
        var audio = new Audio("Sounds/wrong.mp3"); audio.play();
        $("#score").text("score:" + score);
    }
}
function gameOver() {
var audio = new Audio("./Sounds/game-over-arcade-6435.mp3"); audio.play();
    $("#level-title").text("Game Over");
    $("body").addClass("flash");
 
}
