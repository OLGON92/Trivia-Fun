export default class Call {
  static async callStuff(category, difficulty, type) {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple`);
      const jsonResponse = await response.json();
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        console.log(errorMessage);
        throw new Error (errorMessage);
      }
      console.log(jsonResponse);
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}

  /*let response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple');
  console.log(response)
  //let data = await response.json()
  let request = new XMLHttpRequest();

  const url = `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`;
  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      console.log(response);
    }
    else 
    {
      console.log(`Error is ${this.status}`)
    }
  });

  request.open("GET", url, true);
  request.send();
  console.log(response);*/

  //return response;
