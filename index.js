const output = document.getElementById("output")
let number1 = "" //first calculation
let number2 = "" //math opertator
let number3 = "" //second calculation, if "" = false, if "something" = true
let number4 = "" //result
const numChoice = "1234567890.";
const operatorChoice = "+-*/%";
const backSpace = "Backspace";
const enter = "Enter";

window.addEventListener("keydown", function(event) {
    inputFunction(event)
    backSpaceFunction(event)
    equalFunction(event.key)
})

function inputFunction(event) {
    for (let i = 0; i < numChoice.length; i++) {
        // if input is any character of numChoice And second calculation is not false
       if (event.key === numChoice.charAt(i) && !(number2)) {
           number1 += event.key
           output.textContent = `${number1}`
           document.getElementById("calcCalc1").innerHTML = number1
       // if input equals any character of operatorChoice
       } else if (event.key === operatorChoice.charAt(i)) {
           number2 += event.key
           document.getElementById("calcCalc2").innerHTML = number2;
       // first calculation is true, math op. is true and input is any character of numChoice
       } else if (number1 && number2 && event.key === numChoice.charAt(i)) {
           number3 += event.key
           output.textContent = `${number3}`
           document.getElementById("calcCalc3").innerHTML = number3
       }
   }
}

function backSpaceFunction(event) {
    // number3 is true and input is backspace
    if (number3 && event.key === backSpace) {
        number3 = number3.slice(0,-1);
        output.textContent = `${number3}`
        document.getElementById("calcCalc3").innerHTML = number3
    } else if (!(number3) && number1 && event.key === backSpace) {
        number1 = number1.slice(0,-1);
        output.textContent = `${number1}`
        document.getElementById("calcCalc1").innerHTML = number1
    } else if (!(number1) && !(number3) && number2) {
        number2 = ""
        output.textContent = `${number2}`
        document.getElementById("calcCalc2").innerHTML = number2
    } 
}

// function equalFunction(event) {
//     if (number1 && number2 && number3 && event.key === enter) {
//         number4 = parseInt(number1) + parseInt(number3)
//         output.textContent = `${number4}`
//         document.getElementById("calcCalc4").innerHTML = number4
//     }
// }

function equalFunction(event) {
    switch (event) {
        case (event.key === enter && number2 === "+"):
          number4 = parseFloat(number1) + parseFloat(number3)
          output.textContent = `${number4}`
        case (event.key === enter && number2 === "-"):
          number4 = parseFloat(number1) - parseFloat(number3)
          output.textContent = `${number4}`
        case (event.key === enter && number2 === "*"):
          number4 = parseFloat(number1) * parseFloat(number3)
          output.textContent = `${number4}`
        case (event.key === enter && number2 === "/"):
          number4 = parseFloat(number1) / parseFloat(number3)
          output.textContent = `${number4}`
  }
  }

