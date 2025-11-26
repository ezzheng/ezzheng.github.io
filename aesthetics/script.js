// Minimal enhancements for the site
(function() {
  'use strict';

  const root = document.documentElement;

  // Apply saved theme preference immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  }

  // Theme Toggle
  const toggle = document.querySelector('.theme-toggle');
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Determine current effective theme
      const isCurrentlyDark = current === 'dark' || (!current && systemDark);
      
      // Toggle to opposite
      const next = isCurrentlyDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

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

})();
