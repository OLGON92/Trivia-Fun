import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Host from './js/trivia.js'
import Trivia from './js/call.js'


//Business Logic
async function triviaStuff(category, difficulty, type) {
  const response = await Trivia.triviaStuff(category, difficulty, type);
  console.log(response);
  if (response.result) {
    printElements(response, category, difficulty, type);
  } else {
    printError(response, category, difficulty, type);
  }
}

function printElements (response, category, difficulty, type) {
  
}

triviaStuff()

getApi()

/*function start()
{
let One = new Host(apiCall());
console.log(One)
console.log(One.funky());
/*let quiz = One.funky();
console.log(quiz)

document.getElementById("answer1").innerHTML = (quiz[1]);*/

window.addEventListener("load", start);

