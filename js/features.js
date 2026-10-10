/* ==========================
   ClearPay: features.js
   Feature category filters
========================== */

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.feature-list .feature-card');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        // Update active button
        filters.forEach((f) => f.classList.remove('active'));
        filter.classList.add('active');

        // Show only matching cards
        const value = filter.dataset.filter;

        cards.forEach((card) => {
            const hide = value !== 'all' && card.dataset.category !== value;
            card.classList.toggle('hidden', hide);
        });
    });
});