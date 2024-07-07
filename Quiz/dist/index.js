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
var questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the boiling point of water?",
        choices: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Gold", "Osmium", "Oganesson"],
        correctAnswer: "Oxygen"
    },
    {
        question: "What is the currency of Japan?",
        choices: ["Yuan", "Won", "Yen", "Rupee"],
        correctAnswer: "Yen"
    },
    {
        question: "In which year did the Titanic sink?",
        choices: ["1905", "1912", "1918", "1923"],
        correctAnswer: "1912"
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who is the author of '1984'?",
        choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
        correctAnswer: "George Orwell"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "8"
    },
    {
        question: "What is the capital of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra"
    },
    {
        question: "Who discovered penicillin?",
        choices: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the main ingredient in guacamole?",
        choices: ["Tomato", "Avocado", "Pepper", "Onion"],
        correctAnswer: "Avocado"
    },
    {
        question: "How many continents are there?",
        choices: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        choices: ["Alan Turing", "Charles Babbage", "John von Neumann", "Bill Gates"],
        correctAnswer: "Charles Babbage"
    },
    {
        question: "What is the chemical formula for water?",
        choices: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "What year did World War II end?",
        choices: ["1942", "1944", "1945", "1946"],
        correctAnswer: "1945"
    },
    {
        question: "What is the capital of Italy?",
        choices: ["Rome", "Venice", "Florence", "Milan"],
        correctAnswer: "Rome"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        choices: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the speed of light?",
        choices: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "250,000 km/s"],
        correctAnswer: "299,792 km/s"
    },
    {
        question: "What is the main language spoken in Brazil?",
        choices: ["Spanish", "Portuguese", "English", "French"],
        correctAnswer: "Portuguese"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: "Diamond"
    },
    {
        question: "Which planet is closest to the sun?",
        choices: ["Venus", "Earth", "Mars", "Mercury"],
        correctAnswer: "Mercury"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        choices: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Pt"],
        correctAnswer: "Au"
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the longest river in the world?",
        choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswer: "Nile"
    },
    {
        question: "What is the primary gas found in the Earth's atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen"
    },
    {
        question: "Which planet is known as the Morning Star or the Evening Star?",
        choices: ["Mercury", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Venus"
    },
    {
        question: "What year did the Berlin Wall fall?",
        choices: ["1987", "1988", "1989", "1990"],
        correctAnswer: "1989"
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Sahara", "Arctic", "Antarctic", "Gobi"],
        correctAnswer: "Antarctic"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        choices: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Michelangelo"
    },
    {
        question: "What is the name of the longest river in South America?",
        choices: ["Amazon", "Paraná", "Orinoco", "São Francisco"],
        correctAnswer: "Amazon"
    },
    {
        question: "What is the smallest country in the world?",
        choices: ["Monaco", "Vatican City", "Nauru", "San Marino"],
        correctAnswer: "Vatican City"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "S", "N", "Si"],
        correctAnswer: "Na"
    },
    {
        question: "What is the hardest rock on Earth?",
        choices: ["Granite", "Diamond", "Quartz", "Marble"],
        correctAnswer: "Diamond"
    },
    {
        question: "What is the capital of Egypt?",
        choices: ["Cairo", "Alexandria", "Giza", "Luxor"],
        correctAnswer: "Cairo"
    }
];
var score = 0;
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
// Select 10 random questions from the shuffled array
var selectedQuestions = shuffleArray(questions).slice(0, 10);
function askQuestions() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, selectedQuestions_1, q, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, selectedQuestions_1 = selectedQuestions;
                    _a.label = 1;
                case 1:
                    if (!(_i < selectedQuestions_1.length)) return [3 /*break*/, 4];
                    q = selectedQuestions_1[_i];
                    return [4 /*yield*/, inquirer.prompt({
                            name: 'response',
                            type: 'list',
                            message: q.question,
                            choices: q.choices
                        })];
                case 2:
                    answer = _a.sent();
                    if (answer.response === q.correctAnswer) {
                        score++;
                    }
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("Your final score is: ".concat(score, "/10"));
                    return [2 /*return*/];
            }
        });
    });
}
askQuestions();
