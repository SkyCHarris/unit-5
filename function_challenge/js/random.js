/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

// Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// Call the function and pass it different values


function getRandomNumber(lower, upper) {
    const randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    if ( isNaN(lower) || isNaN(upper)) {
        throw Error('Both arguments must be numbers.');
    }
    return randomNumber;
}

console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(10, 100));
console.log(getRandomNumber(10, 'five'));