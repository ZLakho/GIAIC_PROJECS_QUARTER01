var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". New balance is ").concat(this.balance, "."));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds.');
        }
        else {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, ". New balance is ").concat(this.balance, "."));
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    return BankAccount;
}());
export { BankAccount };
