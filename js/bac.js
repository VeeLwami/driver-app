function submitBAC() {
  const bac = parseFloat(document.getElementById("bac").value);
  localStorage.setItem("bacLevel", bac);
  window.location.href = "coord.html";
}
