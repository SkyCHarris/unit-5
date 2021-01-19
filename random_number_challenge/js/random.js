/* 
    Generate a Random Number Between 1 and
    a User Input Number Program
*/

// Ask user for low and high numbers
const userLowNumber = prompt('Type in any low number.')
const userHighNumber = prompt('Type in any high number');


// Convert the user's string input to a numeric value
const userLowNumeric = ( +userLowNumber );
const userHighNumeric = ( +userHighNumber );

// Conditional statement to check for validity of number
if (userHighNumber) {
    // Generate a random number using user input and Math.random method (add 1 to ensure result is at least 1)
    const randomNumber = Math.floor((highNumber - lowNumber) * Math.random() + 1) + lowNumber;

    // Log message listing the random number between 1 and the user's input number
    console.log(`${randomNumber} is a random number between ${userLowNumber} and ${userNumeric} `);
} else {
    console.log(`You need to provide a number. Try again.`);
}