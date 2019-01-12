$(document).ready(function () {
    var randomNum = 0;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var btnVal = [];


    function reset() {
        // set random number
        randomNum = Math.floor((Math.random() * 120) + 19);
        $("#randomNum").text(randomNum);

        for (var i = 0; i <= 3; i++)
            btnVal[i] = Math.floor((Math.random() * 12) + 1);
        userScore=0;
        $("#userScore").html(userScore);



    };

    // setting value of buttons

    $("#crystal-1").click(function () {
        userScore = userScore + btnVal[0];
        $("#userScore").html(userScore);
        checkWinCondition();

    });

    $("#crystal-2").click(function () {
        userScore = userScore + btnVal[1];
        $("#userScore").html(userScore);
        checkWinCondition();
    });

    $("#crystal-3").click(function () {
        userScore = userScore + btnVal[2];
        $("#userScore").html(userScore);
        checkWinCondition();
    });

    $("#crystal-4").click(function () {
        userScore = userScore + btnVal[3]
        $("#userScore").html(userScore)
        checkWinCondition();

    });


    reset();
    console.log(randomNum)
    console.log(userScore)

function checkWinCondition(){
    if (randomNum === userScore) {
        wins++;
        $("#wins").html("Wins: " + wins)
        reset();
        alert("You Win!")
    }
    else if (userScore > randomNum) {
        losses++;
        $("#losses").html("Losses: " + losses)
        reset();
        alert("you lose.....")
    }
};
});