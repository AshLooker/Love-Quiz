console.log("connected!")

const quizContainer = document.getElementById('quiz')
const submitButton = document.getElementById('submit')
const resultContainer = document.getElementById('results')

function buildQuiz(){}

function showResults(){}

// display quiz right away 
buildQuiz();

// on submit, show results 
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            A: "Douglas Crockford",
            B: "Sheryl Sandberg",
            C: "Brendan Eich",
            D: "Steve Wozniak"
        },
        correctAnswer: "C"
    },
    {
        question: "What was the first computer that had a colour display?",
        answers: {
            A: "iMac",
            B: "Apple II",
            C: "BBC Micro",
            D: "Amiga 500"
        },
        correctAnswer: "B"
    },
    {
        question: "What percentage of people are said to plug their USB devices incorrectly during their first attempt?",
        answers: {
            A: "86%",
            B: "Must be 100%",
            C: "41%",
            D: "I assume eveyone is just like me, so 0%"
        },
        correctAnswer: "A"
    },
    {
        question: "Microsoft co-founder Bill Gates' house was partly designed on a Mac. True or false?",
        answers: {
            A: "True",
            B: "False"
        },
        correctAnswer: "A"
    },
    {
        question: "What do you call a computer's main circuit board?",
        answers: {
            A: "Computer board",
            B: "Micro Board",
            C: "Motherboard",
            D: "Fatherboard"
        },
        correctAnswer: "C"
    },
    {
        question: "What does I.T. stand for?",
        answers: {
            A: "Internet Technology",
            B: "Information Technology",
            C: "Intranet Technology",
            D: "Important Technology"
        },
        correctAnswer: "B"
    },
    {
        question: "Who created the first modern computer?",
        answers: {
            A: "Steve Jobs",
            B: "Bill Gates",
            C: "Arthur C Clarke",
            D: "Charles Babbage"
        },
        correctAnswer: "D"
    },
    {
        question: "Which one is the first search engine in internet?",
        answers: {
            A: "Google",
            B: "Archie",
            C: "Altavista",
            D: "WAIS"
        },
        correctAnswer: "B"
    },
    {
        question: "Which one is the first web browser, invented in 1990?",
        answers: {
            A: "Internet Explorer",
            B: "Mosaic",
            C: "Mozilla",
            D: "Nexus"
        },
        correctAnswer: "D"
    },
    {
        question: "Which of the folowing programming languages is used to create programs like applets?",
        answers: {
            A: "COBOL",
            B: "C Langauge",
            C: "Java",
            D: "BASIC"
        },
        correctAnswer: "C"
    },
    {
        question: "What was the first computer virus known as?",
        answers: {
            A: "Rabbit",
            B: "Creeper Virus",
            C: "Elk Cloner",
            D: "SCA Virus"
        },
        correctAnswer: ""
    },
    {
        question: "Which one of these languages is exclusively used for artificial intelligence? ",
        answers: {
            A: "C",
            B: "Java",
            C: "J2EE",
            D: "Prolog"
        },
        correctAnswer: "D"
    },
    {
        question: "Firewall in computer is used for what?",
        answers: {
            A: "Security",
            B: "Data Transmission",
            C: "Authentication",
            D: "Monitoring "
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following, is not an operating system?",
        answers: {
            A: "DOS",
            B: "Mac",
            C: "C",
            D: "Linux"
        },
        correctAnswer: "C"
    },
    {
        question: "How many layers are in the OSI (Open Systems Interconnection) Model?",
        answers: {
            A: "9",
            B: "3",
            C: "7",
            D: "11"
        },
        correctAnswer: "C"
    },
    {
        question: "Where is the headquarters of Microsoft located?",
        answers: {
            A: "Texas",
            B: "New York",
            C: "California",
            D: "Washington"
        },
        correctAnswer: "D"
    },
    {
        question: "Computer Hard Disks were first introduced in 1956 by which company?",
        answers: {
            A: "Dell",
            B: "Apple",
            C: "Microsoft",
            D: "IBM"
        },
        correctAnswer: "D"
    },
    {
        question: "In the computer world, a Trojan is refered to, as what?",
        answers: {
            A: "Virus",
            B: "Malware",
            C: "Worm",
            D: "Spyware"
        },
        correctAnswer: "B"
    },
    {
        question: "A computer uses which type of number system to calculate and store data?",
        answers: {
            A: "Decimal",
            B: "Octal",
            C: "Binary",
            D: "Hexadecimal"
        },
        correctAnswer: "C"
    },
    {
        question: "How many layers are in the TCP/IP protocol?",
        answers: {
            A: "7",
            B: "5",
            C: "4",
            D: "11"
        },
        correctAnswer: "C"
    },
];