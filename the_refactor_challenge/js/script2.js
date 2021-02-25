
// Variables
let html = '';
let red;
let green;
let blue;
let randomRGB;

let randomColor;


function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 256);
    return randomColor;
}

console.log(getRandomColor());

// // For Loop
for (let i = 1; i <= 10; i++) {
    getRandomColor();
    randomRGB = `rgb( ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;