let display = document.getElementById('display');

let equalsTest = 1;

// all buttons change color as mouse passes over and reverts when mouse leaves button's space
let buttons = document.querySelectorAll('.button')
for (let button of buttons) {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "red";
    })
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "#ffef00";
    })
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = "green";
    })
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = "red";
    })
}

// clicked number buttons show up on display, and clear display if equals has been clicked 
let numbuttons = document.querySelectorAll('.num.button');

for (let button of numbuttons) {
    button.addEventListener('click', () => {
        if (equalsTest === 0) {
            display.innerText += button.innerText;
        } else {
            display.innerText = button.innerText;
            equalsTest = 0;
        }
    })
}

// operator button clicks add to display and change equalstest to 0
let operators = document.querySelectorAll('.op.button')

for (let button of operators) {
    button.addEventListener('click', () => {
        display.innerText += button.innerText;
        equalsTest = 0;
    })
}

// equals click evaluates display string and changes equalstest to 1
let equals = document.getElementById('equals')

equals.addEventListener('click', () => {
    try {
        display.innerText = eval(display.innerText);
        equalsTest = 1;
    }
    catch (error) {
        display.innerText = 'INVALID ENTRY';
        equalsTest = 1;
    }
})


// clear button click clears display
let clear = document.getElementById('clear')

clear.addEventListener('click', () => {
    display.innerText = '';
    equalsTest = 1;
})

// decimal button click on empty display shows '0.'
let decimal = document.getElementById('decimal')

decimal.addEventListener('click', () => {
    if (equalsTest !== 0) {
        display.innerText = '0' + decimal.innerText;
        equalsTest = 0;
    } else if (display.innerText.includes('.')) {
        display.innerText = display.innerText;
    } else {
        display.innerText += decimal.innerText;
    }
})