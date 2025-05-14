// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight nav link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Contact form submission
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    form.reset();
  });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Add animated background
const animatedBg = document.createElement('div');
animatedBg.className = 'animated-bg';
document.body.appendChild(animatedBg);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from('.hero-overlay', {
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: 'power4.out'
});

// Feature strip animation
gsap.from('.feature', {
  scrollTrigger: {
    trigger: '.feature-strip',
    start: 'top center'
  },
  duration: 0.8,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: 'back.out(1.7)'
});

// About cards animation
gsap.from('.about-card', {
  scrollTrigger: {
    trigger: '.about-cards',
    start: 'top center'
  },
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});

// What we do cards animation
gsap.from('.what-card', {
  scrollTrigger: {
    trigger: '.what-cards',
    start: 'top center'
  },
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});

// Team cards animation
gsap.from('.team-card', {
  scrollTrigger: {
    trigger: '.team-cards',
    start: 'top center'
  },
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});

// Add glow effect to cards
document.querySelectorAll('.about-card, .what-card, .team-card').forEach(card => {
  card.classList.add('glow');
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 70
          },
          ease: 'power3.inOut'
        });
      }
    }
  });
}); 