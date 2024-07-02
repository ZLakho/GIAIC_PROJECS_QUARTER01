import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1,
        "EUR": 0.0041,
        "AUD": 0.0063,
        "CAD": 0.0057,
        "INR": 0.058
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 1,
        "PKR": 271.79,
        "EUR": 1.17,
        "AUD": 1.74,
        "CAD": 1.63,
        "INR": 103.14
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50,
        "EUR": 0.97,
        "AUD": 1.43,
        "CAD": 1.34,
        "INR": 85.15
    },
    "EUR": {
        "USD": 1.03,
        "GBP": 0.85,
        "PKR": 243.97,
        "EUR": 1,
        "AUD": 1.47,
        "CAD": 1.38,
        "INR": 87.75
    },
    "AUD": {
        "USD": 0.69,
        "GBP": 0.57,
        "PKR": 158.93,
        "EUR": 0.68,
        "AUD": 1,
        "CAD": 0.94,
        "INR": 60.31
    },
    "CAD": {
        "USD": 0.74,
        "GBP": 0.61,
        "PKR": 176.55,
        "EUR": 0.73,
        "AUD": 1.06,
        "CAD": 1,
        "INR": 64.14
    },
    "INR": {
        "USD": 0.012,
        "GBP": 0.0097,
        "PKR": 17.23,
        "EUR": 0.011,
        "AUD": 0.016,
        "CAD": 0.016,
        "INR": 1
    }
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "converter",
        choices: ["PKR", 'EUR', 'AUD', 'CAD', 'INR', 'USD', 'GBP'],
        message: "Choose your currencyfrom list : "
    },
    {
        type: "list",
        name: "toconverter",
        choices: ["PKR", 'EUR', 'AUD', 'CAD', 'INR', 'USD', 'GBP'],
        message: "Choose conversion currency from list : "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount: "
    }
]);
const { converter, toconverter, amount } = answers;
if (converter && toconverter && amount) {
    let amountChnage = conversion[converter][toconverter] * amount;
    console.log("----------------------------------------------------");
    console.log(`Your Amount from ${converter} to ${toconverter} is ${amountChnage} `);
}
else {
    console.log("Invalid inputs");
}
