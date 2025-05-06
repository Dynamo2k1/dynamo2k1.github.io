// Main Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initMatrix();
  initTerminal();
  initGitHubFeed();
  initTypewriter();
  initParticles();
  
  // Add event listeners
  document.querySelectorAll('.cyber-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 15px var(--matrix-green)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submission would be handled here with PGP encryption');
    });
  }
  
  // Initialize functions
  function initMatrix() {
    // Matrix effect is initialized in matrix.js
  }
  
  function initTerminal() {
    // Terminal is initialized in terminal.js
  }
  
  function initGitHubFeed() {
    // GitHub feed is initialized in github.js
  }
  
  function initTypewriter() {
    // Typewriter effect is initialized in typewriter.js
  }
  
  function initParticles() {
    // Particles effect is initialized in particles.js
  }
  
  // Add any other initialization functions here
});