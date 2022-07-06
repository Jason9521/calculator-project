
// NOTES FOR FUTURE CHANGES


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

let interfaceNumber = ''
let storedOperator = ''
let storedNumberOne = ''
let storedNumberTwo = ''

let numPressed = false
let symPressed = false
let isTypingValue = false



// Button Functionality

clearBtn.addEventListener("click", function() {
    storedNumberTwo = ''
    storedNumberOne = ''
    interfaceText.textContent = 0 
})

oneBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "1"
    interfaceText.textContent = interfaceNumber
})

twoBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "2"
    interfaceText.textContent = interfaceNumber
})

threeBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "3"
    interfaceText.textContent = interfaceNumber
})

fourBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "4"
    interfaceText.textContent = interfaceNumber
})

fiveBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "5"
    interfaceText.textContent = interfaceNumber
})

sixBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "6"
    interfaceText.textContent = interfaceNumber
})

sevenBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "7"
    interfaceText.textContent = interfaceNumber
})

eightBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "8"
    interfaceText.textContent = interfaceNumber
})

nineBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "9"
    interfaceText.textContent = interfaceNumber
})

zeroBtn.addEventListener("click", function() {
    resetDisplay()
    numPressed = true
    symPressed = false
    isTypingValue = true
    interfaceNumber += "0"
    interfaceText.textContent = interfaceNumber
})

plusBtn.addEventListener("click", function() {

    numPressed = false
 
   if (isTypingValue == false) {
        storedOperator = '+'
    }
  
    // Collects first value of equation 
    if (storedNumberOne === '') {
        storedNumberOne = collectValue(interfaceNumber, storedNumberOne)
        storedOperator = '+'
    }
    // Changes the storedOperator without executing calculation
    else if (symPressed) {
        storedOperator = '+'
    }
    // Executes calculation
    else if (symPressed == false) {
        getResult()
        storedOperator = '+'
    }

    numPressed = false
})

minusBtn.addEventListener("click", function() {

    numPressed = false

    if (isTypingValue == false) {
        storedOperator = '-'
    }
    
    if (storedNumberOne === '') {
        storedNumberOne = collectValue(interfaceNumber, storedNumberOne)
        storedOperator = '-'
    }

    else if (symPressed) {
        storedOperator = '-'
    }

    else if (symPressed == false) {
        getResult()
        storedOperator = '-'
    }
})

multiplyBtn.addEventListener('click', function() {

    numPressed = false
    
    if (isTypingValue == false) {
        storedOperator = '*'
    }
    
    if (storedNumberOne === '') {
        storedNumberOne = collectValue(interfaceNumber, storedNumberOne)
        storedOperator = '*'
    }

    else if (symPressed) {
        storedOperator = '*'
    }

    else if (symPressed == false) {
        getResult()
        storedOperator = '*'  
    } 
})

divideBtn.addEventListener('click', function() {

    numPressed = false

    if (isTypingValue == false) {
        storedOperator = '/'
   }

    if (storedNumberOne === '') {
        storedNumberOne = collectValue(interfaceNumber, storedNumberOne)
        storedOperator = '/'
    }

    else if (symPressed) {
        storedOperator = '/'
    }

    else if (symPressed == false) {
        getResult()
        storedOperator = '/'
    }

})

// percentBtn.addEventListener('click', function() {
//     let storedOneParse = parseInt(storedNumberOne)

//     if (storedNumberOne == '') {
//         storedNumberOne = percentage(parseInt(interfaceNumber))
//     }

//     else {
//         storedNumberOne = percentage(storedOneParse)
//     }
    
//     displayValue(storedNumberOne)
//     storedNumberTwo = ''
//     console.log(storedNumberOne)
// })

posNegBtn.addEventListener('click', function() {

})

decimalBtn.addEventListener('click', function() {

})

equalBtn.addEventListener("click", function() {
    getResult()
})

//  Functions

function collectValue(passedValue, recipientValue) {
    recipientValue = passedValue
    numPressed = false
    return recipientValue
}

function displayValue(value) {
    return interfaceText.textContent = value.toString()
}

function resetDisplay() {
    if (numPressed == false) {
        interfaceNumber = ''
        numPressed = true
    }
}

function calculate(valueOne, valueTwo) {

    let result

    if (storedOperator == "+") {
        result = add(valueOne, valueTwo)
    }

    else if (storedOperator == "-") {
        result = subtract(valueOne, valueTwo)
    }

    else if (storedOperator == "*") {
        result = multiply(valueOne, valueTwo)
    }

    else if (storedOperator == "/") {
        result = divide(valueOne, valueTwo)
    }

    return result
}

function getResult() {

    storedNumberTwo = collectValue(interfaceNumber, storedNumberTwo)

    let storedOneParse = parseInt(storedNumberOne)
    let storedTwoParse = parseInt(storedNumberTwo)

    storedNumberOne = calculate(storedOneParse, storedTwoParse)
    displayValue(storedNumberOne)
    
    storedNumberTwo = ''
    symPressed = true
    isTypingValue = false   
}

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

function percentage(a) {
    return a / 100
}

// fix resetDisplay