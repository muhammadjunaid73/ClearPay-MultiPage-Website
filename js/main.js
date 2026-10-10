/* ==========================
   ClearPay: main.js
   Mobile nav, theme toggle, scroll reveal
========================== */

/* ---------- Mobile navigation ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

function setMenu(open) {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
}

if (navToggle && navMenu) {
    // Open / close with the Menu button
    navToggle.addEventListener('click', () => {
        setMenu(!navMenu.classList.contains('open'));
    });

    // Close when any nav link is clicked
    navMenu.addEventListener('click', (e) => {
        if (e.target.closest('a')) setMenu(false);
    });

    // Close when clicking outside the navbar
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) setMenu(false);
    });

    // Close with Escape and return focus to the button
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            setMenu(false);
            navToggle.focus();
        }
    });

    // Back button can restore the page with the menu still open
    window.addEventListener('pageshow', () => setMenu(false));
}

/* ---------- Theme toggle ---------- */
const themeToggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('clearpay-theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
}

function updateThemeLabel() {
    if (!themeToggle) return;

    const isDark = document.body.classList.contains('dark');
    themeToggle.setAttribute(
        'aria-label',
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
}

updateThemeLabel();

themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('clearpay-theme', isDark ? 'dark' : 'light');

    updateThemeLabel();
});

/* ---------- Scroll reveal ---------- */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
