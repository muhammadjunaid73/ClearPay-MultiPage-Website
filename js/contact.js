/* ==========================
   ClearPay: contact.js
   Contact form validation (demo, nothing is sent)
========================== */

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

function showError(id, message) {
    const el = document.querySelector(`#${id}-error`);
    if (el) el.textContent = message;
}

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous messages
    showError('name', '');
    showError('email', '');
    showError('message', '');
    status.textContent = '';

    let valid = true;

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name.length < 2) {
        showError('name', 'Please enter your full name.');
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
    }

    if (message.length < 10) {
        showError('message', 'Message must contain at least 10 characters.');
        valid = false;
    }

    if (valid) {
        status.textContent = 'Demo message validated successfully. No data was sent to a server.';
        status.style.color = 'var(--success)';
        form.reset();
    }
});