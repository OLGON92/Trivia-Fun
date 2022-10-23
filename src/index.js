import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


async function apiCall(){
  let response = await fetch('https://opentdb.com/api.php?amount=10');
  console.log(response)
  let data = await response.json()
  console.log(data)
  triviaData(data)
}

function triviaData(data){}