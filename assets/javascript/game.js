var playScore = 0; 
var wins = 0;
var losses = 0;

function newGame() {
    target = Math.floor(Math.random() *102) +19;
    playScore = 0;
    crystalArr = [Math.floor(Math.random() *12) +1, Math.floor(Math.random() *12) +1, Math.floor(Math.random() *12) +1, Math.floor(Math.random() *12) +1];
    $("#targetScore").text(target);
    renderScore(); 
} 

function renderScore() {
    $("#playerScore").text(playScore);
}

function addOn() {
    var index = $(this).attr("data-num");
    playScore += crystalArr[index];
    renderScore();
    checkWin();
}

function checkWin() {
    if (playScore > target) {
        renderScore();
        ifLoss();       
    } else if (playScore == target) {
        renderScore();
        ifWin();
    }        
}

function ifLoss() {
    setTimeout(function() {
        losses++;
        $("#lossCount").text("LOSSES : " + losses);    
        alert("YOU LOSE.");
        newGame();
    }, 100);
}

function ifWin() {
    setTimeout(function() {
        wins++;
        $("#winCount").text("WINS : " + wins);
        alert("YOU WIN!");
        newGame();
    }, 100);
}

$(".clickMe").on("click", addOn);
newGame();
