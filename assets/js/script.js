//Lists of questions and answers (2 arrays)
let questionList = ["How many continents does the world have?",
    "What is the capital city of Singapore?",
    "12 / 3 *14 + 7 - 3 * 4 = ?",
    "The smallest country in the world:",
    "What does 'pi' stand for?",
    "What do you mean by flabbergasted?",
    "What is the logarithm of 7?",
    "The biggest country in the world",
    "The highest mountain in the world",
    "What is the capital city of Burkina Faso?",
    "Which year was Johann Wolfgang von Goethe born?",
    "Which country was the very first to come up with a 'Ministry Of Happiness'?",
    "how many words could the very first built computer store?",
    "Who invented the Binary System?",
    "Where did Cacao plant originate?",
    "12.2 * 2 * 3.5 - 17 + 5 = ?",
    "The Pythagorean Theorem Formula",
    "In which century was the war that lasted 30 years?",
    "Who invented Wifi?",
    "When was the first FIFA World Cup?"
];


let answerList = [
    "7 Continents",
    "Singapore",
    "-4.71",
    "Vatican City",
    "3.141516",
    "astound",
    "0.845",
    "Russia",
    "Mount Everest",
    "Ouagadougou",
    "1749",
    "Bhutan",
    "64 words",
    "Gottfried Leibniz",
    "Latin America",
    "63.4",
    "L * W ",
    "17th Century",
    "Hedy Lamarr",
    "1930"
];


//Initializing the displayed question
document.getElementById("questions").innerHTML = questionList[0];


//Running the previous and next buttons
let i = 0;

function prev() {
    if (i === 0) {
        i = questionList.length;        
    }
    i--;
    return questionList[i];
  }
document.getElementById("button-prev").addEventListener("click", function(e) {
    document.getElementById("questions").innerHTML = prev(); 
});


function next() {
    i++;
    i = 1 % questionList.length;
    return questionList[i];
}
document.getElementById("button-next").addEventListener("click", function(e) {
    document.getElementById("questions").innerHTML = next();
});


//Displaying the correct answer
document.getElementById("ans-prev-next").addEventListener("click", function(e) {
    document.getElementById("answer").innerHTML = prevAnswer();
    document.getElementById("answer").innerHTML = nextAnswer();
});

//User's inputted answer
function inputtedAnswer() {
    let userInput = document.getElementById("givenAnswer").value;
    document.getElementById("message").innerHTML = userInput;
}

