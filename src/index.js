import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Host from './js/trivia.js'
import Call from './js/call.js'



//Business Logic
async function triviaStuff(category, difficulty, type) {
  const response = await Call.callStuff(category, difficulty, type);
  console.log(response);
   if (response.result) {
     console.log("reached line 15")
     response = JSON.parse(response);
   } else {
     printError(response, category, difficulty, type);
   }
  response.then(() => {console.log("Response Full")})
}

function printError (response, category, difficulty, type) {
    console.log(`There was an ${response}`);
}



function start()
{
let One = new Host(triviaStuff(15, "medium", "multiple"));
console.log(One)
console.log(One.funky());
/*let quiz = One.funky();
console.log(quiz)
  

triviaStuff()

getApi()

document.getElementById("answer1").innerHTML = (quiz[1]);*/

}

window.addEventListener("load", start);

