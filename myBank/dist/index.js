var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import inquirer from 'inquirer';
import { BankAccount } from './bankAccountClass.js';
var account = new BankAccount('12345678', 1000);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var answers, _a, depositAmount, withdrawAmount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!true) return [3 /*break*/, 9];
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: 'list',
                                name: 'action',
                                message: 'What would you like to do?',
                                choices: ['Deposit', 'Withdraw', 'Check Balance', 'Exit']
                            }
                        ])];
                case 1:
                    answers = _b.sent();
                    _a = answers.action;
                    switch (_a) {
                        case 'Deposit': return [3 /*break*/, 2];
                        case 'Withdraw': return [3 /*break*/, 4];
                        case 'Check Balance': return [3 /*break*/, 6];
                        case 'Exit': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 2: return [4 /*yield*/, inquirer.prompt([
                        {
                            type: 'input',
                            name: 'amount',
                            message: 'Enter the amount to deposit:',
                            validate: function (input) { return !isNaN(Number(input)) && Number(input) > 0; }
                        }
                    ])];
                case 3:
                    depositAmount = _b.sent();
                    account.deposit(Number(depositAmount.amount));
                    return [3 /*break*/, 8];
                case 4: return [4 /*yield*/, inquirer.prompt([
                        {
                            type: 'input',
                            name: 'amount',
                            message: 'Enter the amount to withdraw:',
                            validate: function (input) { return !isNaN(Number(input)) && Number(input) > 0; }
                        }
                    ])];
                case 5:
                    withdrawAmount = _b.sent();
                    account.withdraw(Number(withdrawAmount.amount));
                    return [3 /*break*/, 8];
                case 6:
                    console.log("Your balance is: ".concat(account.getBalance()));
                    return [3 /*break*/, 8];
                case 7:
                    process.exit();
                    _b.label = 8;
                case 8: return [3 /*break*/, 0];
                case 9: return [2 /*return*/];
            }
        });
    });
}
main();
