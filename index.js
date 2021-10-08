const output = document.getElementById("output")
const output2 = document.getElementById("output2")
const numChoice = /\d/;
const operatorChoice = /[+\-\*\/%]/;
const dotChoice = /\./g;
const backSpace = "Backspace";
const equal = "=";
const enter = "Enter";
const esc = "Escape";
let firstInput = "" //first calculation
let mathOperator = "" //math opertator
let secondInput = "" //second calculation, if "" = false, if "something" = true
let result = "" //result


window.addEventListener("keydown", function(event) {
    if (event.key.match(numChoice)) numInput(event)
    if (event.key.match(operatorChoice)) mathInput(event)
    if (event.key.match(dotChoice)) dotInput(event)
})

// window.addEventListener("keydown", function(event) {
//     inputOne(event)
//     inputMath(event)
//     inputTwo(event)
//     calcFunction(event)
//     inputFunction(event)
//     backSpaceFunction(event)
//     escapeBtn(event)
// })  

function fullOutput(event) {
    secondInput += event.key
    return output.textContent = `${firstInput}${mathOperator}${secondInput}`
}

function dotInput(event) {
    if (!(secondInput)) {
        firstInput += event.key
        output.textContent = `${firstInput}`
    }
}

function numInput(event) {
    if (!(mathOperator) && !(secondInput)) {
        firstInput += event.key
        output.textContent = `${firstInput}`
    } else if (firstInput && mathOperator) {
        fullOutput(event)
    }
}

function mathInput(event) {
    if (mathOperator < 1) {
        mathOperator = event.key
        output.textContent = `${firstInput}${mathOperator}`
    } else if (event.key.match(operatorChoice)) {
        mathOperator = event.key
        output.textContent = `${firstInput}${mathOperator}`
    }
}

function inputMath(event) {
    if (event.key.match(operatorChoice) && firstInput) {
        mathOperator += event.key
    } else if (event.key.match(operatorChoice) && firstInput && mathOperator) {
        mathOperator = mathOperator
    }
    console.log(mathOperator)
}

function inputTwo(event) {
    if (firstInput && event.key.match(numChoice)) {
        secondInput += event.key
        console.log(secondInput)
    }
}


function inputFunction(event) {
    // const btnNumber = document.getElementById(`${event.key}`)
    for (let i = 0; i < numChoice.length; i++) {
        // if input is any character of numChoice And second calculation is not false
       if (event.key === numChoice.charAt(i) && !(mathOperator)) {
           firstInput += event.key
           output.textContent = `${firstInput}`
           output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
           document.getElementById("calcCalc1").innerHTML = firstInput
       // if input equals any character of operatorChoice
       } else if (event.key === operatorChoice.charAt(i)) {
           mathOperator = event.key
           output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
           document.getElementById("calcCalc2").innerHTML = mathOperator;
       // first calculation is true, math op. is true and input is any character of numChoice
       } else if (firstInput && mathOperator && event.key === numChoice.charAt(i)) {
           secondInput += event.key
           output.textContent = `${secondInput}`
           output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
           document.getElementById("calcCalc3").innerHTML = secondInput
       }
   }
}

function backSpaceFunction(event) {
    // first input, second input, math operator, result all true, event key equals backspace
    if (firstInput && secondInput && mathOperator && result && event.key === backSpace){
        result = result.toString().slice(0,-1)
        output.textContent = `${result}`
        document.getElementById("calcCalc4").innerHTML = result
        clearZero()
    } else if (!(secondInput) && firstInput.length === 1 && event.key === backSpace) {
        firstInput = "0"
        output.textContent = `${firstInput}`
        output2.textContent = 0
    } else if (!(secondInput) && firstInput > 2 && event.key === backSpace) {
        firstInput = firstInput.toString().slice(0,-1)
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput}`
    } else if (secondInput.length === 1 && event.key === backSpace) {
        secondInput ="0"
        output.textContent = `${secondInput}`
        output2.textContent = 0
    }
}

function clearZero() {
    if (result === "" || result === "0") {
        reset()
    } 
}

function escapeBtn(event) {
    if (event.key === esc) {
        reset()
    }
}

function reset() {
    output.textContent = 0
    output2.textContent = 0
    firstInput = ""
    secondInput = ""
    mathOperator = ""
}

function calcFunction(event) {
    if (event.key === equal || event.key === enter) { 
        if (mathOperator === "+" && secondInput) {
            result = parseFloat(firstInput) + parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "-" && secondInput) {
            result = parseFloat(firstInput) - parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "*" && secondInput) {
            result = parseFloat(firstInput) * parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "/" && firstInput && secondInput === "0") {
            result = "Not a number"
            output.textContent = `${result}`
            output2.textContent = ""
        } else if (mathOperator === "/" && secondInput) {
            result = parseFloat(firstInput) / parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "%" && secondInput) {
            result = parseFloat(firstInput) % parseFloat(secondInput)
        } 
    }
}

// function preventZeroOne(event) {
//     for (let i = 0; i < numChoice.length; i++) {
//         if (firstInput.charAt(0) === "0") {
//             firstInput = ""
//         } else if (event.key === "." && firstInput.includes(".")) {
//             firstInput = firstInput.toString().slice(0,-1)
//         } 
// }}