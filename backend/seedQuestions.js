const mongoose = require('mongoose');
const config = require('./config');
const Question = require('./models/Question');

const questions = [
  {
    questionText: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answerIndex: 1
  },
  {
    questionText: "Which data structure uses FIFO order?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answerIndex: 1
  },
  {
    questionText: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Marking Language"],
    answerIndex: 1
  },
  {
    questionText: "Which of the following is NOT a JavaScript data type?",
    options: ["Undefined", "Number", "Float", "Boolean"],
    answerIndex: 2
  },
  {
    questionText: "What is the worst case time complexity of Quick Sort?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    answerIndex: 0
  },
  {
    questionText: "In CSS, what does 'float' property do?",
    options: ["Defines floating-point precision", "Positions elements to the left or right", "Sets transparency", "Changes font size"],
    answerIndex: 1
  },
  {
    questionText: "Which of these is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    answerIndex: 1
  },
  {
    questionText: "What data structure is used for function call management?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    answerIndex: 1
  },
  {
    questionText: "Which HTTP method is used to update a resource partially?",
    options: ["POST", "PUT", "PATCH", "DELETE"],
    answerIndex: 2
  },
  {
    questionText: "Which symbol is used for IDs in CSS selectors?",
    options: [".", "#", "*", "$"],
    answerIndex: 1
  },
  {
    questionText: "What is event bubbling?",
    options: ["Events propagate from child to parent", "Events propagate from parent to child", "Events only trigger once", "Events get canceled"],
    answerIndex: 0
  },
  {
    questionText: "What structure does JSON data format resemble?",
    options: ["Array", "Object", "String", "Binary"],
    answerIndex: 1
  },
  {
    questionText: "Which of the following is NOT a front-end JavaScript framework?",
    options: ["React", "Vue", "Angular", "Django"],
    answerIndex: 3
  },
  {
    questionText: "In a linked list, what does each node store?",
    options: ["Data and index", "Data and pointer to next node", "Data only", "Pointer only"],
    answerIndex: 1
  },
  {
    questionText: "Which protocol is the foundation of data communication over the web?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    answerIndex: 1
  },
  {
    questionText: "Which JavaScript keyword declares a constant variable?",
    options: ["var", "let", "const", "constant"],
    answerIndex: 2
  },
  {
    questionText: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Order Machine", "Desktop Oriented Mode"],
    answerIndex: 0
  },
  {
    questionText: "What is a closure in JavaScript?",
    options: [
      "A function having access to the parent scope",
      "A variable that can’t be changed",
      "A built-in library",
      "An error handling mechanism"
    ],
    answerIndex: 0
  },
  {
    questionText: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answerIndex: 2
  },
  {
    questionText: "Which sorting algorithm is stable?",
    options: ["Bubble Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
    answerIndex: 0
  }
];

async function seed() {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Clear existing questions (optional)
    await Question.deleteMany({});
    console.log('Cleared existing questions');

    // Insert new questions
    await Question.insertMany(questions);
    console.log('Inserted questions');

    mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding questions:', err);
  }
}

seed();
