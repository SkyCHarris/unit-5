/* 
    Generate a Random Number Between 1 and
    a User Input Number Program
*/

// Ask user for low and high numbers
const userLowNumber = prompt('Type in any low number.')
const userHighNumber = prompt('Type in any high number');


// Convert the user's string inputs to numeric values
const userLowNumeric = ( +userLowNumber );
const userHighNumeric = ( +userHighNumber );

// Conditional statement to check for validity of number
if (userLowNumeric && userHighNumeric) {
    // Generate a random number using user input and Math.random method, between users low and high inputs, based on subtracting and adding low and high numerics
    const randomNumber = Math.floor( Math.random() * (userHighNumeric - userLowNumeric + 1) ) + userLowNumeric;

    // Log message listing the random number between user's low input and high input numbers
    console.log(`${randomNumber} is a random number between ${userLowNumeric} and ${userHighNumeric} `);
} else {
    console.log(`You need to provide two numbers. Try again.`);
}