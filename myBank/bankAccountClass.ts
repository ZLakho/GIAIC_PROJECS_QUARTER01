export class BankAccount {
    private balance: number;
    private accountNumber: string;

    constructor(accountNumber: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log('Insufficient funds.');
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
    }

    getBalance(): number {
        return this.balance;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }
}
