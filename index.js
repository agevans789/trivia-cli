// user should be able to select answers to questions
// user should be able to get feedback on their answer
// user should be able to get feedback when the game is over
// user should be able to time the game
// user should be able to start a quiz game
// user should be able to view questions sequentially

// integrate loops and functions
// develop a user friendly cli
// integrate asynchronous javascript features: timers
// use an array at least once
// use an array iteration method at least once

// create array of trivia questions
const triviaQuestions = [
    {
        question: "What is the capitol of North Carolina?",
        choices: [
            "Durham", "Trenton", "Montpellier", "Raleigh"
        ],
        answer: "Raleigh"
    },
    {
        question: "How many amendments are there to the Constitution?",
        choices: [
            "10", "27", "13", "22"
        ],
        answer: "27"
    },
    {
        question: "In what country is the Apennine mountain range?",
        choices: [
            "Italy", "France", "Spain", "Germany"
        ],
        answer: "Italy"
    }
]
// should use rest syntax since the number of questions is an unknown number
// create higher-order function to runGame
function runGame(...triviaQuestions) {
    // start countdown timer
    const duration = 1;
    let timeRemaining = duration * 60;
    const timerInterval = setInterval(function() {
        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            console.log("Time's up.")
        } else {
            timeRemaining--;
        }
    }, 1000);
    // iterate through different questions in the triviaQuestions array
    function showQuestion() {
        for (let triviaQuestion of triviaQuestions) {
            console.log(triviaQuestion.question);
            // show each of the different choice options
            triviaQuestion.choices.forEach((choice, index) => {
                console.log(`${index + 1}. ${choice}`);
            });
            // check that the user's answer is correct
            function checkAnswer(userAnswer, correctAnswer) {
                let correctAnswer = triviaQuestion.answer;
                if (userAnswer === correctAnswer) {
                    console.log("Correct!");
                } else {
                    console.log("Incorrect. Correct answer is ${correctAnswer}");
                };
            };
        };
    };
}

