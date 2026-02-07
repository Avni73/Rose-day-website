// Quiz Game Logic
const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin"], answer: 0 },
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: 1 },
    // Add more questions here
];

let score = 0;
questions.forEach((q, index) => {
    const userAnswer = prompt(q.question + '\n' + q.options.join('\n'));
    if (userAnswer === q.options[q.answer]) {
        score++;
    }
});
alert('Your score is: ' + score);

// Quote Carousel Logic
const quotes = [
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "The only impossible journey is the one you never begin."
];
let currentIndex = 0;
const quoteDisplay = document.getElementById('quoteDisplay');

function displayQuote() {
    quoteDisplay.innerText = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length;
}

setInterval(displayQuote, 3000); // Change quote every 3 seconds
