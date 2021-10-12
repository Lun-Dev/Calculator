const output = document.getElementById("output")
const output2 = document.getElementById("output2")
const btnItem = document.querySelectorAll("button")
const numChoice = /\d/; // Regex any digit character
const operatorChoice = /[+|\-|*|%|x|÷]/; // Regex any of "+", "-", "*", "/", "%"
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
    if (firstInput.charAt(0) === "-") {
        firstInput = firstInput.substring(1)
        output.textContent = `${firstInput}`
    } else if (secondInput.charAt(0) === "-") {
        secondInput = secondInput.substring(1)
        output.textContent = `${secondInput}`
        output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
    } else if (result < 0) {
        result = result / -1
        output.textContent = `${result}`
        mathBtnInput(btnInput)
    } else if (firstInput) {
        firstInputz = "-" + firstInput
        output.textContent = `${firstInput}`
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
        //result = ""
        secondInput = ""
        mathOperator = btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator}`
    } else if (mathOperator < 1) {
        mathOperator = btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator}`
    } else if (btnInput.textContent.match(operatorChoice)) {
        mathOperator = btnInput.textContent
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator}`
    }
}

function dotBtnInput(btnInput) {
    if (firstInput.match(dotChoice) && !(secondInput)) {
        firstInput
        output.textContent = `${firstInput}`
    } else if (!(firstInput.match(dotChoice))) {
        firstInput += btnInput.textContent
        output.textContent = `${firstInput}`
    } else if (firstInput && mathOperator && secondInput.match(dotChoice)) {
        halfOutput(btnInput)
    } else if (firstInput && mathOperator && !(secondInput.match(dotChoice))) {
        fullOutput(btnInput)
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
        output2.textContent = `${firstInput} ${mathOperator}`
    } else if (mathOperator < 1) {
        mathOperator = event.key
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator}`
    } else if (event.key.match(operatorChoice)) {
        mathOperator = event.key
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput} ${mathOperator}`
    }
}

function dotInput(event) {
    if (firstInput.match(dotChoice) && !(secondInput)) {
        firstInput
        output.textContent = `${firstInput}`
    } else if (!(firstInput.match(dotChoice))) {
        firstInput += event.key
        output.textContent = `${firstInput}`
    } else if (firstInput && mathOperator && secondInput.match(dotChoice)) {
        halfOutput()
    } else if (firstInput && mathOperator && !(secondInput.match(dotChoice))) {
        fullOutput(event)
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
        firstInput = 0
        output.textContent = `${firstInput}`
        output2.textContent = `${firstInput}`
    }
}

function reset() {
    firstInput = ""
    secondInput = ""
    mathOperator = ""
    result = ""
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

// //Reset everything
// function reset() {
//     output.textContent = 0
//     output2.textContent = 0
//     firstInput = ""
//     secondInput = ""
//     mathOperator = ""
// }

// function inputMath(event) {
//     if (event.key.match(operatorChoice) && firstInput) {
//         mathOperator += event.key
//     } else if (event.key.match(operatorChoice) && firstInput && mathOperator) {
//         mathOperator = mathOperator
//     }
//     console.log(mathOperator)
// }

// function inputTwo(event) {
//     if (firstInput && event.key.match(numChoice)) {
//         secondInput += event.key
//         console.log(secondInput)
//     }
// }


// function inputFunction(event) {
//     // const btnNumber = document.getElementById(`${event.key}`)
//     for (let i = 0; i < numChoice.length; i++) {
//         // if input is any character of numChoice And second calculation is not false
//        if (event.key === numChoice.charAt(i) && !(mathOperator)) {
//            firstInput += event.key
//            output.textContent = `${firstInput}`
//            output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
//            document.getElementById("calcCalc1").innerHTML = firstInput
//        // if input equals any character of operatorChoice
//        } else if (event.key === operatorChoice.charAt(i)) {
//            mathOperator = event.key
//            output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
//            document.getElementById("calcCalc2").innerHTML = mathOperator;
//        // first calculation is true, math op. is true and input is any character of numChoice
//        } else if (firstInput && mathOperator && event.key === numChoice.charAt(i)) {
//            secondInput += event.key
//            output.textContent = `${secondInput}`
//            output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
//            document.getElementById("calcCalc3").innerHTML = secondInput
//        }
//    }
// }

// function backSpaceFunction(event) {
//     // first input, second input, math operator, result all true, event key equals backspace
//     if (firstInput && secondInput && mathOperator && result && event.key === backSpace){
//         result = result.toString().slice(0,-1)
//         output.textContent = `${result}`
//         document.getElementById("calcCalc4").innerHTML = result
//         clearZero()
//     } else if (!(secondInput) && firstInput.length === 1 && event.key === backSpace) {
//         firstInput = "0"
//         output.textContent = `${firstInput}`
//         output2.textContent = 0
//     } else if (!(secondInput) && firstInput > 2 && event.key === backSpace) {
//         firstInput = firstInput.toString().slice(0,-1)
//         output.textContent = `${firstInput}`
//         output2.textContent = `${firstInput}`
//     } else if (secondInput.length === 1 && event.key === backSpace) {
//         secondInput ="0"
//         output.textContent = `${secondInput}`
//         output2.textContent = 0
//     }
// }

// function clearZero() {
//     if (result === "" || result === "0") {
//         reset()
//     } 
// }

// function escapeBtn(event) {
//     if (event.key === esc) {
//         reset()
//     }
// }

// function reset() {
//     output.textContent = 0
//     output2.textContent = 0
//     firstInput = ""
//     secondInput = ""
//     mathOperator = ""
// }

// function calcFunction(event) {
//     if (event.key === equal || event.key === enter) { 
//         if (mathOperator === "+" && secondInput) {
//             result = parseFloat(firstInput) + parseFloat(secondInput)
//             output.textContent = `${result}`
//             output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
//             document.getElementById("calcCalc4").innerHTML = result;
//         } else if (mathOperator === "-" && secondInput) {
//             result = parseFloat(firstInput) - parseFloat(secondInput)
//             output.textContent = `${result}`
//             output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
//             document.getElementById("calcCalc4").innerHTML = result;
//         } else if (mathOperator === "*" && secondInput) {
//             result = parseFloat(firstInput) * parseFloat(secondInput)
//             output.textContent = `${result}`
//             output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
//             document.getElementById("calcCalc4").innerHTML = result;
//         } else if (mathOperator === "/" && firstInput && secondInput === "0") {
//             result = "Not a number"
//             output.textContent = `${result}`
//             output2.textContent = ""
//         } else if (mathOperator === "/" && secondInput) {
//             result = parseFloat(firstInput) / parseFloat(secondInput)
//             output.textContent = `${result}`
//             output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
//             document.getElementById("calcCalc4").innerHTML = result;
//         } else if (mathOperator === "%" && secondInput) {
//             result = parseFloat(firstInput) % parseFloat(secondInput)
//         } 
//     }
// }

// // function preventZeroOne(event) {
// //     for (let i = 0; i < numChoice.length; i++) {
// //         if (firstInput.charAt(0) === "0") {
// //             firstInput = ""
// //         } else if (event.key === "." && firstInput.includes(".")) {
// //             firstInput = firstInput.toString().slice(0,-1)
// //         } 
// // }}

// // window.addEventListener("keydown", function(event) {
// //     inputOne(event)
// //     inputMath(event)
// //     inputTwo(event)
// //     calcFunction(event)
// //     inputFunction(event)
// //     backSpaceFunction(event)
// //     escapeBtn(event)
// // })  