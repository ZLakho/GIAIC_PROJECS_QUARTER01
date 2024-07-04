import inquirer from 'inquirer';
import Person from './person.js';

async function main() {
    const answers = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'What is your name?' },
        { type: 'number', name: 'age', message: 'What is your age?' }
    ]);

    const person = new Person(answers.name, answers.age);
    console.log(`Hello, ${person.getName()}! You are ${person.getAge()} years old.`);
}

main();
