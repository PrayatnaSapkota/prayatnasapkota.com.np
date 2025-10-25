const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// ======== DARK MODE TOGGLE (Dark = default) ========
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Switch theme handler
function switchTheme(e) {
  if (e.target.checked) {
    // Checked → light mode
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    // Unchecked → dark mode
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// Listen for toggle
toggleSwitch.addEventListener("change", switchTheme, false);

// Apply saved theme OR default to dark
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  toggleSwitch.checked = true; // move toggle to light
} else {
  // Default: dark mode
  document.documentElement.setAttribute("data-theme", "dark");
  toggleSwitch.checked = false; // dark = default position
  localStorage.setItem("theme", "dark");
}
