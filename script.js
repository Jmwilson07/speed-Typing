let spanEl = document.getElementById("time");
let randomText = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let userinputEl = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let startTime;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    startTime = 0;
    spanEl.textContent = "0";
    timerInterval = setInterval(() => {
        startTime += 1;
        spanEl.textContent = startTime;
    }, 1000);
}


function displayRandomQuote() {
    spinnerEl.classList.remove("d-none");
    fetch("https://apis.ccbp.in/random-quote")
        .then(response => response.json())
        .then(data => {
            randomText.textContent = data.content;
            spinnerEl.classList.add("d-none");
        });
}


submitBtn.addEventListener("click", function() {
    if (userinputEl.value === randomText.textContent) {
        resultEl.textContent = `You typed in ${startTime} seconds`;
        clearInterval(timerInterval);
    } else {
        resultEl.textContent = "You typed an incorrect sentence.";
    }
});

resetBtn.addEventListener("click", function() {
    userinputEl.value = "";
    resultEl.textContent = "";
    startTimer();
    displayRandomQuote();
});


function initializeTypingTest() {
    startTimer();
    displayRandomQuote();
}

initializeTypingTest();