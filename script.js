// Select all images inside the item class
const images = document.querySelectorAll('.item img');

// Add click event listener to each image
images.forEach(img => {
  img.addEventListener('click', () => {
    // Toggle the oscillate class on click
    img.classList.toggle('oscillate');
  });
});
