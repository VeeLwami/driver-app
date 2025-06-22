let timer;
document.getElementById("ball").addEventListener("drag", () => {
  timer = setTimeout(() => {
    localStorage.setItem("coordPassed", "true");
    window.location.href = "results.html";
  }, 3000);
});
