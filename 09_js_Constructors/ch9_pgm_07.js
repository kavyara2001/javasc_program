var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Swedan");

question1.showQuestion();

var question2 = new QuizQuestion(
    "What is the capital of India?",
    "New Delhi"
);

question2.addOption("Bombay");
question2.addOption("Agra");
question2.addOption("Paris");
question2.addOption("J&K");
question2.addOption("TN");

question2.showQuestion();

var question3 = new QuizQuestion(
    "Which is the best color in india?",
    "Red"
);

question3.addOption("Blue");
question3.addOption("Red");
question3.addOption("Black");
question3.addOption("Yellow");
question3.addOption("Brown");

question3.showQuestion();
// by typing the question2.answer in the console we get the question2 answer.