import inquirer from 'inquirer';
import { BankAccount } from './bankAccountClass.js';

const account = new BankAccount('12345678', 1000);

async function main() {
    while (true) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Deposit', 'Withdraw', 'Check Balance', 'Exit']
            }
        ]);

        switch (answers.action) {
            case 'Deposit':
                const depositAmount = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'amount',
                        message: 'Enter the amount to deposit:',
                        validate: input => !isNaN(Number(input)) && Number(input) > 0
                    }
                ]);
                account.deposit(Number(depositAmount.amount));
                break;
            case 'Withdraw':
                const withdrawAmount = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'amount',
                        message: 'Enter the amount to withdraw:',
                        validate: input => !isNaN(Number(input)) && Number(input) > 0
                    }
                ]);
                account.withdraw(Number(withdrawAmount.amount));
                break;
            case 'Check Balance':
                console.log(`Your balance is: ${account.getBalance()}`);
                break;
            case 'Exit':
                process.exit();
        }
    }
}

main();
