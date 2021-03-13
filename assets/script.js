//-----Document Variables-----
var quizSectionElement = document.getElementById('quiz-section');
var highscoreSectionElement = document.getElementById('highscores-section');
var timeRemainingElement = document.getElementById('time-remaining');
var startButton = document.getElementById('start-button');

//-----State Management Variables-----
var timeRemaining = 90;

var quizQuestionCounter = 0;

var quizDataArray = [
    {
        question:'',
        answers:[
            {
                number: 1,
                text:';'
            },
            {
                number: 2,
                text:';'
            },
            {
                number: 3,
                text:';'
            },
            {
                number: 4,
                text:';'
            },
        ],
        correctAnswer:0
    },
    {
        question:'',
        answers:[
            {
                number: 1,
                text:';'
            },
            {
                number: 2,
                text:';'
            },
            {
                number: 3,
                text:';'
            },
            {
                number: 4,
                text:';'
            },
        ],
        correctAnswer:0
    },
    {
        question:'',
        answers:[
            {
                number: 1,
                text:';'
            },
            {
                number: 2,
                text:';'
            },
            {
                number: 3,
                text:';'
            },
            {
                number: 4,
                text:';'
            },
        ],
        correctAnswer:0
    },
    {
        question:'',
        answers:[
            {
                number: 1,
                text:';'
            },
            {
                number: 2,
                text:';'
            },
            {
                number: 3,
                text:';'
            },
            {
                number: 4,
                text:';'
            },
        ],
        correctAnswer:0
    },
    {
        question:'',
        answers:[
            {
                number: 1,
                text:';'
            },
            {
                number: 2,
                text:';'
            },
            {
                number: 3,
                text:';'
            },
            {
                number: 4,
                text:';'
            },
        ],
        correctAnswer:0
    },
]


//----------Function Declarations----------
function countdown(){

    var timeInterval = setInterval(function(){
        if(timeRemaining > 1){
            timeRemainingElement.textContent = timeRemaining + "s";
            timeRemaining--;
        }else{
            timeRemainingElement.textContent = '0' + 's';

            clearInterval(timeInterval);

            //End Quiz
        }
    },1000);
}

function displayStartPage(){
    highscoreSectionElement.style.display = 'none';
    quizSectionElement.style.display = 'none';
}

//-----Helper Functions-----
function showHighScores(){
    highscoreSectionElement.style.display = 'block';
}

function showQuiz(){
    quizSectionElement.style.display = 'block';
}

function hideQuiz(){
    quizSectionElement.style.display = 'none';
}
//----------Event Listeners----------
startButton.addEventListener("click", function(){
    countdown();
    //startQuiz();
});

//----------Starting Functions----------
displayStartPage();

