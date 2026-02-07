// quiz.js
// Quiz Game Logic
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getCurrentQuestion().correctAnswer === answer) {
            this.score++;
        }
        this.questionIndex++;
    }

    hasEnded() {
        return this.questionIndex >= this.questions.length;
    }
}

// Quote Carousel Functionality
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West"
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById('quote');

function showQuote() {
    quoteElement.innerText = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(showQuote, 3000); // Change quote every 3 seconds

// Initialize the first quote
showQuote();