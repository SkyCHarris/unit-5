
// Variables
let html = '';
let red;
let green;
let blue;
let randomRGB;

let randomColor;


function getRandomColor (red, blue, green) {
    randomColor = Math.floor(Math.random() * 256);
}

// For Loop
for (let i = 1; i <= 10; i++) {
    randomColor.getRandomColor.(red, blue, green);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;