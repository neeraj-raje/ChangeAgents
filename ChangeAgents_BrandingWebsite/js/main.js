/**
 * Change Agents - Main JavaScript
 * Handles form submission, navigation, and interactions
 */

// Form handling for footer form
const footerForm = document.getElementById('footer-form-element');
if (footerForm) {
  footerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(footerForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Show success message
    const formContainer = footerForm.parentElement;
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <p class="text-white" style="margin: 0;">
        Thank you. We'll be in touch shortly.
      </p>
    `;

    // Replace form with success message
    footerForm.style.display = 'none';
    formContainer.appendChild(successMessage);

    // Reset form after 3 seconds
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
      // Focus on first form field
      const firstInput = footerFormElement.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500);
      }
    }
  }
});

// Mobile menu toggle (if needed)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
if (mobileMenu) {
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
  });
}

// Scroll to top button (if needed)
const scrollToTopButton = document.getElementById('scroll-to-top');
if (scrollToTopButton) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Add animation class on scroll (optional)
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

// Observe fade-in sections
document.querySelectorAll('.fade-in-section').forEach(element => {
  observer.observe(element);
});

// Prevent flash of unstyled content
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.visibility = 'visible';
});
