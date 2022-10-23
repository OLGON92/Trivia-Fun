import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Host from './js/trivia.js'

window.addEventListener("load", start);

async function apiCall(){
  let response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple');
  console.log(response)
  let data = await response.json()
  return data;
}

function start()
{
let One = new Host(apiCall());
console.log(One)
console.log(One.func);
}


