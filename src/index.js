import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Host from './js/trivia.js';
import Call from './js/call.js';

//Business Logic
let questions = document.getElementById('question')
let choices = document.getElementsById('answer');

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
  options.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  console.log(incorrectAnswer);
  console.log(correctAnswer);
  questions.innerHTML = `${results.question}`
  choices.innerHTML = `${optionIt.map((option.index) => `
  <li> ${index + 1}. <label class="choice-option">${optionIt}</label>`).join("")}`;

}

function printError(error) {

} 

triviaStuff();
printElements();
