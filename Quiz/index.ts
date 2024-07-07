import inquirer from 'inquirer';

type Question = {
  question: string;
  choices: string[];
  correctAnswer: string;
};

const questions: Question[] = [
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

let score = 0;

function shuffleArray(array: Question[]): Question[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Select 10 random questions from the shuffled array
  const selectedQuestions = shuffleArray(questions).slice(0, 10);
  
  async function askQuestions() {
    for (const q of selectedQuestions) {
      const answer = await inquirer.prompt({
        name: 'response',
        type: 'list',
        message: q.question,
        choices: q.choices
      });
  
      if (answer.response === q.correctAnswer) {
        score++;
      }
    }
  
    console.log(`Your final score is: ${score}/10`);
  }
  
  askQuestions();
