$(document).ready(function(){
    
    var randomNumber = 0;
    var totalClicked = 0;
    var wins = 0;
    var loses = 0;
    var isPlaying = false;
    var jewelValue = {
        "jewel1" : 0,
        "jewel2" : 0,
        "jewel3" : 0,
        "jewel4" : 0
    };

    function gameStart(){
        if(!isPlaying){
            isPlaying = true;
            randomNumber = Math.floor(Math.random() * 200) + 50;
            $("#randomNumber").html(randomNumber);
            jewelValue.jewel1 = Math.round(Math.random() * 50) + 20;
            jewelValue.jewel2 = Math.round(Math.random() * 30) + 10;
            jewelValue.jewel3 = Math.round(Math.random() * 20) + 5;
            jewelValue.jewel4 = Math.round(Math.random() * 10);
        }else{
            restart();
        }
    }

    function restart(){
        randomNumber = 0;
        totalClicked = 0;
        $("#totalScore").html(totalClicked);
        $("#randomNumber").html(randomNumber);
        isPlaying = false;
        gameStart();
    }

    $("#start").on("click", function(){
        gameStart();
    });

    $(".jewel").on("click", function(){
        buttonClicked = $(this).attr("id");
        console.log(buttonClicked + ":" + jewelValue[buttonClicked]);
        totalClicked = totalClicked + jewelValue[buttonClicked];
        $("#totalScore").html(totalClicked);
        console.log(totalClicked);

        if(totalClicked === randomNumber){
            alert("You win!");
            wins ++;
            $("#wins").html(wins);
        }else if(totalClicked > randomNumber){
            alert("You lost!");
            loses ++;
            $("#loses").html(loses);
        }
    });

});