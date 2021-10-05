const output = document.getElementById("output")
const output2 = document.getElementById("output2")
let firstInput = "" //first calculation
let mathOperator = "" //math opertator
let secondInput = "" //second calculation, if "" = false, if "something" = true
let result = "" //result
const numChoice = "1234567890.";
const operatorChoice = "+-*/%";
const backSpace = "Backspace";
const equal = "=";
const enter = "Enter";


window.addEventListener("keydown", function(event) {
    calcFunction(event)
    inputFunction(event)
    backSpaceFunction(event)
})

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
           mathOperator += event.key
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
    } 
}

//     // first input, second input, math operator all true, result false but !, event key equals backspace
// } else if (firstInput && secondInput && mathOperator && !(result) && event.key === backSpace) {
//     output.textContent = "0"
// // first input, math operator true, second input, result false but !, event key equals backspace
// } else if (firstInput && !(secondInput) && mathOperator && !(result) && event.key === backSpace) {
    
// }
// function backSpaceFunction(event) {
//     // secondInput is true and input is backspace
//     if (secondInput && event.key === backSpace) {
//         secondInput = secondInput.slice(0,-1);
//         output.textContent = `${secondInput}`
//         output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
//         document.getElementById("calcCalc3").innerHTML = secondInput
//     } else if (!(secondInput) && firstInput && event.key === backSpace) {
//         firstInput = firstInput.slice(0,-1);
//         output.textContent = `${firstInput}`
//         output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
//         document.getElementById("calcCalc1").innerHTML = firstInput
//     } else if (!(firstInput) && !(secondInput) && mathOperator) {
//         mathOperator = ""
//         output.textContent = `${mathOperator}`
//         output2.textContent = `${firstInput} ${mathOperator} ${secondInput}`
//         document.getElementById("calcCalc2").innerHTML = mathOperator
//     } else if (!(firstInput) && !(mathOperator) && !(secondInput) && result && event.key === backSpace) {
//         firstInput = ""
//         mathOperator = ""
//         secondInput = ""
//         result = "0"
//         output.textContent = `${result}`
//         output2.textContent = "0"
//         document.getElementById("calcCalc4").innerHTML = result
//     }
// }

function calcFunction(event) {
    if (event.key === equal || event.key === enter) { 
        if (mathOperator === "+") {
            result = parseFloat(firstInput) + parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "-") {
            result = parseFloat(firstInput) - parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "*") {
            result = parseFloat(firstInput) * parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "/") {
            result = parseFloat(firstInput) / parseFloat(secondInput)
            output.textContent = `${result}`
            output2.textContent = `${firstInput} ${mathOperator} ${secondInput} =`
            document.getElementById("calcCalc4").innerHTML = result;
        } else if (mathOperator === "%") {
            result = parseFloat(firstInput) / parseFloat(secondInput)
        }
    }
}


// function calcFunction(event) {
//     if (event.key === equal && mathOperator === "+") {
//         result = parseFloat(firstInput) + parseFloat(secondInput)
//         output.textContent = `${result}`
//         document.getElementById("calcCalc4").innerHTML = result;
//     } else if (event.key === equal && mathOperator === "-") {
//         result = parseFloat(firstInput) - parseFloat(secondInput)
//         output.textContent = `${result}`
//         document.getElementById("calcCalc4").innerHTML = result;
//     } else if (event.key === equal && mathOperator === "*") {
//         result = parseFloat(firstInput) * parseFloat(secondInput)
//         output.textContent = `${result}`
//         document.getElementById("calcCalc4").innerHTML = result;
//     } else if (event.key === equal && mathOperator === "/") {
//         result = parseFloat(firstInput) / parseFloat(secondInput)
//         output.textContent = `${result}`
//         document.getElementById("calcCalc4").innerHTML = result;
//     } else if (event.key === equal && mathOperator === "%") {
//         result = parseFloat(firstInput) % parseFloat(secondInput)
//         output.textContent = `${result}`
//         document.getElementById("calcCalc4").innerHTML = result;
//     }
// }

// function equalFunction(event) {
//     if (firstInput && mathOperator && secondInput && event.key === enter) {
//         result = parseInt(firstInput) + parseInt(secondInput)
//         output.textContent = `${result}`
//         document.getElementById("calcCalc4").innerHTML = result
//     }
// }

// function equalFunction(event) {
//     switch (event) {
//         case (event.key === enter):
//             case(mathOperator === "+"):
//                 result = parseFloat(firstInput) + parseFloat(secondInput)
//                 output.textContent = `${result}`
//             case(mathOperator === "-"):
//                 result = parseFloat(firstInput) - parseFloat(secondInput)
//                 output.textContent = `${result}`
//             case(mathOperator === "*"):
//                 result = parseFloat(firstInput) * parseFloat(secondInput)
//                 output.textContent = `${result}`
//             case(mathOperator === "/"):
//                 result = parseFloat(firstInput) / parseFloat(secondInput)
//                 output.textContent = `${result}`                 
//   }
//   }

