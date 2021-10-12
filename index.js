const output = document.getElementById("output")
const output2 = document.getElementById("output2")
const btnItem = document.querySelectorAll("button")
const numChoice = /\d/; // Regex any digit character
const operatorChoice = /[+|\-|\/|*|%|x|÷]/; // Regex any of "+", "-", "*", "/", "%"
const dotChoice = /\./g; // Regex "."
const plusMinus = /^±$/;
const equalChoice = /=|Enter/; // Regex "=" or "Enter"
const backSpace = /^Backspace$/; // Regex "Backspace"
const esc = /^Escape$/; // Regex "Escape"
const ac = /^AC$/; // Regex "AC"
let firstInput = "" //first calculation
let mathOperator = "" //math opertator
let secondInput = "" //second calculation, if "" = false, if "something" = true
let result = "" //result


window.addEventListener("keydown", function(event) {
    if (event.key.match(numChoice)) numInput(event)
    if (event.key.match(operatorChoice)) mathInput(event)
    if (event.key.match(dotChoice)) dotInput(event)
    if (event.key.match(equalChoice) && secondInput) operate(firstInput, secondInput, mathOperator)
    if (event.key.match(backSpace)) clearFunction()
    if (event.key.match(esc)) reset()
})

for (let i = 0; i < btnItem.length; i++) {
    let btnInput = btnItem[i]
    btnInput.addEventListener("click", function() {
        if (btnInput.textContent.match(numChoice)) {
            numBtnInput(btnInput)
        } else if (btnInput.textContent.match(operatorChoice)) {
            if (firstInput) {
            mathBtnInput(btnInput)}
        } else if (btnInput.textContent.match(dotChoice)) {
            dotBtnInput(btnInput)
        } else if (btnInput.textContent.match(equalChoice)) {
            if (firstInput && secondInput) {
            operate(firstInput, secondInput, mathOperator)}
        } else if (btnInput.textContent.match(ac)) {
            reset()
        } else if (btnInput.textContent.match(plusMinus)) {
            plusMinusBtn()
        }
    })
}

function plusMinusBtn() {
    if (firstInput.charAt(0) === "-" && !(result)) {
        firstInput = firstInput.substring(1)
        output.textContent = `${firstInput}`
    } else if (secondInput.charAt(0) === "-") {
        secondInput = secondInput.substring(1)
        output.textContent = `${secondInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (result < 0) {
        result = result / -1
        result = result.toString()
        output.textContent = `${result}`
    } else if (result > 0) {
        result = -(result)
        result = result.toString()
        output.textContent = `${result}`
    } 
}

function numBtnInput(btnInput) {
    if (!(mathOperator) && !(secondInput)) {
        firstInput += btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput}`
    } else if (firstInput && mathOperator) {
        secondInput += btnInput.textContent
        output.textContent = `${secondInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } 
}

function mathBtnInput(btnInput) {
    if (result) {
        firstInput = result
        secondInput = ""
        mathOperator = btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (mathOperator < 1) {
        mathOperator = btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (btnInput.textContent.match(operatorChoice)) {
        mathOperator = btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    }
    }

function dotBtnInput(btnInput) {
    if (firstInput && secondInput && result) {
        result = result.toString()
            if (!(result.match(dotChoice))) {
                result = firstInput + "."
                result = ""
                output.textContent = `${secondInput}`
                output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
            } else if (result.match(dotChoice)) {
                firstInput = result
                result = ""
                output.textContent = `${secondInput}`
                output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
            }
    } else if (firstInput && secondInput && !(secondInput.match(dotChoice))) {
        secondInput += btnInput.textContent
        output.textContent = `${secondInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (firstInput && !(secondInput) && !(firstInput.match(dotChoice))) {
        firstInput += btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } 
    }


function numInput(event) {
    if (!(mathOperator) && !(secondInput)) {
        firstInput += event.key
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput}`
    } else if (firstInput && mathOperator) {
        secondInput += event.key
        output.textContent = `${secondInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    }
}

function mathInput(event) {
    if (result) {
        firstInput = result
        secondInput = ""
        mathOperator = event.key
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (mathOperator < 1) {
        mathOperator = event.key
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (event.key.match(operatorChoice)) {
        mathOperator = event.key
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    }
}

function dotInput(event) {
    if (firstInput && secondInput && result) {
        result = result.toString()
            if (!(result.match(dotChoice))) {
                result = firstInput + "."
                result = ""
                output.textContent = `${secondInput}`
                output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
            } else if (result.match(dotChoice)) {
                firstInput = result
                result = ""
                output.textContent = `${secondInput}`
                output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
            }
    } else if (firstInput && secondInput && !(secondInput.match(dotChoice))) {
        secondInput += event.key
        output.textContent = `${secondInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (firstInput && !(secondInput) && !(firstInput.match(dotChoice))) {
        firstInput += event.key
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } 
}

function operate(firstInput, secondInput, mathOperator) {
    firstInput = parseFloat(firstInput)
    secondInput = parseFloat(secondInput)
        switch (mathOperator) {
            case ("+"):
                result = Math.round((firstInput + secondInput) * 100)/100;
                output.textContent = result
                output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
                break;
            case ("-"):
                result = Math.round((firstInput - secondInput) * 100)/100;
                output.textContent = result
                output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
                break;
            case ("x"):
            case ("*"):
                result = Math.round((firstInput * secondInput) * 100)/100;
                output.textContent = result
                output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
                break;
            case ("÷"):
            case ("/"):
                if (secondInput === 0) {
                    result = "Not a number";
                    output.textContent = result
                    break;
                } else {
                    result = Math.round((firstInput / secondInput) * 100)/100;
                    output.textContent = result
                    output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
                    break;
                }
        }
}

function clearFunction() {
    if (firstInput) {
        firstInput = firstInput.toString().slice(0,-1)  
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput}`
    }
    if (firstInput === "") {
        reset()
    }
}

function reset() {
    firstInput = ""
    secondInput = ""
    mathOperator = ""
    result = ""
    firstInput.toString()
    secondInput.toString()
    mathOperator.toString()
    result.toString()
    output.textContent = "0"
    output2.textContent = "0"
} 

//No additional dots for secondInput, displays final
function halfOutput() { 
    secondInput
    return output.textContent = `${firstInput}${mathOperator}${secondInput}`
}

//Normal display final
function fullOutput(event) { 
    secondInput += event.key
    output.textContent = `${firstInput}${mathOperator}${secondInput}`
    output2.textContent = `${firstInput}${mathOperator}${secondInput}`
}

//Normal display final for btn
function fullBtnOutput(btnInput) { 
    secondInput += btnInput.textContent
    output.textContent = `${firstInput}${mathOperator}${secondInput}`
    output2.textContent = `${firstInput}${mathOperator}${secondInput}`
}
