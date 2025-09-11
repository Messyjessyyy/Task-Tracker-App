// Typing animation (already included in your HTML, but can also be modularized here)
document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('#typing', {
      strings: ['UX/UI Designer.', 'Frontend Developer.', 'Tech Enthusiast.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true
    });
  });
  
  // OPTIONAL: Scroll reveal animations
  window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".project-card, .contact, footer");
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  });
  
