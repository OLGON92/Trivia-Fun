import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Host from './js/trivia.js'
import Call from './js/call.js'
import Teach from './js/teacher.js'

window.addEventListener("load", waitforstart);

let score = 0;

function waitforstart()
{
  //These are being grabbed from the HTML when the page loads
  const startQuiz = document.getElementById("startBtn")

  startQuiz.addEventListener("click", start)
}

function start()
{
  let category = document.getElementById("category").value; 
  let difficulty = document.getElementById("difficulty").value;

  triviaStuff(category, difficulty);
}

//This handles making the main object, as well as telling call.js to make the call
async function triviaStuff(category, difficulty) {
  const response = await Call.callStuff(category, difficulty);
  console.log(response);
  if (response.results) {
    let One = new Host(response);
    show(One);
  } else {
    printError(response, category, difficulty)
}
}

function printError (response, category, difficulty) {
   document.querySelector('#question').innerText = `There was an error processing ${category}, ${difficulty}, or your ${response}. Please refresh and try again.`
}



function show(One)
{
//sets the stuff for the first question
let infoArray = One.funky();
document.getElementById("question").innerHTML = (infoArray[0]);
document.getElementById("here1").innerHTML = (infoArray[1]);
document.getElementById("here2").innerHTML = (infoArray[2]);
document.getElementById("here3").innerHTML = (infoArray[3]);
document.getElementById("here4").innerHTML = (infoArray[4]);


let options = [0, 1, 2, 3]

//sets the indexes in options to be equal to the various html elements
for(let i = 0; i < 4; i++)
{
  let answer = `answer${i+1}`
  options[i] = document.getElementById(answer);
}

console.log(options);
selection(infoArray[5], options) 
}



function selection(correct, options)
{
  //listens for when the user clicks on one of the options, then goes to see if they got it correct

let jerry0 = () => scorer(options[0], correct, score);
let jerry1 = () => scorer(options[1], correct, score);
let jerry2 = () => scorer(options[2], correct, score);
let jerry3 = () => scorer(options[3], correct, score);

  options[0].addEventListener("click", jerry0)
  options[1].addEventListener("click", jerry1)
  options[2].addEventListener("click", jerry2)
  options[3].addEventListener("click", jerry3)


}



function scorer(answer, correct, score)
{
  //if the player gets the question correct, add one to the score. 
  let result;
  let gMan = new Teach(answer, correct);

  result = gMan.moment()
  if (result)
  {
    score += 1;
  }
  console.log(score)
}


