// ============================================
// NAV SCROLL
// ============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ============================================
// MOBILE NAV
// ============================================
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
});

links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
    });
});

// ============================================
// SCROLL FADE-IN
// ============================================
const faders = document.querySelectorAll('.fade-in');

if (faders.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    faders.forEach(el => observer.observe(el));
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
