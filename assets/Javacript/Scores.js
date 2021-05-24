//varibles
var highscore = document.querySelector(".highScore");
var clearScore = document.querySelector(".clear-score");
var returnButton = document.querySelector(".return");

//clearing score

clearScore.addEventListener("click" , function (){
    if(clearScore){
        localStorage.clear();
        location.reload();
    }
});



