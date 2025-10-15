console.log("JS file loaded!");

// Get elements
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

// Toggle the whole menu on mobile
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
  hamburger.classList.toggle("open");
});

// Handle dropdowns on mobile
const dropdownLinks = document.querySelectorAll(".dropdown > a");
dropdownLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      const parent = link.parentElement;
      const submenu = parent.querySelector(".dropdown-content");

      if (submenu) {
        // e.preventDefault(); // prevent page jump
        parent.classList.toggle("open");
      }
    }
  });
});

