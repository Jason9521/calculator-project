
// Global Variables

const interfaceText = document.getElementById("interface-text");
const interfaceEquation = document.getElementById("interface-equation")
const buttons = document.querySelector("button")

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
const backSpaceBtn = document.getElementById("backspace-button")

let interfaceNumber = ''
let storedOperator = ''
let storedNumberOne = ''
let storedNumberTwo = ''
let equationStep = 0

let equalPressed = false
let numPressed = true
let symPressed = false
let isTypingValue = false
let negative = false
let positive = true

// Button Functionality

clearBtn.addEventListener("click", function() {
    clearData()
})

oneBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("1")
})

twoBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("2")
})

threeBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("3")
})

fourBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("4")
})

fiveBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("5")
})

sixBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("6")
})

sevenBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("7")
})

eightBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("8")
})

nineBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("9")
})

zeroBtn.addEventListener("click", function() {
    resetDisplay()
    getDigit("0")
})

posNegBtn.addEventListener('click', function() {
   posNeg()
})

decimalBtn.addEventListener('click', function() {
    getDecimal()
})

backSpaceBtn.addEventListener('click', function() {
    interfaceNumber = interfaceNumber.substring(0, interfaceNumber.length - 1)
    interfaceText.textContent = interfaceNumber
})

plusBtn.addEventListener("click", function() {
    getOperator("+") 
})

minusBtn.addEventListener("click", function() {
    getOperator("-")
})

multiplyBtn.addEventListener('click', function() {
    getOperator("*")
})

divideBtn.addEventListener('click', function() {
    getOperator("/")
})

percentBtn.addEventListener('click', function() {
    getPercentage()
})

equalBtn.addEventListener("click", function() {
    getResult()
    equalPressed = true
})

// Keyboard Functionality

document.addEventListener("keydown", function(e) {
    if (e.code == "Digit1" || e.code == "Numpad1") {
        resetDisplay()
        getDigit("1")
        oneBtn.style.transform = "translateY(8%)"
        oneBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit2"  || e.code == "Numpad2") {
        resetDisplay()
        getDigit("2")
        twoBtn.style.transform = "translateY(8%)"
        twoBtn.style.backgroundColor = "gold"
    }
    
    else if (e.code == "Digit3"  || e.code == "Numpad3") {
        resetDisplay()
        getDigit("3")
        threeBtn.style.transform = "translateY(8%)"
        threeBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit4"  || e.code == "Numpad4") {
        resetDisplay()
        getDigit("4")
        fourBtn.style.transform = "translateY(8%)"
        fourBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit5") {

        if (e.shiftKey) {
            getPercentage()
            percentBtn.style.transform = "translateY(8%)"
            percentBtn.style.backgroundColor = "plum"
        }

        else {
            resetDisplay()
            getDigit("5")
            fiveBtn.style.transform = "translateY(8%)"
            fiveBtn.style.backgroundColor = "gold"
        }
    }

    else if (e.code == "Numpad5") {
        resetDisplay()
        getDigit("5")
        fiveBtn.style.transform = "translateY(8%)"
        fiveBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit6"  || e.code == "Numpad6") {
        resetDisplay()
        getDigit("6")
        sixBtn.style.transform = "translateY(8%)"
        sixBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit7"  || e.code == "Numpad7") {
        resetDisplay()
        getDigit("7")
        sevenBtn.style.transform = "translateY(8%)"
        sevenBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit8") {
        if (e.shiftKey) {
            getOperator("*")
            multiplyBtn.style.transform = "translateY(8%)"
            multiplyBtn.style.backgroundColor = "plum"
        }

        else {
            resetDisplay()
            getDigit("8")
            eightBtn.style.transform = "translateY(8%)"
            eightBtn.style.backgroundColor = "gold"
        }
    }

    else if (e.code == "Numpad8") {
        resetDisplay()
        getDigit("8")
        eightBtn.style.transform = "translateY(8%)"
        eightBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit9"  || e.code == "Numpad9") {
        resetDisplay()
        getDigit("9")
        nineBtn.style.transform = "translateY(8%)"
        nineBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Digit0"  || e.code == "Numpad0") {
        resetDisplay()
        getDigit("0")
        zeroBtn.style.transform = "translateY(8%)"
        zeroBtn.style.backgroundColor = "gold"
    }

    else if (e.code == "Delete") {
        clearData()
        clearBtn.style.transform = "translateY(8%)"
        clearBtn.style.backgroundColor = "tomato"
    }
    
    else if (e.code == "Backspace") {
        interfaceNumber = interfaceNumber.substring(0, interfaceNumber.length - 1)
        interfaceText.textContent = interfaceNumber
        backSpaceBtn.style.transform = "translateY(8%)"
        backSpaceBtn.style.backgroundColor = "tomato"
    }

    else if (e.code == "Slash" || e.code == "NumpadDivide") {
        getOperator("/")
        divideBtn.style.transform = "translateY(8%)"
        divideBtn.style.backgroundColor = "plum"
    }

    else if (e.code == "NumpadMultiply") {
        getOperator("*")
        multiplyBtn.style.transform = "translateY(8%)"
        multiplyBtn.style.backgroundColor = "plum"
    }

    else if (e.code == "Minus" || e.code == "NumpadSubtract") {
        getOperator("-")
        minusBtn.style.transform = "translateY(8%)"
        minusBtn.style.backgroundColor = "plum"
    }

    else if (e.code == "NumpadAdd") {
        getOperator("+")
        plusBtn.style.transform = "translateY(8%)"
        plusBtn.style.backgroundColor = "plum"
    }

    else if (e.code == "Equal") {
        if (e.shiftKey) {
            getOperator("+")
            plusBtn.style.transform = "translateY(8%)"
            plusBtn.style.backgroundColor = "plum"
        }
        else {
            getResult()
            equalPressed = true
            equalBtn.style.transform = "translateY(8%)"
            equalBtn.style.backgroundColor = "greenyellow"
        }
    }

    else if (e.code == "Enter" || e.code == "NumpadEnter") {
        getResult()
        equalPressed = true
        equalBtn.style.transform = "translateY(8%)"
        equalBtn.style.backgroundColor = "greenyellow"
    }

    else if (e.code == "Period") {
        getDecimal()
        decimalBtn.style.transform = "translateY(8%)"
        decimalBtn.style.backgroundColor = "plum"
    }

    else if (e.code == "ControlRight" || e.code == "ControlLeft") {
        posNeg()
        posNegBtn.style.transform = "translateY(8%)"
        posNegBtn.style.backgroundColor = "plum"
    }
})


document.addEventListener("keyup", function(e) {
    if (e.code == "Digit1" || e.code == "Numpad1") {
        oneBtn.style.transform = "translateY(0%)"
        oneBtn.style.backgroundColor = "#fff"
    }

    else if (e.code == "Digit2" || e.code == "Numpad2") {
        twoBtn.style.transform = "translateY(0%)"
        twoBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Digit3" || e.code == "Numpad3") {
        threeBtn.style.transform = "translateY(0%)"
        threeBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Digit4" || e.code == "Numpad4") {
        fourBtn.style.transform = "translateY(0%)"
        fourBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Digit5") {

        if (e.shiftKey) {
            percentBtn.style.transform = "translateY(0%)"
            percentBtn.style.backgroundColor = "#fff"
        }
        else {
            fiveBtn.style.transform = "translateY(0%)"
            fiveBtn.style.backgroundColor = "#fff"
    }}

    else if (e.code == "Numpad5") {
        fiveBtn.style.transform = "translateY(0%)"
        fiveBtn.style.backgroundColor = "#fff"
    }

    else if (e.code == "Digit6" || e.code == "Numpad6") {
        sixBtn.style.transform = "translateY(0%)"
        sixBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Digit7" || e.code == "Numpad7") {
        sevenBtn.style.transform = "translateY(0%)"
        sevenBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Digit8") {

        if (e.shiftKey) {
            multiplyBtn.style.transform = "translateY(0%)"
            multiplyBtn.style.backgroundColor = "#fff"
        }
        else {
            eightBtn.style.transform = "translateY(0%)"
            eightBtn.style.backgroundColor = "#fff"
    }}

    else if (e.code == "Numpad8") {
        eightBtn.style.transform = "translateY(0%)"
        eightBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Digit9" || e.code == "Numpad9") {
        nineBtn.style.transform = "translateY(0%)"
        nineBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Digit0" || e.code == "Numpad0") {
        zeroBtn.style.transform = "translateY(0%)"
        zeroBtn.style.backgroundColor = "#fff"
    }

    else if (e.code == "Delete" ) {
        clearBtn.style.transform = "translateY(0%)"
        clearBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Backspace" ) {
        backSpaceBtn.style.transform = "translateY(0%)"
        backSpaceBtn.style.backgroundColor = "#fff"
    }

    else if (e.code == "Slash" || e.code == "NumpadDivide") {
        divideBtn.style.transform = "translateY(0%)"
        divideBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "NumpadMultiply" ) {
        multiplyBtn.style.transform = "translateY(0%)"
        multiplyBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Minus" || e.code == "NumpadSubtract") {
        minusBtn.style.transform = "translateY(0%)"
        minusBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Equal") {
        if (e.shiftKey) {
            plusBtn.style.transform = "translateY(0%)"
            plusBtn.style.backgroundColor = "#fff"
        }
        else {
            equalBtn.style.transform = "translateY(0%)"
            equalBtn.style.backgroundColor = "#fff"
        }
    }
    else if (e.code == "Enter" || e.code == "NumpadEnter") {
        equalBtn.style.transform = "translateY(0%)"
        equalBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "NumpadAdd" ) {
        plusBtn.style.transform = "translateY(0%)"
        plusBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "Period" ) {
        decimalBtn.style.transform = "translateY(0%)"
        decimalBtn.style.backgroundColor = "#fff"
    }
    else if (e.code == "ControlRight" || e.code == "ControlLeft") {
        posNegBtn.style.transform = "translateY(0%)"
        posNegBtn.style.backgroundColor = "#fff"
    }
})


//  Functions


function collectValue(passedValue, recipientValue) {
    recipientValue = passedValue.toString()
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

function clearData() {
    storedNumberTwo = ''
    storedNumberOne = ''
    interfaceNumber = ''
    interfaceText.textContent = 0
    interfaceEquation.textContent = 0
    equationStep = 0 
}

function getDigit(num) {
    if (equalPressed) {
        clearData()
        equalPressed = false
    }

    if (interfaceNumber.length <= 20) {
        numPressed = true
        symPressed = false
        isTypingValue = true
        interfaceNumber += num
        interfaceText.textContent = interfaceNumber
}}

function getDecimal() {
    if (!interfaceNumber.includes(".")) {
        resetDisplay()
        getDigit(".")
    }
}

function getOperator(op) {

    numPressed = false
    interfaceEquation.textContent = ` ${op} `
 
   if (isTypingValue == false) {
        storedOperator = op
    }
  
    // Collects first value of equation 
    if (storedNumberOne === '') {
        storedNumberOne = collectValue(interfaceNumber, storedNumberOne)
        storedOperator = op
    }
    // Changes the storedOperator without executing calculation
    else if (symPressed) {
        storedOperator = op
    }
    // Executes calculation
    else if (symPressed == false) {
        getResult()
        storedOperator = op
        interfaceEquation.textContent = storedNumberOne + ` ${op} `
    }
}

function getPercentage() {

    if (storedNumberOne == '') {
        storedNumberOne = percentage(parseFloat(interfaceNumber)).toString()
        displayValue(storedNumberOne)
    }

    else {
        storedNumberOne = percentage(storedNumberOne).toString()
        displayValue(storedNumberOne)
    }

    console.log(displayValue(storedNumberOne))
    
    numPressed = false
    symPressed = true
    isTypingValue = false
}

function posNeg() {

    if (interfaceText.textContent !== "") {
        interfaceNumber = (interfaceNumber * -1).toString()
        interfaceText.textContent = interfaceNumber
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

    let storedOneParse = parseFloat(storedNumberOne)
    let storedTwoParse = parseFloat(storedNumberTwo)

    storedNumberOne = parseFloat(calculate(storedOneParse, storedTwoParse))
    displayValue(storedNumberOne)
    
    storedNumberTwo = ''
    symPressed = true
    isTypingValue = false  
    equationStep += 1 
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

