window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); // Apply white shade when scrolling down
    } else {
      navbar.classList.remove("scrolled"); // Remove shade at the top
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelector(".ratings");
    const awardBadge = document.querySelector(".award_badge");
  
    function handleScroll() {
      const ratingsPosition = ratings.getBoundingClientRect().top;
      const awardBadgePosition = awardBadge.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Check if the ratings section is in view
      if (ratingsPosition < windowHeight - 100) {
        ratings.classList.add("visible");
      }
  
      // Check if the award_badge section is in view
      if (awardBadgePosition < windowHeight - 100) {
        awardBadge.classList.add("visible");
      }
  
      // Remove event listener after triggering animation for both
      if (ratings.classList.contains("visible") && awardBadge.classList.contains("visible")) {
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });
  


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Select all testimonial cards and observe them
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card) => observer.observe(card));