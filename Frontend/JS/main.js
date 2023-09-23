// Header Scroll
const nav = document.querySelector(".navbar");
window.onscroll = function () {
  const shouldAddClass = document.documentElement.scrollTop > 20;
  nav.classList.toggle("header-scrolled", shouldAddClass);
};

// Hide Navbar on Click
const navBarLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse.collapse");
navBarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = {
    name: contactForm.querySelector('#name').value,
    email: contactForm.querySelector('#email').value,
    phone: contactForm.querySelector('#phone').value,
    message: contactForm.querySelector('#message').value
  };

  try {
    const response = await fetch('http://localhost:3000/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data.message);
    location.reload();
  } catch (error) {
    console.error('Error:', error);
    // Handle the error, display an error message, etc.
  }
});
