var time = document.querySelector("#timeLeft");

var startQuizBtn = document.querySelector("#startQuiz");

var viewHighscores = document.querySelector("#viewHighscores");

var main = document.querySelector("#main")

var timeLeft = 75;

var timeInterval;

var isQuizOver = false;

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

var content = document.querySelector(".content");

var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

var question = 0;

var option = 0;

var questions = ["Comonnly used data types DO NOT include:", 
                 "The condition in an if / else statement is enclosed within___",
                 "Arrays in JavaScript can be used to store___",
                 "String values must be enclosed within___ when being assinged to variables",
                 "A very useful tool used during development and debugging for printing content to the debugger is:"];

var options = ["1. strings", "2. booleans", "3. alerts", "4. numbers",
               "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets",
               "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above",
               "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis",
               "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"];

function presentQuestion() {

    h1El.textContent = questions[question];

    content.children[0].remove();
    startQuizBtn.remove();
    content.setAttribute("id", "content");

    content.appendChild(option1);
    content.appendChild(option2);
    content.appendChild(option3);
    content.appendChild(option4);
    option1.textContent = options[option];
    option2.textContent = options[option + 1];
    option3.textContent = options[option + 2];
    option4.textContent = options[option + 3];

    for (var i = 0; i < content.children.length; i++) {
        content.children[i].setAttribute("style", "display: block");
        content.children[i].setAttribute("class", "options")

    }

    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
    option4.addEventListener("click", checkAnswer);

    option1.addEventListener("click", changeQuestion);
    option2.addEventListener("click", changeQuestion);
    option3.addEventListener("click", changeQuestion);
    option4.addEventListener("click", changeQuestion);

}

function changeQuestion() {

    question++;
    h1El.textContent = questions[question];

    option += 4;

    option1.textContent = options[option];
    option2.textContent = options[option + 1];
    option3.textContent = options[option + 2];
    option4.textContent = options[option + 3];

}

var result = document.createElement("div");
document.body.children[1].appendChild(result);

function checkAnswer(event) {

    var answer = event.target.textContent;
    
    if (answer === options[2] || answer === options[6] || answer === options[11] || answer === options[14] || answer === options[19]) {

    result.textContent = "Correct!"
    result.setAttribute("class", "result");

    } else {
        result.textContent = "Wrong!"
        result.setAttribute("class", "result");
        substractTime();
    }

    if (answer === options[16] || answer === options[17] || answer === options[18] || answer === options[19]) {
        quizOver();
    }

    console.log(event.target.textContent);
}

function substractTime() {

if (timeLeft >= 10) {
    timeLeft = timeLeft - 10;
    time.textContent = timeLeft;

} else {
    timeLeft = 0;
    time.textContent = timeLeft;
}

}

var finalScore = document.createElement("p");

var form = document.createElement("form");

var enterInitials = document.createElement("p");
enterInitials.textContent = "Enter initials:";

inputInitials = document.createElement("input");

var submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";

submitBtn.setAttribute("class", "options");
form.setAttribute("class", "form");
enterInitials.setAttribute("class", "marginright");
inputInitials.setAttribute("class", "marginright");

function quizOver() {

    clearInterval(timeInterval);

    isQuizOver = true;

    h1El.textContent = "All done!";

    option1.remove();
    option2.remove();
    option3.remove();
    option4.remove();

    finalScore.textContent = "Your final score is " + timeLeft + ".";
    content.appendChild(finalScore);
    content.appendChild(form);

    form.appendChild(enterInitials);

    form.appendChild(inputInitials);

    form.appendChild(submitBtn);

    submitBtn.addEventListener("click", saveInitialsAndScore);
    submitBtn.addEventListener("click", displayScores);

}

var scores;

function saveInitialsAndScore(event) {
    
    event.preventDefault();

    scores = {
        
        score: timeLeft,
        initials: inputInitials.value
    }

    localStorage.setItem("scores", JSON.stringify(scores));

}

var timeText = document.querySelector("#time");

var content2 = document.createElement("div");
content2.setAttribute("class", "content");

var scoresList = document.createElement("ul");
content2.appendChild(scoresList);

var scoreLi = document.createElement("li");

var oldScore = JSON.parse(localStorage.getItem("scores"));

var goBackBtn = document.createElement("button");
goBackBtn.textContent = "Go Back";
goBackBtn.setAttribute("class", "options");
goBackBtn.setAttribute("id", "margin");

var clearScoreBtn = document.createElement("button");
clearScoreBtn.textContent = "Clear Highscore";
clearScoreBtn.setAttribute("class", "options");
clearScoreBtn.setAttribute("id", "margin");


function displayScores() {

    clearInterval(timeInterval);

    document.body.children[0].remove();

    var header = document.createElement("div");
    document.body.prepend(header);
    header.appendChild(timeText);
    timeText.setAttribute("class", "time");

    h1El.textContent = "Highscores";

    content.remove();
    startQuizBtn.remove();
    result.remove();
    viewHighscores.remove();

if (isQuizOver === true) {

    main.appendChild(content2);
    scoresList.appendChild(scoreLi);
    scoreLi.textContent = "New Score: " + inputInitials.value + " - " + timeLeft;
}

    if (oldScore !=null) {
        main.appendChild(content2);
        var scoreLi2 = document.createElement("li");
        scoreLi2.textContent = "Previous Score: " + oldScore.initials + " - " + oldScore.score;
        scoresList.appendChild(scoreLi2);

    }

    content2.appendChild(goBackBtn);
    content2.appendChild(clearScoreBtn);
    
    goBackBtn.addEventListener("click", goBack);
    clearScoreBtn.addEventListener("click", clearScore);

}

function goBack() {

    window.location.href = "index.html";

}

function clearScore() {

    scoresList.remove();

}

viewHighscores.addEventListener("click", displayScores);
startQuizBtn.addEventListener("click", startTimer);
startQuizBtn.addEventListener("click", presentQuestion);


