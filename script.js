// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project Card Click Handler
function openProject(url) {
  window.open(url, '_blank');
}

// Contact Form Submission
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}