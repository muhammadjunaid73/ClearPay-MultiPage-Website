/* ==========================
   ClearPay: contact.js
   Portfolio demo form validation (nothing is sent)
========================== */

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const messageField = document.querySelector('#message');
const messageCounter = document.querySelector('#message-counter');
const fields = {
  name: document.querySelector('#name'),
  email: document.querySelector('#email'),
  inquiryType: document.querySelector('#inquiry-type'),
  message: messageField,
};

function showError(field, message) {
  const error = document.querySelector(`#${field.id}-error`);
  if (error) error.textContent = message;
  field.setAttribute('aria-invalid', String(Boolean(message)));
}

function updateCounter() {
  messageCounter.textContent = `${messageField.value.length} / ${messageField.maxLength} characters`;
}

messageField.addEventListener('input', updateCounter);

Object.values(fields).forEach((field) => {
  const eventName = field.tagName === 'SELECT' ? 'change' : 'input';
  field.addEventListener(eventName, () => {
    showError(field, '');
    status.textContent = '';
    status.classList.remove('is-error', 'is-success');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = '';
  status.classList.remove('is-error', 'is-success');

  const values = {
    name: fields.name.value.trim(),
    email: fields.email.value.trim(),
    inquiryType: fields.inquiryType.value,
    message: fields.message.value.trim(),
  };
  const errors = {
    name: values.name.length < 2 ? 'Please enter at least 2 characters for your name.' : '',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? '' : 'Please enter a valid email address.',
    inquiryType: values.inquiryType ? '' : 'Please choose a topic.',
    message: values.message.length < 10 ? 'Please enter at least 10 characters.' : '',
  };

  Object.entries(fields).forEach(([key, field]) => showError(field, errors[key]));
  const firstInvalid = Object.values(fields).find((field) => field.getAttribute('aria-invalid') === 'true');

  if (firstInvalid) {
    status.textContent = 'Please check the highlighted fields and try again.';
    status.classList.add('is-error');
    firstInvalid.focus();
    return;
  }

  status.textContent = 'Demo validated successfully. No message was sent or saved.';
  status.classList.add('is-success');
  form.reset();
  Object.values(fields).forEach((field) => showError(field, ''));
  updateCounter();
});

updateCounter();
