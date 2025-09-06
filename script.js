document.addEventListener("DOMContentLoaded", function () {
    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.options ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- "Hire me" button scroll to contact ---
    const hireMeButton = document.querySelector('.btn1 button');
    const contactSection = document.querySelector('#contact');

    if (hireMeButton && contactSection) {
        hireMeButton.addEventListener('click', () => {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    }

    // --- Fade-in Animation on Scroll ---
    const sections = document.querySelectorAll('.about, .middle, .projects');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    sections.forEach(section => {
        observer.observe(section);
    });
});