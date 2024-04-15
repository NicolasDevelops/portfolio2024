// // Intersection Observer API FadeUp Animation

// // Sets the observer's options
// const observerOptions = {
//   threshold: 0.1 // Adjust the threshold as per your requirement
// };

// // Creates observer to the target (section) to add the in-view class to the section element when we want to intersect.
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('in-view');
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// // Adds DOMContentLoaded to make sure elements have been loaded in the DOM.
// window.addEventListener('DOMContentLoaded', () => {
//   const sections = document.querySelectorAll('.section.fadeUp');
//   sections.forEach(section => observer.observe(section));
// });

// Intersection Observer API Lazy Loading FadeUp Animation

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

// Adds a delay to the observer for lazy loading
const lazyLoadObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      observer.observe(section); // Start observing the section for fadeUp animation
      lazyLoadObserver.unobserve(section); // Stop observing for lazy loading
    }
  });
}, { threshold: 0 });

// Delay the observation until after the initial content is loaded
window.addEventListener('load', () => {
  const sections = document.querySelectorAll('.section.fadeUp');
  sections.forEach(section => lazyLoadObserver.observe(section));
});