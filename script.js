// Minimal enhancements for the site
(function() {
  'use strict';

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Subtle fade-in on page load
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.2s ease';
  window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
  });

  // Highlight current nav link based on URL
  const currentPath = window.location.pathname;
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || 
        (href === '/' && (currentPath === '/' || currentPath === '/index.html')) ||
        (currentPath.startsWith(href) && href !== '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

})();

