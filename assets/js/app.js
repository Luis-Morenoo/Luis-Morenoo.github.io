
// JavaScript to create the typing effect
const textToType = "Hello My Name is Luis!";
const typingText = document.getElementById("typing-text");

function typeText(text, index) {
  if (!typingText) return; // #typing-text isn't in the current hero markup — no-op instead of crashing
  if (index < text.length) {
    typingText.appendChild(document.createTextNode(text.charAt(index)));
    index++;
    setTimeout(function () {
      typeText(text, index);
    }, 100); // Adjust the typing speed here (milliseconds)
  } else {
    // Add the loading dot when typing is complete
    const dot = document.createElement("span");
    dot.className = "loading-dot";
    dot.textContent = "...";
    typingText.appendChild(dot);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  typeText(textToType, 0);
});


// Nav hamburger menu selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-links a");

// Hamburger menu function
if (burger && ul) {
  burger.addEventListener("click", () => {
    const isOpen = ul.classList.toggle("show");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
  });

  // Keyboard support (Enter / Space) since the burger is a div, not a <button>
  burger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      burger.click();
    }
  });
}

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    if (!ul) return;
    ul.classList.remove("show");
    if (burger) {
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  })
);

// scroll to top functionality
if (scrollUp) {
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  // Only show the button once the user has scrolled down a bit
  window.addEventListener("scroll", () => {
    scrollUp.classList.toggle("show", window.scrollY > 400);
  });
}





