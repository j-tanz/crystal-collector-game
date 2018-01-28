var playScore = 0; 
var wins = 0;
var losses = 0;

function newGame() {
    target = Math.floor(Math.random() *102) +19;
    playScore = 0;
    crystalArr = [Math.floor(Math.random() *12) +1, Math.floor(Math.random() *12) +1, Math.floor(Math.random() *12) +1, Math.floor(Math.random() *12) +1];
    console.log(crystalArr);  
    $("#targetScore").text(target); 

    function resetAll() {
        playScore = 0;
        newGame();   
    }
    function addOn() {
        var index = $(this).attr("data-num");
        playScore += crystalArr[index]
        $("#playerScore").text(playScore);
        
        console.log("player= ", playScore, "target= ", target);
        if (playScore > target) {
            losses++;
            $("#lossCount").text("LOSSES : " + losses);
            alert("YOU LOSE.");
            resetAll();
        } else if (playScore == target) {
            wins++;
            $("#winCount").text("WINS : " + wins);
            alert("YOU WIN!");
            resetAll();
            
        }        
    }
    $(".clickMe").on("click", addOn);
}   

newGame();
