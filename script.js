// script.js

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade in elements when they come into view using IntersectionObserver
const fadeElements = document.querySelectorAll('.project-card, .section-title');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  observer.observe(el);
});

// Theme toggle (Dark/Light Mode)
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌓';
toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '10px';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.border = 'none';
toggleBtn.style.backgroundColor = '#4f46e5';
toggleBtn.style.color = 'white';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
toggleBtn.style.transition = 'transform 0.3s ease';
toggleBtn.addEventListener('mouseenter', () => {
  toggleBtn.style.transform = 'scale(1.1)';
});
toggleBtn.addEventListener('mouseleave', () => {
  toggleBtn.style.transform = 'scale(1)';
});
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '⬆️';
backToTopBtn.setAttribute('aria-label', 'Back to top');
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '80px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.border = 'none';
backToTopBtn.style.backgroundColor = '#4f46e5';
backToTopBtn.style.color = 'white';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '1000';
backToTopBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.transform = 'translateY(0)';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.transform = 'translateY(20px)';
    setTimeout(() => {
      if (window.scrollY <= 200) backToTopBtn.style.display = 'none';
    }, 300);
  }
});

// Loading screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

// Animate hero text
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
  heroTitle.style.opacity = 0;
  heroTitle.style.transform = 'translateY(30px)';
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      heroTitle.style.opacity = 1;
      heroTitle.style.transform = 'translateY(0)';
    }, 300);
  });
}

// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = 0;
progressBar.style.left = 0;
progressBar.style.width = '0%';
progressBar.style.height = '5px';
progressBar.style.backgroundColor = '#4f46e5';
progressBar.style.zIndex = '999';
progressBar.style.transition = 'width 0.25s ease-out';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = `${scrolled}%`;
});
