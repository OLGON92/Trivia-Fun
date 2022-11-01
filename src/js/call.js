export default class Call {
  static async triviaStuff(category, level, type) {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple`);
      const jsonResponse = await response.json();
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error (errorMessage);
      }
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}
