// Varibles
var timeInterval = 0;
var timeLeft = 0;
var clickegoodluck = document.getElementById("Goodluck");
var secondsLeft = document.getElementById("Time Left");
var testQuestions = document.getElementById("question");
var testChoices = document.getElementById("choices");
var initials = document.getElementById("initials");
var numofquestion = 0;
var maxquestions = 7;


// Quiz Questions

var questions = [{
    question: "Which is not a JavaScript Data Types?",
    choices: ["<number>", "<undefined>" , "<varible>" ,"<object>"],
    correct:"<varible>"
},
{
    question: "What keyowrd refers to the object from where it was called?",
    choices: ["'This'", "'Here'" , "'goto'" ,"'native'"],
    correct:"<varible>"
},
{
    question: "Which symbol is used for comments in Javascript?",
    choices: ["//", "**" , "\\" ,"{}"],
    correct:"<varible>"
},
{
    question: "Which is a looping structure for Javascript ?",
    choices: ["While", "Loop" , "Looping While" ,"Four"],
    correct:"<varible>"
},
{
    question: "Which is not a JavaScript Array Method?",
    choices: ["length property", "sorth Method" , "push Method" ,"back Method"],
    correct:"back Method"
},
{
    question: "Which HTML attribute is used to defin inline styles?",
    choices: ["<Class>", "<Style>" , "comment" ,"All the Above"],
    correct:"Style"
},
],

// Start Quiz when Good Luck is clicked

var clock = 0;
var timeLeft = 0;
var clickegoodluck = document.getElementById("Goodluck");
var secondsLeft = document.getElementById("Time Left");
var testQuestions = document.getElementById("question");
var testChoices = document.getElementById("choices");
var initials = document.getElementById("initials");
var numofquestion = 0;
var maxquestions = 7;

clickegoodluck.addEventListener("click" , function (){

    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft --;
            clock.textContent ="Time: " - secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                finished();
                timeInterval.textContent = "Times Up!";
            }
            }, 100); 
        }
        render(answeredQuestionsIndex);
});

//funtion for random questions

function render(answeredQuestionsIndex) {
    //clear current data
    testQuestions.innerHTML = "";
    createtestList.innerHtml = "";

    //random questions array

    for (var i= 0; i < testQuestions.clientHeight; i++) {

        var studentQuestion = testQuestions[answeredQuestionsIndex].title;
        var studentAnswer = testQuestions[answeredQuestionsIndex].testChoices;
        testQuestions.textContent = studentQuestion;
    }

    studentAnswer.forEach(function (newItem) {
        var listItem = document.createAttribute.Element("button");
        listItem.textContent =newItem;
        testQuestions.appendChild(createtestList);
        createtestList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
//comparing student annswer to correct andswer

  function compare (event) {
      var myElement = event.target;
      if (myElement.matches ("button")) {
          var createDiv = document.createElement("div");
          createDiv.setAttribute("id", "createDiv");

          //correct answer
        if(myElement.textContent == testQuestions [answeredQuestionsIndex].answer){
            score = score + 15;
            score.El.textContent = "Score" + score;
            // (correct promp)
            createDiv.textContent ="Correct!"
            // (worng Promp)
            secondsLeft = secondsLeft - incorrect;
            createDiv.textContent ="Wrong - 10 seconds";
        }
        answeredQuestionsIndex++;

        if (questionAskedIndex >= testQuestions.length) {
            finshed();
            createDiv.textContent = "Good Effort!!";
        } else {
            render(answeredQuestionsIndex);
        }
        testQuestions.appendC(createDiv);
      }
      

  }








