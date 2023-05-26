// JavaScript code for any interactivity or dynamic behavior (optional)

// Example: Change image source on hover
const image = document.querySelector('.about-image img');
image.addEventListener('mouseover', () => {
  image.src = 'your-image-hover.jpg';
});

image.addEventListener('mouseout', () => {
  image.src = 'your-image.jpg';
});
