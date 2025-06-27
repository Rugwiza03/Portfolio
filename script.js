// Optional future animation or interaction logic
console.log("Adolphe's Portfolio Loaded");

// Simple scroll animation (optional enhancement)
document.querySelectorAll('.section-title').forEach(title => {
  title.style.opacity = 0;
  title.style.transition = 'opacity 0.6s ease';

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.1 });

  observer.observe(title);
});
