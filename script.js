function handleSubmit(event) {
    event.preventDefault();

    const contactMessage = document.getElementById('contactMessage');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        contactMessage.textContent = 'Please complete every field before sending.';
        contactMessage.style.color = '#b91c1c';
        return;
    }

    const mailTo = 'dechammaak2@gmail.com';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`);
    const mailtoLink = `mailto:${mailTo}?subject=${subject}&body=${body}`;

    contactMessage.textContent = 'Opening your email app. Then click send to deliver the message.';
    contactMessage.style.color = '#0f5132';
    window.location.href = mailtoLink;
    event.target.reset();
}

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    navLinks.classList.toggle('open');
}

function closeNavOnLinkClick() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    const toggleButton = document.querySelector('.nav-toggle');

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }
        });
    });

    if (toggleButton) {
        toggleButton.addEventListener('click', toggleNav);
    }
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initRevealAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    closeNavOnLinkClick();
    initRevealAnimations();
});