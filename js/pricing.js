/* ==========================
   ClearPay: pricing.js
   Fictional pricing calculator
========================== */

const plan = document.querySelector('#plan');
const users = document.querySelector('#users');
const volume = document.querySelector('#volume');
const analytics = document.querySelector('#analytics');
const automation = document.querySelector('#automation');

const price = document.querySelector('#price');
const usersOutput = document.querySelector('#users-output');
const volumeOutput = document.querySelector('#volume-output');
const breakdownPlan = document.querySelector('#breakdown-plan');
const breakdownUsers = document.querySelector('#breakdown-users');
const breakdownVolume = document.querySelector('#breakdown-volume');
const breakdownAddons = document.querySelector('#breakdown-addons');

const plans = {
  starter: { base: 29, includedSeats: 3, extraSeat: 5, usageRate: 0.004 },
  growth: { base: 79, includedSeats: 10, extraSeat: 4, usageRate: 0.003 },
  scale: { base: 149, includedSeats: 25, extraSeat: 3, usageRate: 0.002 },
};

const money = (amount) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);

function calculate() {
  const selectedPlan = plans[plan.value] ?? plans.starter;
  const seatCount = Number(users.value);
  const monthlyVolume = Number(volume.value);
  const planCost = selectedPlan.base;
  const userCost = Math.max(0, seatCount - selectedPlan.includedSeats) * selectedPlan.extraSeat;
  const volumeCost = monthlyVolume * selectedPlan.usageRate;
  const addonCost = (analytics.checked ? 25 : 0) + (automation.checked ? 35 : 0);
  const total = planCost + userCost + volumeCost + addonCost;

  price.textContent = money(total);
  usersOutput.textContent = `${seatCount} ${seatCount === 1 ? 'member' : 'members'}`;
  volumeOutput.textContent = `${money(monthlyVolume)} / month`;
  breakdownPlan.textContent = money(planCost);
  breakdownUsers.textContent = money(userCost);
  breakdownVolume.textContent = `${money(volumeCost)} (${(selectedPlan.usageRate * 100).toFixed(2)}%)`;
  breakdownAddons.textContent = money(addonCost);
}

[plan, users, volume, analytics, automation].forEach((control) => {
  control.addEventListener('input', calculate);
  control.addEventListener('change', calculate);
});

calculate();
