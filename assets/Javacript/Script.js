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






