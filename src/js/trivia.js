export default class Host {
  constructor(data) { 
    this.data = data;
  }

  funky(num) 
  {
    let returnarray = [0, 1, 2, 3, 4, 5];
    returnarray[0] = this.data.results[num].question;
    let arraynums = [1, 2, 3, 4];
  
    let i = 4;
    let j = 0;
    let temp;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      temp = arraynums[i];
      arraynums[i] = arraynums[j];
      arraynums[j] = temp;
    }
    returnarray[arraynums[0]] = this.data.results[num].correct_answer;
    returnarray[arraynums[1]] = this.data.results[num].incorrect_answers[0];
    returnarray[arraynums[2]] = this.data.results[num].incorrect_answers[1];
    returnarray[arraynums[3]] = this.data.results[num].incorrect_answers[2];
    returnarray[5] = arraynums[0];
   
    return returnarray;
  }
}