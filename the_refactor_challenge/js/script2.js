let html = '';
let red;
let green;
let blue;
let randomRGB;

const main = document.querySelector('main');

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);

randomRGB = `rgb( ${red}, ${green}, ${blue} )`;


// For Loop

for (let i = 1; i <= 10; i++) {
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

main.innerHTML = html;