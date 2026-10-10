/* ==========================
   ClearPay: pricing.js
   Pricing calculator
========================== */

const plan = document.querySelector('#plan');
const users = document.querySelector('#users');
const volume = document.querySelector('#volume');
const analytics = document.querySelector('#analytics');
const automation = document.querySelector('#automation');

const price = document.querySelector('#price');
const usersOutput = document.querySelector('#users-output');
const volumeOutput = document.querySelector('#volume-output');

function calculate() {
    // Base plan price
    let total = Number(plan.value);

    // Extra users: first 5 included, $4 per additional user
    const userCost = Math.max(0, Number(users.value) - 5) * 4;

    // Extra volume: first 10,000 included, $0.0005 per additional unit
    const volumeCost = Math.max(0, Number(volume.value) - 10000) * 0.0005;

    total += userCost + volumeCost;

    // Optional add-ons
    if (analytics.checked) total += 25;
    if (automation.checked) total += 35;

    price.textContent = `$${total.toFixed(2)}`;
    usersOutput.textContent = users.value;
    volumeOutput.textContent = `$${Number(volume.value).toLocaleString()}`;
}

[plan, users, volume, analytics, automation].forEach((el) => {
    el.addEventListener('input', calculate);
});

calculate();