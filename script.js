const questions = [
 {
        "que": "What does 'step00_helloworld' refer to in programming?",
        "A": "A program that prints 'Hello, World!'",
        "B": "A syntax error",
        "C": "A variable declaration",
        "D": "A TypeScript module",
        "correct": "A"
    },
    {
        "que": "What does JSON stand for?",
        "A": "JavaScript Object Notation",
        "B": "JavaScript Online",
        "C": "Java System Output",
        "D": "Java Syntax Overload",
        "correct": "A"
    },
    {
        "que": "What is a Syntax Error?",
        "A": "An error in the code structure",
        "B": "An error in the logic",
        "C": "An error in the runtime",
        "D": "An error in the variable declaration",
        "correct": "A"
    },
    {
        "que": "What is 'step01_strong_typing' in TypeScript?",
        "A": "Ensuring variables are of a specific type",
        "B": "Declaring a variable",
        "C": "Creating a function",
        "D": "Handling errors",
        "correct": "A"
    },
    {
        "que": "Which keyword is used for block-scoped variable declaration?",
        "A": "let",
        "B": "var",
        "C": "const",
        "D": "both let and const",
        "correct": "D"
    },
    {
        "que": "Which of the following is a module system in TypeScript?",
        "A": "CommonJS",
        "B": "AMD",
        "C": "ESM",
        "D": "All of the above",
        "correct": "D"
    },
    {
        "que": "Which module format is used for native ECMAScript modules?",
        "A": "ESM",
        "B": "CommonJS",
        "C": "AMD",
        "D": "UMD",
        "correct": "A"
    },
    {
        "que": "Which package is used for user prompts in Node.js?",
        "A": "inquirer",
        "B": "chalk",
        "C": "lodash",
        "D": "express",
        "correct": "A"
    },
    {
        "que": "What is the use of the 'chalk' package in Node.js?",
        "A": "To style terminal string output",
        "B": "To parse JSON",
        "C": "To manage file systems",
        "D": "To make HTTP requests",
        "correct": "A"
    },
    {
        "que": "Which type in TypeScript can hold multiple types?",
        "A": "Union types",
        "B": "String",
        "C": "Number",
        "D": "Boolean",
        "correct": "A"
    },
    {
        "que": "What are the primitive types in TypeScript?",
        "A": "String, Number, Boolean, Null, Undefined, Symbol",
        "B": "Object, Array, Function",
        "C": "Map, Set, WeakMap",
        "D": "Class, Interface, Enum",
        "correct": "A"
    },
    {
        "que": "What does 'step05a_objects' represent in TypeScript?",
        "A": "Working with objects",
        "B": "Handling arrays",
        "C": "Defining functions",
        "D": "Creating modules",
        "correct": "A"
    },
    {
        "que": "What does 'step05b_object_aliased' represent?",
        "A": "Using type aliases for objects",
        "B": "Creating arrays",
        "C": "Defining classes",
        "D": "Handling errors",
        "correct": "A"
    },
    {
        "que": "What does 'step05d_nested_objects' represent?",
        "A": "Objects within objects",
        "B": "Functions within functions",
        "C": "Arrays within arrays",
        "D": "Modules within modules",
        "correct": "A"
    },
    {
        "que": "What are intersection types in TypeScript?",
        "A": "Combining multiple types into one",
        "B": "Separating types",
        "C": "Casting types",
        "D": "Deleting types",
        "correct": "A"
    },
    {
        "que": "Which types are considered top types in TypeScript?",
        "A": "any, unknown",
        "B": "never",
        "C": "number",
        "D": "string",
        "correct": "A"
    },
    {
        "que": "What is explicit casting in TypeScript?",
        "A": "Manually specifying a type",
        "B": "Automatically inferring a type",
        "C": "Declaring a variable",
        "D": "Handling errors",
        "correct": "A"
    },
    {
        "que": "What does the enum keyword represent?",
        "A": "An enumeration",
        "B": "A class",
        "C": "A function",
        "D": "An object",
        "correct": "A"
    },
    {
        "que": "What does 'const enum' in TypeScript represent?",
        "A": "A constant enumeration",
        "B": "A variable declaration",
        "C": "A function definition",
        "D": "A module export",
        "correct": "A"
    },
    {
        "que": "Which type in TypeScript can hold an ordered list of values?",
        "A": "Array",
        "B": "Object",
        "C": "Enum",
        "D": "Tuple",
        "correct": "A"
    },
    {
        "que": "What is an optional parameter in TypeScript functions?",
        "A": "A parameter that may or may not be provided",
        "B": "A required parameter",
        "C": "A parameter with a default value",
        "D": "A parameter that is always null",
        "correct": "A"
    },
    {
        "que": "What is a rest parameter in TypeScript?",
        "A": "A parameter that collects all remaining arguments into an array",
        "B": "A required parameter",
        "C": "A parameter with a default value",
        "D": "A parameter that is always null",
        "correct": "A"
    },
    {
        "que": "What does 'async' represent in TypeScript?",
        "A": "Asynchronous functions",
        "B": "Synchronous functions",
        "C": "Variable declarations",
        "D": "Module imports",
        "correct": "A"
    },
    {
        "que": "What are function overloads in TypeScript?",
        "A": "Multiple function signatures with the same name",
        "B": "Variables with the same name",
        "C": "Classes with the same name",
        "D": "Modules with the same name",
        "correct": "A"
    },
    {
        "que": "What is a tuple in TypeScript?",
        "A": "An array with a fixed number of elements of specific types",
        "B": "A variable declaration",
        "C": "A class definition",
        "D": "A function definition",
        "correct": "A"
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options');
const feedback = document.getElementById("feedback");

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }

    reset();

    const data = questions[index];
    queBox.innerText = `${index + 1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.A;
    optionInputs[1].nextElementSibling.innerText = data.B;
    optionInputs[2].nextElementSibling.innerText = data.C;
    optionInputs[3].nextElementSibling.innerText = data.D;
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    });
    feedback.innerText = ''; // Clear the feedback message
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        wrong++;
        feedback.innerText = `Wrong! The correct answer is ${data.correct}`;
        feedback.style.color = "red";
    }
    index++;
    setTimeout(loadQuestion, 2000); // Wait 2 seconds before loading the next question
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3>Thank you for playing the quiz</h3>
    <h2>${right} out of ${total} are correct</h2>`;
};

// Initial call
loadQuestion();