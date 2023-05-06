// Get all the nav links
const navLinks = document.querySelectorAll('nav a');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent the default link behavior

    // Get the ID of the section to scroll to
    const sectionId = link.getAttribute('href');

    // Use the scrollIntoView method to scroll to the section
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
