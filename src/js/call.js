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

  