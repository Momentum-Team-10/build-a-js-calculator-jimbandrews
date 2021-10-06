let display = document.getElementById('display');

var equalsTest = 0;

// create event for all number and operator buttons
let buttons = document.querySelectorAll('.button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        if (equalsTest === 0) {
            display.innerText += button.innerText;
        } else {
            display.innerText = button.innerText;
            equalsTest = 0;
        }
    })
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "red";
    })
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "#ffef00";
    })
}

// create event for equals button
let equals = document.getElementById('equals')

equals.addEventListener('click', () => {
    display.innerText = eval(display.innerText);
    equalsTest = 1;
})

// create event for clear button
let clear = document.getElementById('clear')

clear.addEventListener('click', () => {
    display.innerText = ''
})