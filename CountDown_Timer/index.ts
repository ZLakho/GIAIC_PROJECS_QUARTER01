import inquirer from 'inquirer';

const questions = [
    {
        type: 'input',
        name: 'minutes',
        message: 'Enter the countdown time in minutes:',
        validate: (value: string) => {
            const valid = !isNaN(Number(value));
            return valid || 'Please enter a number';
        },
    },
];

inquirer.prompt(questions).then(answers => {
    const minutes = parseInt(answers.minutes);
    const countdown = minutes * 60 * 1000;
    console.log(`Countdown started for ${minutes} minutes.`);

    setTimeout(() => {
        console.log('Time is up!');
    }, countdown);

    const interval = setInterval(() => {
        const remainingTime = countdown - (Date.now() - startTime);
        if (remainingTime <= 0) {
            clearInterval(interval);
        } else {
            console.log(`Time remaining: ${Math.floor(remainingTime / 60000)} minutes and ${Math.floor((remainingTime % 60000) / 1000)} seconds.`);
        }
    }, 1000);

    const startTime = Date.now();
});
