// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Form validation and submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
  }

  // AJAX request for form submission (simulation)
  const formData = {
      name: name,
      email: email,
      message: message
  };

  // Simulate sending data to server
  setTimeout(() => {
      document.getElementById('contactForm').reset();
      document.getElementById('formResponse').innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
  }, 1000);
});

// Optional: Add an image carousel or a slider (for products or services)
