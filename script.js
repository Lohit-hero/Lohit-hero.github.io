// Initialize AOS library with custom config
AOS.init({
  duration: 1000,
  easing: 'ease-out-back',
  once: true, // Animate only once on scroll (no repeat)
});

// Optional: Smooth scroll for internal links (enhance Explore & nav links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetElem = document.querySelector(anchor.getAttribute('href'));
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
