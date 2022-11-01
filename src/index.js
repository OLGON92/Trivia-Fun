import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Host from './js/trivia.js'
import Call from './js/call.js'
import Teach from './js/teacher.js'



//Business Logic
async function triviaStuff() {
  const response = await Call.callStuff();
  console.log(response);
  if (response.results) {
    //printElements(response.results[0]);
    let One = new Host(response);
    show(One);
  } else {
    printError(response);
  }
}


function printError (response, category, difficulty, type) {
    console.log(`There was an ${response}`);
}



function show(One)
{
let infoArray = One.funky();



document.getElementById("question").innerHTML = (infoArray[0]);

let options = [0, 1, 2, 3]

for(let i = 0; i > 4; i++)
{
  let answer = `answer${i}`
  options[i] = document.getElementById(answer)
}
}

function selection(correct, options)
{
  options[0].addEventListener("click", Teach.moment(options[0], correct))
  options[1].addEventListener("click", Teach.moment(options[1], correct))
  options[2].addEventListener("click", Teach.moment(options[2], correct))
  options[3].addEventListener("click", Teach.moment(options[3], correct))
}

window.addEventListener("load", triviaStuff);

