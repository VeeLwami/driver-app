function simulateBAC(mode) {
  let bac = 0;
  if (mode === 'safe') {
    bac = (Math.random() * 0.03 + 0.01).toFixed(3);  // 0.01 - 0.04
  } else {
    bac = (Math.random() * 0.06 + 0.05).toFixed(3);  // 0.05 - 0.11
  }
  document.getElementById("result").innerText = `Simulated BAC: ${bac}`;
  localStorage.setItem("bacLevel", bac);
  setTimeout(() => {
    window.location.href = "coord.html";
  }, 2000);
}
