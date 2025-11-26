// Minimal script for navigation and interactions
// Currently this site works entirely without JavaScript
// This file is included for future enhancements if needed

(function() {
  'use strict';

  // Smooth scroll for anchor links (if any are added)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add loaded class for potential CSS transitions on page load
  document.body.classList.add('loaded');
})();

