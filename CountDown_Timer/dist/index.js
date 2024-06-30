import inquirer from 'inquirer';
var questions = [
    {
        type: 'input',
        name: 'minutes',
        message: 'Enter the countdown time in minutes:',
        validate: function (value) {
            var valid = !isNaN(Number(value));
            return valid || 'Please enter a number';
        },
    },
];
inquirer.prompt(questions).then(function (answers) {
    var minutes = parseInt(answers.minutes);
    var countdown = minutes * 60 * 1000;
    console.log("Countdown started for ".concat(minutes, " minutes."));
    setTimeout(function () {
        console.log('Time is up!');
    }, countdown);
    var interval = setInterval(function () {
        var remainingTime = countdown - (Date.now() - startTime);
        if (remainingTime <= 0) {
            clearInterval(interval);
        }
        else {
            console.log("Time remaining: ".concat(Math.floor(remainingTime / 60000), " minutes and ").concat(Math.floor((remainingTime % 60000) / 1000), " seconds."));
        }
    }, 1000);
    var startTime = Date.now();
});
