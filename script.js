// Toggle menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Dark mode toggle
const darkModeToggle = document.getElementById("darkmode-toggle");
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});

// Remove menu when clicking on nav links
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// Scroll sections active link
const sections = document.querySelectorAll("section");
const navLinksHeaders = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinksHeaders.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove menu and toggle icon when scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal Animation
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .projects-container, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed.js Animation
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Angular Developer", "UI/UX Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
