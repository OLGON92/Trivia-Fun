import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Host from './js/trivia.js';
import Call from './js/call.js';

//Business Logic
let questions = document.getElementById('question');
let choices = document.getElementById('here');

async function triviaStuff() {
  const response = await Call.triviaStuff();
  console.log(response);
  if (response.results) {
    printElements(response.results[0]);
  } else {
    printError(response);
  }
}

function printElements(results) {
  let correctAnswer = results.correct_answer;
  let incorrectAnswer = results.incorrect_answers;
  let optionsIt = incorrectAnswer;
  optionsIt.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  console.log(incorrectAnswer);
  console.log(correctAnswer);
  questions.innerHTML = `${results.question}`;
  choices.innerHTML = `${optionsIt.map((option, index) =>`<p>${index + 1}.<input class="placeHolder" type="radio" id="answer1" name="answer-choice" value="answer1">
  <label class="choice-option">${option}</label></p>`).join('')}`;

}

function printError() {
}

triviaStuff();
printElements();
