// TO -DO

// numPressed and symPressed variables for button control


// Global Variables

const interfaceText = document.getElementById("interface-text");

const oneBtn = document.getElementById("one-button");
const twoBtn = document.getElementById("two-button");
const threeBtn = document.getElementById("three-button");
const fourBtn = document.getElementById("four-button");
const fiveBtn = document.getElementById("five-button");
const sixBtn = document.getElementById("six-button");
const sevenBtn = document.getElementById("seven-button");
const eightBtn = document.getElementById("eight-button");
const nineBtn = document.getElementById("nine-button");
const zeroBtn = document.getElementById("zero-button");

const plusBtn = document.getElementById("plus-button");
const minusBtn = document.getElementById("minus-button");
const multiplyBtn = document.getElementById("multiply-button");
const divideBtn = document.getElementById("divide-button");
const decimalBtn = document.getElementById("decimal-button");
const equalBtn = document.getElementById("equal-button");
const clearBtn =  document.getElementById("clear-button");
const posNegBtn = document.getElementById("pos-neg-button");
const percentBtn = document.getElementById("percentage-button");


// Calculator Functionality

let storedNumber = '0'
let currentNumber = ''
let storedOperator = ''
let continueEquation = false

let numPressed
let symPressed



clearBtn.addEventListener("click", function() {
    currentNumber = ''
    storedNumber = ''
    interfaceText.textContent = 0 
})

oneBtn.addEventListener("click", function() {
    currentNumber += "1"
    interfaceText.textContent = currentNumber
})

twoBtn.addEventListener("click", function() {
    currentNumber += "2"
    interfaceText.textContent = currentNumber
})

threeBtn.addEventListener("click", function() {
    currentNumber += "3"
    interfaceText.textContent = currentNumber
})

fourBtn.addEventListener("click", function() {
    currentNumber += "4"
    interfaceText.textContent = currentNumber
})

fiveBtn.addEventListener("click", function() {
    currentNumber += "5"
    interfaceText.textContent = currentNumber
})

sixBtn.addEventListener("click", function() {
    currentNumber += "6"
    interfaceText.textContent = currentNumber
})

sevenBtn.addEventListener("click", function() {
    currentNumber += "7"
    interfaceText.textContent = currentNumber
})

eightBtn.addEventListener("click", function() {
    currentNumber += "8"
    interfaceText.textContent = currentNumber
})

nineBtn.addEventListener("click", function() {
    currentNumber += "9"
    interfaceText.textContent = currentNumber
})

zeroBtn.addEventListener("click", function() {
    currentNumber += "0"
    interfaceText.textContent = currentNumber
})

plusBtn.addEventListener("click", function() {

    const storedParse = parseInt(storedNumber)
    const currentParse = parseInt(currentNumber)
    
    if (continueEquation) {
        storedOperator = "+"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
        continueEquation = false
    }

    else {
        storedNumber = add(storedParse, currentParse);
        storedOperator = "+"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
    } 
})

minusBtn.addEventListener("click", function() {


    const storedParse = parseInt(storedNumber)
    const currentParse = parseInt(currentNumber)
    
    if (continueEquation) {
        storedOperator = "-"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
        continueEquation = false
    }

    else {
        storedNumber = subtract(storedParse, currentParse);
        storedOperator = "-"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
    } 
})

multiplyBtn.addEventListener('click', function() {

    if (storedNumber == '0') {
        storedNumber = '1'
    }

    console.log(currentNumber)
    console.log(storedNumber)
    
    const storedParse = parseInt(storedNumber)
    const currentParse = parseInt(currentNumber)

    if (continueEquation) {
        storedOperator = "*"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
        continueEquation = false
    }

    else {
        storedNumber = multiply(storedParse, currentParse).toString();
        storedOperator = "*"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
    } 
})

divideBtn.addEventListener('click', function() {

    if (storedNumber == '0') {
        storedNumber = '1'
    }

    // console.log(currentNumber)
    // console.log(storedNumber)


    const storedParse = parseInt(storedNumber)
    const currentParse = parseInt(currentNumber)

    if (continueEquation) {
        storedOperator = "/"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
        continueEquation = false
    }

    if (storedNumber == '1') {
        storedNumber = divide(currentParse, storedParse).toString();
        storedOperator = "/"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
    }

    else {
        storedNumber = divide(storedParse, currentParse).toString();
        storedOperator = "/"
        interfaceText.textContent = storedNumber.toString()
        currentNumber = ''
    } 
})

equalBtn.addEventListener("click", function() {

    let result
   
    const storedParse = parseInt(storedNumber)
    const currentParse = parseInt(currentNumber)

    if (storedOperator == "+") {
        result = add(storedParse, currentParse)
    }

    else if (storedOperator == "-") {
        result = subtract(storedParse, currentParse)
    }

    else if (storedOperator == "*") {
        result = multiply(storedParse, currentParse)
    }

    else if (storedOperator == "/") {
        result = divide(storedParse, currentParse)
    }

    storedNumber = result.toString()
    interfaceText.textContent = storedNumber 
    continueEquation = true
})


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

// currentNumber is number shown on interface (string)

// currentParse is number on interface changed from string to an actual number

// storedNumber is number stored for later use (string)

// storedParse is stored number changed from a string to an actual number

    // console.log(currentParse)
    // console.log(storedParse)
    // console.log(currentNumber)
    // console.log(storedNumber)