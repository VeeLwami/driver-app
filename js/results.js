window.onload = function () {
  const quiz = parseInt(localStorage.getItem("quizScore") || "0");
  const bac = parseFloat(localStorage.getItem("bacLevel") || "1");
  const coord = localStorage.getItem("coordPassed") === "true";
  const passed = quiz >= 2 && bac < 0.05 && coord;
  document.body.innerHTML = passed
    ? "<h2>✅ You are eligible to drive</h2>"
    : "<h2>❌ Not Eligible! Car Locked</h2>";
  if (!passed) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      document.body.innerHTML += `<p>Your location: ${latitude}, ${longitude}</p>`;
    });
  }
}
