//-----Document Variables-----
var startingSectionElement = document.getElementById('starting-section');
var quizSectionElement = document.getElementById('quiz-section');
var resultsSectionElement = document.getElementById('results-section');
var highscoreSectionElement = document.getElementById('highscores-section');
var timeRemainingElement = document.getElementById('time-remaining');

var startButton = document.getElementById('start-button');
var finalScoreElement = document.getElementById('final-score');

var startpageLink = document.getElementById('display-startpage-button');
var submitResultsLink = document.getElementById('submit-results-button');
var resetScoresButton = document.getElementById('reset-scores-button');

var highscoreInput = document.getElementById('highscore-input-element');
var highscoresLink = document.getElementById('highscores-link');
var highscoresList = document.getElementById('highscores-list');

//Get quiz questions
var questionElements = quizSectionElement.children;

//-----State Management Variables-----
var timeRemaining = 60;
var score = 0;

var quizQuestionCounter = 0;

var timeInterval;

//----------Function Declarations----------
function startCountdown(){
    timeRemaining = 60;

    timeInterval = setInterval(function(){
        if(timeRemaining >= 1){
            timeRemainingElement.textContent = timeRemaining + "s";
            timeRemaining--;
        }else{
            timeRemainingElement.textContent = '0' + 's';

            endQuiz();
        }
    },1000);
}

function displayStartPage(){
    highscoreSectionElement.style.display = 'none';
    quizSectionElement.style.display = 'none';
    resultsSectionElement.style.display = 'none';
    startingSectionElement.style = 'flex';
}

function startQuiz(){
    console.log("Starting quiz...");

    score = 0;
    quizQuestionCounter = 0;

    //Hide starting page
    hideStartingSection();

    //Start Countdown
    startCountdown();

    //Show first question
    displayQuizQuestion('0');

    //Show quiz section
    showQuiz();

}

function endQuiz(){
    console.log("Ending quiz...");


    clearInterval(timeInterval);

    hideQuiz();

    finalScoreElement.textContent = score;

    showResults();
}


function answerQuestion(event){
    console.log('Answer Selected: '+ event.target.textContent)
    console.log('Result: ' + event.target.dataset.correct)

    if(event.target.dataset.correct){
        var correctAnswer = (event.target.dataset.correct === "true");

        if(correctAnswer){
            //User guessed the right answer
            //Add to score
            score +=10;
            //Add to time
            timeRemaining += 5;
        }else{
            //User guessed the wrong answer
            //Do not add to score
            //Subtract from time
            timeRemaining -= 5;
        }

        //Check if quiz is over
        if(quizQuestionCounter < (questionElements.length - 1)){
            //quiz is not over, proceed to next question
            quizQuestionCounter++;
            console.log("Question Counter" + quizQuestionCounter)

            displayQuizQuestion(String(quizQuestionCounter));
        }else{
            //quiz is over
            endQuiz();
        }
    }

}

function goToHighScores() {
    console.log("Navigating to highscores...");

    endQuiz();

    hideStartingSection();

    hideResults();

    hideQuiz();

    showHighScores();
}

function submitResults(){
    console.log(highscoreInput.value);

    //Create list element for highscores page
    var enteredInitials = highscoreInput.value;

    var highscoreText = enteredInitials + ": " + score;

    //Create list element
    var listItemElement = document.createElement("li");

    listItemElement.textContent = highscoreText;

    highscoresList.appendChild(listItemElement);

    localStorage.setItem(enteredInitials,String(score));
    
    goToHighScores();
}

function resetScores(){
    highscoresList.innerHTML = '';
}
//-----Helper Functions-----
function displayQuizQuestion(questionNumber){
    for(var i = 0; i < questionElements.length; i++){
        if(questionElements[i].dataset.question_number === questionNumber){
            questionElements[i].style.display = 'block';
        }else{
            questionElements[i].style.display = 'none';
        }
    }
}

function showStartingSection(){
    startingSectionElement.style.display = 'flex';
}

function hideStartingSection(){
    startingSectionElement.style.display = 'none';
}

function showHighScores(){
    highscoreSectionElement.style.display = 'flex';
}

function hideHighScores(){
    highscoreSectionElement.style.display = 'none';
}

function showResults(){
    resultsSectionElement.style.display = 'flex';
}

function hideResults(){
    resultsSectionElement.style.display = 'none';
}

function showQuiz(){
    quizSectionElement.style.display = 'flex';
}

function hideQuiz(){
    quizSectionElement.style.display = 'none';
}
//----------Event Listeners----------
startButton.addEventListener("click", startQuiz);

quizSectionElement.addEventListener("click", answerQuestion);

highscoresLink.addEventListener("click",goToHighScores);

startpageLink.addEventListener('click', displayStartPage);

submitResultsLink.addEventListener('click', submitResults)

resetScoresButton.addEventListener('click', resetScores)
//----------Starting Functions----------

displayStartPage();


