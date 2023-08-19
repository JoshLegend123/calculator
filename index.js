let toggleTheme = document.getElementsByClassName('toggle-circle')
let body = document.getElementById('body')
let toggleContainer = document.getElementById('toggle-container')
let red = document.getElementById('red')
let orange = document.getElementById('orange')
let pureCyan = document.getElementById('pure-cyan')
let calcScreen = document.getElementById('screen')
let keypad = document.getElementById('keypad')
let numberKeys = document.getElementsByClassName('number-keys')
let deleteBtn = document.getElementById('delete')
let resetBtn = document.getElementById('reset')
let equalBtn = document.getElementById('equal')
function themeOne() {
    body.style.backgroundColor = 'hsl(222, 26%, 31%)'
    body.style.color = 'hsl(0, 0%, 100%)'
    toggleContainer.style.backgroundColor = 'hsl(223, 31%, 20%)'
    red.style.backgroundColor = 'hsl(6, 63%, 50%)'
    orange.style.backgroundColor = 'hsl(223, 31%, 20%)'
    pureCyan.style.backgroundColor = 'hsl(223, 31%, 20%)'
    calcScreen.style.backgroundColor = 'hsl(224, 36%, 15%)'
    calcScreen.style.color = 'hsl(0, 0%, 100%)'
    keypad.style.backgroundColor = 'hsl(223, 31%, 20%)'
    for (let index = 0; index < numberKeys.length; index++) {
        numberKeys[index].style.backgroundColor = 'hsl(30, 25%, 89%)'
        numberKeys[index].style.color = 'hsl(221, 14%, 31%)'
        numberKeys[index].style.boxShadow = '0px 3px hsl(28, 16%, 65%)'
    }
    deleteBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    deleteBtn.style.color = 'hsl(0, 0%, 100%)'
    deleteBtn.style.boxShadow = '0px 3px hsl(224, 28%, 35%)'
    resetBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    resetBtn.style.color = 'hsl(0, 0%, 100%)'
    resetBtn.style.boxShadow = '0px 3px hsl(224, 28%, 35%)'
    equalBtn.style.boxShadow = '0px 3px hsl(6, 70%, 34%)'
    equalBtn.style.backgroundColor = 'hsl(6, 63%, 50%)'
    equalBtn.style.color = 'hsl(0, 0%, 100%)'
}
function themeTwo() {
    body.style.backgroundColor = 'hsl(0, 0%, 90%)'
    body.style.color = 'hsl(60, 10%, 19%)'
    toggleContainer.style.backgroundColor = 'hsl(0, 5%, 81%)'
    orange.style.backgroundColor = 'hsl(25, 98%, 40%)'
    red.style.backgroundColor = 'hsl(0, 5%, 81%)'
    pureCyan.style.backgroundColor = 'hsl(0, 5%, 81%)'
    calcScreen.style.backgroundColor = 'hsl(0, 0%, 93%)'
    calcScreen.style.color = 'hsl(60, 10%, 19%)'
    keypad.style.backgroundColor = 'hsl(0, 5%, 81%)'
    for (let index = 0; index < numberKeys.length; index++) {
        numberKeys[index].style.backgroundColor = 'hsl(45, 7%, 89%)'
        numberKeys[index].style.color = 'hsl(60, 10%, 19%)'
        numberKeys[index].style.boxShadow = '0px 3px hsl(35, 11%, 61%)'
    }
    deleteBtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
    deleteBtn.style.color = 'hsl(0, 0%, 100%)'
    deleteBtn.style.boxShadow = '0px 3px hsl(185, 58%, 25%)'
    resetBtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
    resetBtn.style.color = 'hsl(0, 0%, 100%)'
    resetBtn.style.boxShadow = '0px 3px hsl(185, 58%, 25%)'
    equalBtn.style.boxShadow = '0px 3px hsl(25, 99%, 27%)'
    equalBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
    equalBtn.style.color = 'hsl(0, 0%, 100%)'
}
function themeThree() {
    body.style.backgroundColor = 'hsl(268, 75%, 9%)'
    body.style.color = 'hsl(52, 100%, 62%)'
    toggleContainer.style.backgroundColor = 'hsl(268, 71%, 12%)'
    pureCyan.style.backgroundColor = 'hsl(176, 100%, 44%)'
    red.style.backgroundColor = 'hsl(268, 71%, 12%)'
    orange.style.backgroundColor = 'hsl(268, 71%, 12%)'
    calcScreen.style.backgroundColor = 'hsl(268, 71%, 12%)'
    calcScreen.style.color = 'hsl(52, 100%, 62%)'
    keypad.style.backgroundColor = 'hsl(268, 71%, 12%)'
    for (let index = 0; index < numberKeys.length; index++) {
        numberKeys[index].style.backgroundColor = 'hsl(268, 47%, 21%)'
        numberKeys[index].style.color = 'hsl(52, 100%, 62%)'
        numberKeys[index].style.boxShadow = '0px 3px hsl(290, 70%, 36%)'
        deleteBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    deleteBtn.style.color = 'hsl(0, 0%, 100%)'
    deleteBtn.style.boxShadow = '0px 3px hsl(224, 28%, 35%)'
    resetBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    resetBtn.style.color = 'hsl(0, 0%, 100%)'
    resetBtn.style.boxShadow = '0px 3px hsl(224, 28%, 35%)'
    equalBtn.style.boxShadow = '0px 3px hsl(6, 70%, 34%)'
    equalBtn.style.backgroundColor = 'hsl(6, 63%, 50%)'
    }
    deleteBtn.style.backgroundColor = 'hsl(281, 89%, 26%)'
    deleteBtn.style.color = 'hsl(0, 0%, 100%)'
    deleteBtn.style.boxShadow = '0px 3px hsl(285, 91%, 52%)'
    resetBtn.style.backgroundColor = 'hsl(281, 89%, 26%)'
    resetBtn.style.color = 'hsl(0, 0%, 100%)'
    resetBtn.style.boxShadow = '0px 3px hsl(285, 91%, 52%)'
    equalBtn.style.boxShadow = '0px 3px hsl(177, 92%, 70%)'
    equalBtn.style.backgroundColor = 'hsl(176, 100%, 44%)'
    equalBtn.style.color = 'hsl(198, 20%, 13%)'
}
toggleTheme[0].onclick = function () {
    themeOne()
}
toggleTheme[1].onclick = function () {
    themeTwo()
}
toggleTheme[2].onclick = function () {
    themeThree()
}
let currentInput = ''
let currentOperator = ''
let resultDisplayed = false
function appendNumber(number) {
    if (resultDisplayed) {
        calcScreen.value = ''
        resultDisplayed = false
    }
    currentInput += number
    calcScreen.value = currentInput
}
function appendOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator
        currentInput += ' ' + operator + ' '
        calcScreen.value = currentInput
    }
}
deleteBtn.onclick = function () {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1)
        calcScreen.value = currentInput
    }
}
resetBtn.onclick = function () {
    currentInput = ''
    currentOperator = ''
    calcScreen.value = ''
}
equalBtn.onclick = function () {
    /*if (currentInput !== '') {
        const expression = currentInput.replace('','')
        const result = eval(expression)
        calcScreen.value = result
        currentInput = result.toString()
        resultDisplayed = true
    }*/
    if (currentInput !== '') {
        const tokens = currentInput.split(/\s+/)
        const numbers = []
        const operators = []
        tokens.forEach(token => {
            if (!isNaN(token)) {
                numbers.push(parseFloat(token))
            } else if (['+', '-', '*', '/'].includes(token)) {
                operators.push(token)
            }
        })
        let result = numbers[0]
        for (let index = 0; index < operators.length; index++) {
            const operator = operators[index];
            const nextNumber = numbers[index + 1]
            switch (operator) {
                case '+':
                    result += nextNumber
                    break;
                case '-':
                    result -= nextNumber
                    break;
                case '*':
                    result *= nextNumber
                    break;
                case '/':
                    result /= nextNumber
                    break;
            }
        }
        calcScreen.value = result
        currentInput = result.toString()
        currentOperator = ''
        resultDisplayed = true
    }
}