// Intersection Observer API FadeUp Animation

// Sets the observer's options
const heroObserverOptions = {
  threshold: 0.1 // Adjust the threshold as per your requirement
};

// Creates observer to the target (section) to add the in-view class to the section element when we want to intersect.
const heroObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hero-in-view');
      heroObserver.unobserve(entry.target);
    }
  });
}, heroObserverOptions);

// Adds DOMContentLoaded to make sure elements have been loaded in the DOM.
window.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.getElementById('hero-1426');
  heroObserver.observe(heroSection);
});
