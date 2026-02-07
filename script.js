// Quiz Game Logic
const questions = [
    { question: "where did we first met offline?", options: ["cottage cafe", "elante", "cosmo"], answer: 0 },
    { question: "which flower i like the most?", options: ["red rose", "anything you give", "sunflowers"], answer: 1 },
    { question: "what i love the most?", options: ["you", "a", "b"], answer: 2 },
    // Add more questions here
];

let score = 0;
for (const q of questions) {
    let correctAnswer = q.options[q.answer];
    let userAnswer = "";

    // This loop keeps running until the user types the exact correct answer
    while (userAnswer !== correctAnswer) {
        userAnswer = prompt(q.question + '\n' + q.options.join('\n'));
        
        if (userAnswer === correctAnswer) {
            alert("Correct! ❤️ Moving to the next one...");
        } else {
            alert("Oops! Try again...");
        }
    }
}
alert("Yay! You finished the quiz!");
alert('Your score is: ❤️❤️😘' + score);

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
