'use strict';

const forms = document.querySelectorAll('form');
const inputs = [];

forms.forEach((form) => {
  const formInputs = form.querySelectorAll('input');

  inputs.push(...formInputs);
});

inputs.forEach((input) => {
  if (!input.name) {
    return;
  }

  if (!input.id) {
    input.id = input.name;
  }

  const wrapper = input.parentElement;

  if (!wrapper || !input.id) {
    return;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = text;
  input.placeholder = text;

  wrapper.insertBefore(label, input);
});
