import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "Enter your ID: "
    },
    {
        type: "number",
        name: "userPass",
        message: "Enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your Account Type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "WithDraw"],
        message: "Select your transaction: ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "3000", "4000", "5000", "10000"],
        message: "Select your Amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount: ",
        when(answers) {
            return answers.transactionType == "WithDraw";
        },
    }
]);
if (answers.userid && answers.userPass) {
    const balance = Math.floor(Math.random() * 100000);
    console.log("Your Ammount is ", balance);
    const enteredAmount = answers.amount;
    if (balance > enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("Your remaining balance is ", remaining);
    }
    else {
        console.log("Insufficient ammount");
    }
}
