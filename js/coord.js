let stillTime = 0;
let lastAccel = null;
let interval = null;

function isStill(accel) {
  if (!lastAccel) return false;
  const dx = Math.abs(accel.x - lastAccel.x);
  const dy = Math.abs(accel.y - lastAccel.y);
  const dz = Math.abs(accel.z - lastAccel.z);
  return dx < 0.5 && dy < 0.5 && dz < 0.5;
}

function startTracking() {
  window.addEventListener("devicemotion", (event) => {
    const accel = event.accelerationIncludingGravity;
    if (!accel) return;

    if (lastAccel && isStill(accel)) {
      stillTime += 0.1;
    } else {
      stillTime = 0;
    }

    lastAccel = accel;

    document.getElementById("coord-info").innerText =
      `Hold still for 5 seconds... (${stillTime.toFixed(1)}s)`;

    if (stillTime >= 5) {
      localStorage.setItem("coordPassed", "true");
      window.location.href = "results.html";
    }
  });
}

window.onload = () => {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission().then(permission => {
      if (permission === 'granted') {
        startTracking();
      } else {
        alert("Permission denied for motion tracking.");
      }
    });
  } else {
    startTracking();
  }
};
