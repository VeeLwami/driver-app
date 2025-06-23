window.onload = function () {
  const quiz = parseInt(localStorage.getItem("quizScore") || "0");
  const bac = parseFloat(localStorage.getItem("bacLevel") || "1");
  const coord = localStorage.getItem("coordPassed") === "true";
  const passed = quiz >= 2 && bac < 0.05 && coord;


  if (bac < 0.03) {
    document.body.style.backgroundColor = "#c8f7c5"; // green
  } else if (bac < 0.05) {
    document.body.style.backgroundColor = "#fff3cd"; // yellow/orange
  } else {
    document.body.style.backgroundColor = "#f8d7da"; // red
  }

  document.body.innerHTML += passed
    ? "<h2>✅ You are eligible to drive</h2>"
    : "<h2>❌ Not Eligible! Car Locked</h2>";

 if (!passed) {
  if ("geolocation" in navigator) {
    // Optional: Check permission first
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      console.log("Permission state:", result.state); // For debugging

      if (result.state === "granted" || result.state === "prompt") {
        // Try to get location
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            document.body.innerHTML += `<p>Your location: ${latitude}, ${longitude}</p>`;
          },
          (error) => {
            document.body.innerHTML += `<p>Location has been sent out</p>`;
          }
        );
      } else {
        document.body.innerHTML += `<p>Location access denied by user or browser settings.</p>`;
      }
    });
  } else {
    document.body.innerHTML += `<p>Geolocation is not supported by your browser.</p>`;
  }
}
};
