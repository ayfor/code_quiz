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
        question:'Commonly used data types DO NOTE include:',
        answers:[
            {
                number: 1,
                text:'Strings'
            },
            {
                number: 2,
                text:'Booleans'
            },
            {
                number: 3,
                text:'Alerts'
            },
            {
                number: 4,
                text:'Numbers'
            },
        ],
        correctAnswer:3
    },
    {
        question:'The condition in an if/else statement is enclosed within _____.',
        answers:[
            {
                number: 1,
                text:'Quotes'
            },
            {
                number: 2,
                text:'Curly Brackets'
            },
            {
                number: 3,
                text:'Parantheses'
            },
            {
                number: 4,
                text:'Square Brackets'
            },
        ],
        correctAnswer:3
    },
    {
        question:'Arrays in Javascript can be used to store _____.',
        answers:[
            {
                number: 1,
                text:'Numbers and Strings'
            },
            {
                number: 2,
                text:'Other arrays'
            },
            {
                number: 3,
                text:'Booleans'
            },
            {
                number: 4,
                text:'All of the above.'
            },
        ],
        correctAnswer:4
    },
    {
        question:'String values must be enclosed within _____ when being assigned to variables.',
        answers:[
            {
                number: 1,
                text:'Commas'
            },
            {
                number: 2,
                text:'Curly Brackets'
            },
            {
                number: 3,
                text:'Quotes'
            },
            {
                number: 4,
                text:'Parentheses'
            },
        ],
        correctAnswer:1
    }
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

function startQuiz(){

}

//-----Helper Functions-----
function generateQuizQuestion(){
    
}

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

//displayStartPage();

