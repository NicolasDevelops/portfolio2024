// Intersection Observer API FadeUp Animation

// Sets the observer's options
const observerOptions = {
  threshold: 0.1 // Adjust the threshold as per your requirement
};

// Creates observer to the target (section) to add the in-view class to the section element when we want to intersect.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Adds DOMContentLoaded to make sure elements have been loaded in the DOM.
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section.fadeUp');
  sections.forEach(section => {
    section.classList.add('section'); // Add the 'section' class
    observer.observe(section);
  });

  // Apply the 'fadeUp' class dynamically after initial content loading
  const contentElement = document.querySelector("#hero-1426");
  contentElement.classList.add("fadeUp");
});