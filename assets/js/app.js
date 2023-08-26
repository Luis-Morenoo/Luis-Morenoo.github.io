
// JavaScript to create the typing effect
const textToType = "Hello My Name is Luis!";
const typingText = document.getElementById("typing-text");

function typeText(text, index) {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(function () {
      typeText(text, index);
    }, 100); // Adjust the typing speed here (milliseconds)
  } else {
    // Add the loading dot when typing is complete
    typingText.innerHTML += "<span class='loading-dot'>...</span>";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  typeText(textToType, 0);
});


// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});





