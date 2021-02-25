let html = '';
const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB() {
    const color = `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()} )`;
    return color;
}

for ( let i = 1; i <= 10; i++ ) {
    html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;