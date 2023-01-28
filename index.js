var readSyncLine = require('readline-sync');
var score = 0;

var name = readSyncLine.question("Enter your name: ")
console.log("Welcome " + name + " to the quiz app!");

function play(question, answer) {
  var userAnswer = readSyncLine.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nCorrect!");
    score++;

  }
  else {
    console.log("\nIt is not correct!");

  }
  console.log("\nYour current score is: " + score);
  console.log("------------------------------");
}




var questions = [{

  question: "Where do I live? ",
  answer: "Ahmedabad",
  
},
{
  question: "Who is my favourite hero? ",
  answer: "Superman"
},
{
  question: "Where do I work? ",
  answer: "Panamax"
},
{
  question: "What is my surname? ",
  answer: "Parikh"
},
{
  question: "What is my mother's name? ",
  answer: "Urvi"
}


]


var highScore = [{
  name: "Dhairya",
  score: 2
},
{
  name: "Raj",
  score: 1
}
]






for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}



for (var i = 0; i < highScore.length; i++) {
  var current = highScore[i];

  if (current.score < score) {
    console.log("You have beaten the time of " + current.name + "!");
  }

}
console.log("Your score is: " + score);



