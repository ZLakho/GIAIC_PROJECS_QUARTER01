import inquirer from 'inquirer';
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess between 1 to 10: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, " is Your guess and ", systemGeneratedNo, ' is System Generated Number');
if (userGuess === systemGeneratedNo) {
    console.log("Yuppieee Your answer is correct \n You Win!");
}
else {
    console.log("Please try again, Better luck next time!");
}
