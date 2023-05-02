// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {

    // get the down arrow element
    const downArrow = document.querySelector('.down-arrow');

    // get all the section elements
    const sections = document.querySelectorAll('section');

    // set the initial visibility of the down arrow
    downArrow.style.display = 'block';

    // add a click event listener to the down arrow
    downArrow.addEventListener('click', () => {
    // get the index of the current visible section
    const currentSectionIndex = Array.from(sections).findIndex((section) => section.getBoundingClientRect().top >= 0);

    // get the next section element
    const nextSection = sections[currentSectionIndex + 1];

    // if there is a next section, scroll to it
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // if this is the last section, hide the down arrow
        downArrow.style.display = 'none';
    }
    });

    // add a scroll event listener to show/hide the down arrow
    window.addEventListener('scroll', () => {
    // get the index of the current visible section
    const currentSectionIndex = Array.from(sections).findIndex((section) => section.getBoundingClientRect().top >= 0);

    // if the current visible section is the last section, hide the down arrow
    if (currentSectionIndex === sections.length - 1) {
        downArrow.style.display = 'none';
    } else {
        downArrow.style.display = 'block';
    }
    });

});
  