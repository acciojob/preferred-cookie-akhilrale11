// Utility to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Utility to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Apply preferences from cookies
function applyPreferences() {
  const fontSize = getCookie("fontsize") || "16";
  const fontColor = getCookie("fontcolor") || "#000000";

  // Apply preferences to the document
  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Set form values to match preferences
  document.getElementById("fontsize").value = fontSize;
  document.getElementById("fontcolor").value = fontColor;
}

// Save preferences to cookies
function savePreferences() {
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  setCookie("fontsize", fontSize, 7); // Save for 7 days
  setCookie("fontcolor", fontColor, 7);

  applyPreferences();
}

// Event Listener for Save Button
document.getElementById("save-btn").addEventListener("click", savePreferences);

// Apply preferences on page load
window.addEventListener("load", applyPreferences);
