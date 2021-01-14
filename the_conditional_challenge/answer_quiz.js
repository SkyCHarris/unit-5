/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let score = 0;

// 2. Store the rank of a player

let rank = '';

// 3. Select the <main> HTML element

const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const capitolGuess1 = prompt("What is the capitol of the state of Utah?");
if (capitolGuess1.toUpperCase() === 'SALT LAKE CITY') {
  correct += 1;
}
const capitolGuess2 = prompt("What is the capitol of the state of Montana?");
if (capitolGuess2.toUpperCase() === 'MONTANA') {
  correct += 1;
}
const capitolGuess3 = prompt("What is the capitol of the state of Idaho?");
if (capitolGuess3.toUpperCase() === 'BOISE') {
  correct += 1;
}
const capitolGuess4 = prompt("What is the capitol of the state of Washington?");
if (capitolGuess4.toUpperCase() === 'OLYMPIA') {
  correct += 1;
}
const capitolGuess5 = prompt("What is the capitol of the state of Wyoming?");
if (capitolGuess5.toUpperCase() === 'CHEYENNE') {
  correct += 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


if ( correct === 5 ) {
  rank = "Gold";
} else if ( correct >= 3 ) {
  rank = "Silver";
} else if ( correct >= 2 ) {
  rank = "Bronze";
} else {
  rank = "None :(";
}


// 6. Output results to the <main> element
main.innerHTML = `
  <h2>You got ${correct} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${rank}</strong></p>
  `