const questions = [
  {
    text: "Your ideal weekend is...",
    options: [
      { text: "Netflix & snacks 🍿", type: "chill" },
      { text: "Road trip with friends 🚗", type: "wild" },
      { text: "Finishing a creative project 🎨", type: "moody" },
      { text: "Dancing all night 💃", type: "energetic" },
    ],
  },
  {
    text: "Pick a snack:",
    options: [
      { text: "Hot Cheetos 🔥", type: "wild" },
      { text: "Ice cream 🍦", type: "chill" },
      { text: "Coffee ☕️", type: "moody" },
      { text: "Smoothie 🍓", type: "energetic" },
    ],
  },
  {
    text: "Your playlist vibe is:",
    options: [
      { text: "Indie/Lo-fi 🎧", type: "moody" },
      { text: "EDM/Pop 🔊", type: "energetic" },
      { text: "Classical/Chillhop 🎼", type: "chill" },
      { text: "Everything loud & chaotic 🤘", type: "wild" },
    ],
  },
];

const results = {
  chill: "🌊 Chill Zen Master",
  wild: "🔥 Chaotic Energy Goblin",
  moody: "🎭 Moody Aesthetic Babe",
  energetic: "⚡ Hype Machine Extraordinaire",
};

let currentQuestion = 0;
let scores = { chill: 0, wild: 0, moody: 0, energetic: 0 };

function showQuestion() {
  const q = questions[currentQuestion];
  const quiz = document.getElementById("quiz");
  quiz.style.display = "block";
  document.getElementById("result").style.display = "none";
  quiz.innerHTML = `<div class="question"><h3>${q.text}</h3></div>`;
  const answers = document.createElement("div");
  answers.className = "answers";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => {
      scores[opt.type]++;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answers.appendChild(btn);
  });
  quiz.appendChild(answers);
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  const topType = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  resultBox.textContent = `Your vibe is: ${results[topType]}`;
}

function restartQuiz() {
  currentQuestion = 0;
  scores = { chill: 0, wild: 0, moody: 0, energetic: 0 };
  showQuestion();
}

// Initialize quiz on page load
showQuestion();
