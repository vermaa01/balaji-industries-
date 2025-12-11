// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav ul');

mobileMenu.addEventListener('click', function() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    nav.style.padding = '20px';
    nav.style.zIndex = '1000';
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would normally send the form data to a server
    alert('Thank you for your inquiry! We will get back to you soon.');
    this.reset();
});

// Arrow hover: shake whole page and move dot
document.addEventListener('DOMContentLoaded', function() {
    // hero arrow/dot interaction removed
});
