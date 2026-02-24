// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navLinks.classList.remove('active');
        }
    });
});

// Form submission
const bookingForm = document.querySelector('.booking-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Rezervimi u dërgua! Do t'ju kontaktojmë së shpejti.');
    bookingForm.reset();
});
