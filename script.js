var time = document.querySelector("#timeLeft");

var startQuizBtn = document.querySelector("#startQuiz");

var timeLeft = 75;

var timeInterval;

function startTimer() {
    time.textContent = timeLeft;
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            time.textContent = timeLeft;
            console.log(timeLeft);
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

var h1El = document.querySelector("#h1El");

var content = document.querySelector("#content");

var contentP = document.querySelector("#content").children[0];

function question1() {

    h1El.textContent = "Commonly used data types DO NOT indlucde:";

    contentP.remove();
    startQuizBtn.remove();
    content.setAttribute("style", "text-align: start; align-self: start; padding-left: 0; width: 100%");
    
    var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button");
    content.appendChild(option1);
    content.appendChild(option2);
    content.appendChild(option3);
    content.appendChild(option4);
    option1.textContent = "1. strings";
    option2.textContent = "2. booleans";
    option3.textContent = "3. alerts";
    option4.textContent = "4. numbers";

    for (var i = 0; i < content.children.length; i++) {
        content.children[i].setAttribute("style", "display: block");
        content.children[i].setAttribute("class", "options")

    }

    option1.addEventListener("click", wrongAnswer);
    option2.addEventListener("click", wrongAnswer);
    option3.addEventListener("click", correctAnswer);
    option4.addEventListener("click", wrongAnswer);

    option1.addEventListener("click", question2);
    option2.addEventListener("click", question2);
    option3.addEventListener("click", question2);
    option4.addEventListener("click", question2);

    option1.addEventListener("click", substractTime);
    option2.addEventListener("click", substractTime);
    option4.addEventListener("click", substractTime);

}

function question2() {

    h1El.textContent = "The condition in an if / else statement is enclosed within_____.";

    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    
    var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button");
    content.appendChild(option1);
    content.appendChild(option2);
    content.appendChild(option3);
    content.appendChild(option4);
    option1.textContent = "1. quotes";
    option2.textContent = "2. curly brackets";
    option3.textContent = "3. parenthesis";
    option4.textContent = "4. square brackets";

    for (var i = 0; i < content.children.length; i++) {
        content.children[i].setAttribute("style", "display: block");
        content.children[i].setAttribute("class", "options")

    }

    option1.addEventListener("click", wrongAnswer);
    option2.addEventListener("click", wrongAnswer);
    option3.addEventListener("click", correctAnswer);
    option4.addEventListener("click", wrongAnswer);

    option1.addEventListener("click", question3);
    option2.addEventListener("click", question3);
    option3.addEventListener("click", question3);
    option4.addEventListener("click", question3);

    option1.addEventListener("click", substractTime);
    option2.addEventListener("click", substractTime);
    option4.addEventListener("click", substractTime);

}

function question3() {

    h1El.textContent = "Arrays in JavaScript can be used to store_____.";
    
    document.body.children[1].children[2].remove();

    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    
    var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button");
    content.appendChild(option1);
    content.appendChild(option2);
    content.appendChild(option4);
    content.appendChild(option3);
    option1.textContent = "1. numbers and strings";
    option2.textContent = "2. other arrays";
    option4.textContent = "3. booleans";
    option3.textContent = "4. all of the above";

    for (var i = 0; i < content.children.length; i++) {
        content.children[i].setAttribute("style", "display: block");
        content.children[i].setAttribute("class", "options")

    }

    option1.addEventListener("click", wrongAnswer);
    option2.addEventListener("click", wrongAnswer);
    option3.addEventListener("click", correctAnswer);
    option4.addEventListener("click", wrongAnswer);

    option1.addEventListener("click", question4);
    option2.addEventListener("click", question4);
    option3.addEventListener("click", question4);
    option4.addEventListener("click", question4);

    option1.addEventListener("click", substractTime);
    option2.addEventListener("click", substractTime);
    option4.addEventListener("click", substractTime);

}

function question4() {

    h1El.textContent = "String values must be enclosed within _____ when being assigned to variables";
    
    document.body.children[1].children[2].remove();

    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    
    var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button");
    content.appendChild(option1);
    content.appendChild(option2);
    content.appendChild(option3);
    content.appendChild(option4);
    option1.textContent = "1. commas";
    option2.textContent = "2. curly brackets";
    option3.textContent = "3. quotes";
    option4.textContent = "4. parenthesis";

    for (var i = 0; i < content.children.length; i++) {
        content.children[i].setAttribute("style", "display: block");
        content.children[i].setAttribute("class", "options")

    }

    option1.addEventListener("click", wrongAnswer);
    option2.addEventListener("click", wrongAnswer);
    option3.addEventListener("click", correctAnswer);
    option4.addEventListener("click", wrongAnswer);

    option1.addEventListener("click", question5);
    option2.addEventListener("click", question5);
    option3.addEventListener("click", question5);
    option4.addEventListener("click", question5);

    option1.addEventListener("click", substractTime);
    option2.addEventListener("click", substractTime);
    option4.addEventListener("click", substractTime);

}

function question5() {

    h1El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    
    document.body.children[1].children[2].remove();

    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    
    var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button");
    content.appendChild(option1);
    content.appendChild(option2);
    content.appendChild(option4);
    content.appendChild(option3);
    option1.textContent = "1. JavScript";
    option2.textContent = "2. terminal / bash";
    option4.textContent = "3. for loops";
    option3.textContent = "4. console.log";

    for (var i = 0; i < content.children.length; i++) {
        content.children[i].setAttribute("style", "display: block");
        content.children[i].setAttribute("class", "options")

    }

    option1.addEventListener("click", wrongAnswer);
    option2.addEventListener("click", wrongAnswer);
    option3.addEventListener("click", correctAnswer);
    option4.addEventListener("click", wrongAnswer);

    option1.addEventListener("click", substractTime);
    option2.addEventListener("click", substractTime);
    option4.addEventListener("click", substractTime);

    option1.addEventListener("click", quizOver);
    option2.addEventListener("click", quizOver);
    option3.addEventListener("click", quizOver);
    option4.addEventListener("click", quizOver);

}

function correctAnswer() {
    
    var result = document.createElement("div");
    result.textContent = "Correct!"
    document.body.children[1].appendChild(result);
    result.setAttribute("class", "result");
}

function wrongAnswer() {

    var result = document.createElement("div");
    result.textContent = "Wrong!"
    document.body.children[1].appendChild(result);
    result.setAttribute("class", "result");
}

function substractTime() {

    timeLeft = timeLeft - 10;
    time.textContent = timeLeft;

}

var inputInitials;


function quizOver() {

    clearInterval(timeInterval);

    h1El.textContent = "All done!";
    
    document.body.children[1].children[2].remove();

    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();
    content.children[0].remove();

    var finalScore = document.createElement("p");
    var form = document.createElement("form");
    content.appendChild(finalScore);
    content.appendChild(form);
    finalScore.textContent = "Your final score is " + timeLeft + ".";

    var enterInitials = document.createElement("p");
    form.appendChild(enterInitials);
    enterInitials.textContent = "Enter initials:";

    inputInitials = document.createElement("input");
    form.appendChild(inputInitials);

    var submitBtn = document.createElement("button");
    form.appendChild(submitBtn);
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("class", "options");

    form.setAttribute("class", "form");
    enterInitials.setAttribute("class", "marginright");
    inputInitials.setAttribute("class", "marginright");

    submitBtn.addEventListener("click", saveInitialsAndScore);
}

var goBackBtn;
var clearHighscoreBtn;
var scoreObject;
var scoreLi;
var scoresList;

function saveInitialsAndScore(event) {

    event.preventDefault();

    h1El.textContent = "Highscores";

    document.body.children[1].children[2].remove();
    document.body.children[0].remove();

    content.children[0].remove();
    content.children[0].remove();

    scoreObject = {

        Initials: inputInitials.value,
        Score: timeLeft,
    }

    displayScores();

    goBackBtn = document.createElement("button");
    content.appendChild(goBackBtn);
    goBackBtn.textContent = "Go Back";
    goBackBtn.setAttribute("class", "options");
    goBackBtn.setAttribute("id", "margin");


    clearHighscoreBtn = document.createElement("button");
    content.appendChild(clearHighscoreBtn);
    clearHighscoreBtn.textContent = "Clear Highscore";
    clearHighscoreBtn.setAttribute("class", "options");
    clearHighscoreBtn.setAttribute("id", "margin");

    goBackBtn.addEventListener("click", goBack);
    clearHighscoreBtn.addEventListener("click", clearHighscore);

}

var scoresList;
var oldScore;
oldScore = JSON.parse(localStorage.getItem("Score"))

function displayScores() {

    scoresList = document.createElement("ul");
    content.appendChild(scoresList);
    scoreLi = document.createElement("li");
    scoresList.appendChild(scoreLi);
    scoreLi.textContent = "New Score: " + inputInitials.value + " - " + timeLeft;
    

    if (oldScore !=null) {
        var scoreLi2 = document.createElement("li");
        scoreLi2.textContent = "Previous Score: " + oldScore.Initials + " - " + oldScore.Score;
        scoresList.appendChild(scoreLi2);

    }

    storeScores();

}

function goBack() {

    window.location.href = "index.html";
}


function clearHighscore() {

    scoresList.remove();

}

function storeScores() {

    localStorage.setItem("Score", JSON.stringify(scoreObject));

}

function viewHighscores() {

  

}

startQuizBtn.addEventListener("click", startTimer);
startQuizBtn.addEventListener("click", question1);

var viewsScores = document.querySelector("#viewHighscores");

viewsScores.addEventListener("click", function() {

    content.children[0].remove();
    
    startQuizBtn.remove();

    h1El.textContent = "Highscores";


    var scoresList2 = document.createElement("ul");
    
    content.appendChild(scoresList2);

    if (oldScore !=null) {
        var scoreLi3 = document.createElement("li");
        scoreLi3.textContent = "Previous Score: " + oldScore.Initials + " - " + oldScore.Score;
        scoresList2.appendChild(scoreLi3);

    } else {
        var scoreLi3 = document.createElement("li");
        scoreLi3.textContent = "No Scores Yet";
        scoresList2.appendChild(scoreLi3);
    }

    goBackBtn = document.createElement("button");
    content.appendChild(goBackBtn);
    goBackBtn.textContent = "Go Back";
    goBackBtn.setAttribute("class", "options");
    goBackBtn.setAttribute("id", "margin");

    goBackBtn.addEventListener("click", goBack);


}
)