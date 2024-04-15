// Intersection Observer API FadeUp Animation for Hero Section 
// + Lazy loading mechanism to avoid render delay.

// Lazy load the script by delaying its execution until after initial content loading
window.addEventListener('load', () => {
  // Sets the observer's options
  const heroObserverOptions = {
    threshold: 0.1 // Adjust the threshold as per your requirement
  };

  // Creates observer to the target (section) to add the in-view class to the section element when we want to intersect.
  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('heroInView');
        heroObserver.unobserve(entry.target);
      }
    });
  }, heroObserverOptions);

  // Query and observe hero sections after page load
  const sections = document.querySelectorAll('.heroFadeUp');
  sections.forEach(section => {
    heroObserver.observe(section);

    // Apply the 'heroInView' class dynamically after initial content loading
    section.classList.add('heroInView');
  });
});
