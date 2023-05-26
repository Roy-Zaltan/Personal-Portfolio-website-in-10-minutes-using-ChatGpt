// JavaScript code for any interactivity or dynamic behavior (optional)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      // You can add your code here to handle form submission, such as sending the form data to a server or displaying a success message.
      // For example:
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      contactForm.reset();
    });
  });