const output = document.getElementById("output")
let calcField = ""
let calcField2 = ""
let calcField3 = ""
let calcField4 = ""

window.addEventListener("keydown", function(event) {
    const numChoice = "1234567890.";
    const operatorChoice = "+-*/%";
    const backSpace = "Backspace";
    for (let i = 0; i < numChoice.length, i < operatorChoice.length; i++) {
        if (event.key === numChoice.charAt(i)) {
            calcField += event.key
            output.textContent = `${calcField}`
            document.getElementById("calcCalc").innerHTML = calcField;
            document.getElementById("calcCalc3").innerHTML = calcField.length;
        } else if (event.key === operatorChoice.charAt(i)) {
            calcField2 += event.key
            document.getElementById("calcCalc2").innerHTML = calcField2;
        } 
    }
    if (event.key === backSpace) {
        calcField = calcField.slice(0,-1);
        output.textContent = `${calcField}`
        document.getElementById("calcCalc").innerHTML = calcField;
        document.getElementById("calcCalc3").innerHTML = calcField.length;
    }
    if (calcField === "") {
        output.textContent = "0";
    }
})

//     for (let i = 0; i < numChoice.length; i++) {
//         if (calcField !== "" && calcField2 !== "" && event.key === numChoice[i]) {
//             calcField3 += event.key
//             output.textContent = `${calcField3}`
//             document.getElementById("calcCalc3").innerHTML = calcField3;
//         }
//     }
//     for (let i = 0; i < numChoice.length; i++) {
//         if (calcField2 === "" && event.key === numChoice[i]) {
//             calcField += event.key
//             output.textContent = `${calcField}`
//             document.getElementById("calcCalc").innerHTML = calcField;
//         } 
//     }
//     for (let i = 0; i < operatorChoice.length; i++) {
//         if (event.key === operatorChoice[i] && calcField != "") {
//             calcField2 = event.key
//             document.getElementById("calcCalc2").innerHTML = calcField2;
//         }
//     }
//     if (calcField2 !== "" && event.key === backSpace) {
//         calcField2 = calcField2.slice(0,-1);
//         output.textContent = `${calcField2}`
//         document.getElementById("calcCalc2").innerHTML = calcField2;
//     }
//     if (calcField !== "" && event.key === backSpace) {
//         calcField = calcField.slice(0,-1);
//         output.textContent = `${calcField}`
//         document.getElementById("calcCalc").innerHTML = calcField;
//     }
//     if (calcField === "") {
//         output.textContent = "0";
//     }
// });