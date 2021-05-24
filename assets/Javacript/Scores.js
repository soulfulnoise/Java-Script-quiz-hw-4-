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

//Fetching local storage

var allScores = localStorage.getItem("allScores");
allScores =JSON.parse(allScores);

if(allScores !==null) {
    for (var i=0; i < allScores.length;i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initals + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// return listener

returnButton.addEventListener("click", function () {
    window.location.replace("..index.html");
});



