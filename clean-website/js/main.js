/**
 * Change Agents - Main JavaScript
 */

// Form handling for footer form
const footerForm = document.getElementById('footer-form-element');
if (footerForm) {
  footerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(footerForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    const formContainer = footerForm.parentElement;
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <p class="text-white" style="margin: 0;">
        Thank you. We'll be in touch shortly.
      </p>
    `;

    footerForm.style.display = 'none';
    formContainer.appendChild(successMessage);

    setTimeout(() => {
      footerForm.style.display = 'block';
      successMessage.remove();
      footerForm.reset();
    }, 3000);
  });
}

// Smooth scroll to footer form
document.addEventListener('click', function (e) {
  if (e.target.getAttribute('href') === '#footer-form') {
    e.preventDefault();
    const footerFormElement = document.getElementById('footer-form');
    if (footerFormElement) {
      footerFormElement.scrollIntoView({ behavior: 'smooth' });
      const firstInput = footerFormElement.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500);
      }
    }
  }
});

// Fade-in on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(element => {
  observer.observe(element);
});

// Page load
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.visibility = 'visible';
});
