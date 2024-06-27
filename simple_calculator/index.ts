import inquirer from "inquirer";

const answers : {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
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

const {numberOne, numberTwo, operator} = answers;
if(numberOne && numberTwo && operator) {
    let result: number = 0;
    if(operator === "addition"){
        result = numberOne + numberTwo
    } else   if(operator === "subtraction"){
        result = numberOne - numberTwo
    }   if(operator === "division"){
        result = numberOne / numberTwo
    }   if(operator === "multiplication"){
        result = numberOne * numberTwo
    } 

    console.log("Your result is :", result)
} else{
    console.log("Kindly enter valid input")
}