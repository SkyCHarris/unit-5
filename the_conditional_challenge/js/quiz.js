/* 
  A JavaScript quiz which
  which tests the user's
  knowledge of rocky mountain
  state capitols, and returns
  scores and ranks accordingly!
*/

// Initial score variable
let score = 0;

// Correct answers to quiz questions, stored in variables
const answer1 = "Salt Lake City";
const answer2 = "Helena";
const answer3 = "Boise";
const answer4 = "Olympia";
const answer5 = "Cheyenne";

// Referencing the HTML document
document.querySelector('main');


/* 
  Quiz questions.
  Held in conditional statements.
*/
const capitolGuess1 = prompt("What is the capitol of the state of Utah?");
if (capitolGuess1 === answer1) {
  capitolGuess1 === true;
  console.log(score +=1 );
} else {
  console.log(score);
}

const capitolGuess2 = prompt("What is the capitol of the state of Montana?");
if (capitolGuess2 === answer2) {
  capitolGuess2 === true;
  console.log(score +=1 );
} else {
  console.log(score);
}


const capitolGuess3 = prompt("What is the capitol of the state of Idaho?");
if (capitolGuess3 === answer3) {
  capitolGuess3 === true;
  console.log(score +=1 );
} else {
  console.log(score);
}


const capitolGuess4 = prompt("What is the capitol of the state of Washington?");
if (capitolGuess4 === answer4) {
  capitolGuess4 === true;
  console.log(score +=1 );
} else {
  console.log(score);
}


const capitolGuess5 = prompt("What is the capitol of the state of Wyoming?");
if (capitolGuess5 === answer5) {
  capitolGuess5 === true;
  console.log(score +=1 );
} else {
  console.log(score);
}

// Player rank, stored in variables
const gold = "<h2>Congrats! You received the Gold award!</h2>";
const silver = "<h2>Great job. You received the Silver award!</h2>";
const bronze = "<h2>Not bad. You got Bronze.</h2>";
const noCrown = "<h2>Good luck next time! No Crown this time.</h2>";


// Player rank, printed to html on web page.
if (score === 5) {
  document.querySelector('main').innerHTML = gold;
} else if (score === 3 || score === 4) {
  document.querySelector('main').innerHTML = silver;
} else if (score === 1 || score === 2) {
  document.querySelector('main').innerHTML = bronze;
} else if (score === 0) {
  document.querySelector('main').innerHTML = noCrown;
} else {
  document.querySelector('main').innerHTML = "Data Insufficient, please try again";
}


