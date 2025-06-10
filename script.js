let currentQuestionIndex = 0;
let scores = {
  companions: 0,
  thieves: 0,
  darkBrotherhood: 0,
  college: 0,
  stormcloaks: 0,
  imperial: 0,
  neutral: 0,
};

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const responseEl = document.getElementById("response");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function showQuestion() {
  responseEl.textContent = "";
  nextBtn.style.display = "none";
  const currentQ = questions[currentQuestionIndex];
  questionEl.textContent = currentQ.text;
  choicesEl.innerHTML = "";

  currentQ.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.onclick = () => selectAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(choice) {
  // Update scores
  for (const faction in choice.effects) {
    scores[faction] += choice.effects[faction];
  }
  responseEl.textContent = choice.response;
  // Disable all buttons after selection
  [...choicesEl.children].forEach(btn => btn.disabled = true);
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    showResult();
  } else {
    showQuestion();
  }
});

function showResult() {
  questionEl.style.display = "none";
  choicesEl.style.display = "none";
  responseEl.style.display = "none";
  nextBtn.style.display = "none";

  // Find highest score faction(s)
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.entries(scores)
    .filter(([faction, score]) => score === maxScore && faction !== "neutral")
    .map(([faction]) => faction);

  let resultText = "You align most with: ";
  if (winners.length > 1) {
    resultText += winners.join(" & ");
  } else if (winners.length === 1) {
    resultText += winners[0];
  } else {
    resultText += "No strong alignment";
  }

  resultEl.textContent = resultText;
  resultEl.style.display = "block";
}

// Initial call
showQuestion();

