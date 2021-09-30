const output = document.getElementById("output")
let calcField = ""
let calcField2 = ""
let calcField3 = ""

window.addEventListener("keydown", function(event) {
    const numChoice = "1234567890.";
    const operatorChoice = "+-*/%";
    const backSpace = "Backspace";
    for (let i = 0; i < numChoice.length; i++) {
        if (event.key === numChoice[i]) {
            calcField += event.key
            output.textContent = `${calcField}`
            console.log(calcField)  
        }
    }
    for (let i = 0; i < operatorChoice.length; i++) {
        if (event.key === operatorChoice[i] && calcField != "") {
            calcField2 = event.key
            document.getElementById("calcCalc").innerHTML = calcField2;
        }
    }
    if (event.key === backSpace) {
        calcField = calcField.slice(0,-1);
        output.textContent = `${calcField}`
    }
    if (calcField === "") {
        output.textContent = "0";
    }
});


