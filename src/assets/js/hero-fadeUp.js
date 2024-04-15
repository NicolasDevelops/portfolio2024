// Intersection Observer API FadeUp Animation

// Sets the observer's options
const HeroObserverOptions = {
  threshold: 0.1 // Adjust the threshold as per your requirement
};

// Creates observer to the target (section) to add the in-view class to the section element when we want to intersect.
const HeroObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('heroInView');
      HeroObserver.unobserve(entry.target);
    }
  });
}, HeroObserverOptions);

// Adds DOMContentLoaded to make sure elements have been loaded in the DOM.
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.heroSection.heroFadeUp');
  sections.forEach(section => {
    HeroObserver.observe(section);
    
    // Apply the 'fadeUp' class dynamically after initial content loading
    section.classList.add(".heroInView");
  });
});
