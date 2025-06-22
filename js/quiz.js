const questions = [
  { q: "What color is a stop sign?", a: "Red", choices: ["Red", "Green", "Blue"] },
  { q: "What's 5 + 7?", a: "12", choices: ["10", "12", "15"] },
  { q: "Which comes first: red or green in traffic lights?", a: "Red", choices: ["Green", "Yellow", "Red"] }
];
let score = 0;
function checkAnswer(i, answer) {
  if (questions[i].a === answer) score++;
  if (i + 1 < questions.length) renderQuestion(i + 1);
  else {
    localStorage.setItem("quizScore", score);
    window.location.href = "bac.html";
  }
}
function renderQuestion(i) {
  const q = questions[i];
  document.body.innerHTML = `<h2>${q.q}</h2>` +
    q.choices.map(c => `<button onclick="checkAnswer(${i}, '${c}')">${c}</button>`).join("");
}
window.onload = () => renderQuestion(0);
