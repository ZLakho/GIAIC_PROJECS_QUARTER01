"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }
    Student.prototype.enroll_course = function (course) {
        this.courses.push(course);
    };
    Student.prototype.view_balance = function () {
        console.log("Balance for ".concat(this.name, " : ").concat(this.balance));
    };
    Student.prototype.pay_fees = function (amount) {
        this.balance -= amount;
        console.log("".concat(amount, " PKR fees paid successfully for $").concat(this.name, " "));
        console.log("Remaining Balance $".concat(this.balance));
    };
    Student.prototype.show_status = function () {
        console.log("ID: ".concat(this.id));
        console.log("Name: ".concat(this.name));
        console.log("Course: ".concat(this.courses));
        console.log("Balance: ".concat(this.balance));
    };
    Student.counter = 10000;
    return Student;
}());
var Student_manager = /** @class */ (function () {
    function Student_manager() {
        this.students = [];
    }
    Student_manager.prototype.add_student = function (name) {
        var student = new Student(name);
        this.students.push(student);
        console.log("Student: ".concat(name, " added succesfully, Stduent id: ").concat(student.id));
    };
    Student_manager.prototype.enroll_student = function (student_id, course) {
        var student = this.find_student(student_id);
        if (student) {
            student.enroll_course(course);
            console.log("".concat(student.name, " enrolled in ").concat(course, " successfully"));
        }
    };
    Student_manager.prototype.view_student_balance = function (student_id) {
        var student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found. Please enter a correct student id");
        }
    };
    Student_manager.prototype.pay_student_fees = function (student_id, amount) {
        var student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log("Student not found. Please enter a correct student id");
        }
    };
    Student_manager.prototype.show_student_status = function (student_id) {
        var student = this.find_student(student_id);
        if (student) {
            student.show_status();
        }
    };
    Student_manager.prototype.find_student = function (student_id) {
        return this.students.find(function (std) { return std.id === student_id; });
    };
    return Student_manager;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var student_manager, choice, _a, name_input, course_input, balance_input, fees_input, status_input;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Welcome to Student management System using TypeScript");
                    student_manager = new Student_manager();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 15];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "choice",
                                type: "list",
                                message: "Select an option",
                                choices: [
                                    "Add Student",
                                    "Enroll Student",
                                    "View Student balance",
                                    "Pay Fees",
                                    "Show Status",
                                    "Exit"
                                ]
                            }
                        ])];
                case 2:
                    choice = _b.sent();
                    _a = choice.choice;
                    switch (_a) {
                        case "Add Student": return [3 /*break*/, 3];
                        case "Enroll Student": return [3 /*break*/, 5];
                        case "View Student balance": return [3 /*break*/, 7];
                        case "Pay Fees": return [3 /*break*/, 9];
                        case "Show Status": return [3 /*break*/, 11];
                        case "Exit": return [3 /*break*/, 13];
                    }
                    return [3 /*break*/, 14];
                case 3: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "name",
                            type: "input",
                            message: "Enter student name: "
                        }
                    ])];
                case 4:
                    name_input = _b.sent();
                    student_manager.add_student(name_input.name);
                    return [3 /*break*/, 14];
                case 5: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student id: "
                        },
                        {
                            name: "course",
                            type: "input",
                            message: "Enter a Course name: "
                        }
                    ])];
                case 6:
                    course_input = _b.sent();
                    student_manager.enroll_student(course_input.student_id, course_input.course);
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student id: "
                        }
                    ])];
                case 8:
                    balance_input = _b.sent();
                    student_manager.view_student_balance(balance_input.student_id);
                    return [3 /*break*/, 14];
                case 9: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student id: "
                        },
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to pay: "
                        }
                    ])];
                case 10:
                    fees_input = _b.sent();
                    student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
                    return [3 /*break*/, 14];
                case 11: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student id: "
                        }
                    ])];
                case 12:
                    status_input = _b.sent();
                    student_manager.show_student_status(status_input.student_id);
                    return [3 /*break*/, 14];
                case 13:
                    console.log("exiting...");
                    process.exit();
                    _b.label = 14;
                case 14: return [3 /*break*/, 1];
                case 15: return [2 /*return*/];
            }
        });
    });
}
main();
