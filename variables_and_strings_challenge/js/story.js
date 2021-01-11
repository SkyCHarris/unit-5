// 1. Declare variables and capture input.


// 2. Combine the input with other words to create a story.


// 3. Display the story as a <p> inside the <main> element.

const adjective1 = prompt("Type an adjective:");
const noun1 = prompt("Type a noun:");
const verb1 = prompt("Type a verb:");
const noun2 = prompt("Type another noun:");
const adjective2 = prompt("Type another adjective:");
const noun3 = prompt("Type another noun:");
const verb2 = prompt("Type another verb:");

const message = `<p>Once upon a time, a very ${adjective1} ${noun1} loved to ${verb1} 
with his ${noun2}. But a ${adjective2} ${noun3} would always ${verb2} him!
And that was the end of him. The End.</p>`;

document.querySelector('main').innerHTML = message;

