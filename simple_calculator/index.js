"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first no: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second no: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "division", "multiplication"],
        message: "Select Operator: "
    },
]);
var numberOne = answers.numberOne, numberTwo = answers.numberTwo, operator = answers.operator;
if (numberOne && numberTwo && operator) {
    var result = 0;
    if (operator === "addition") {
        result = numberOne + numberTwo;
    }
    else if (operator === "subtraction") {
        result = numberOne - numberTwo;
    }
    if (operator === "division") {
        result = numberOne / numberTwo;
    }
    if (operator === "multiplication") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("Kindly enter valid input");
}
