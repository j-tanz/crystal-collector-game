

function newGame() {
    var player = 0;
    var target = Math.floor(Math.random() *102) +19;
    var ruby = Math.floor(Math.random() *12) +1;
    var blue = Math.floor(Math.random() *12) +1;
    var yellow = Math.floor(Math.random() *12) +1;
    var purple = Math.floor(Math.random() *12) +1;
        
    $("#targetScore").append(target);

    $("#ruby").on("click", function() {
        player += ruby;
    });
    $("#blue").on("click", function(){
        player += blue;
    });
    $("#yellow").on("click", function(){
        player += yellow;
    });
    $("#purple").on("click", function(){
        player += purple;
        
    });
    console.log(player);


  
    

}
newGame();