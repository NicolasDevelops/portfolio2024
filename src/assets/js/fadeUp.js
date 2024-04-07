// Intersection Observer API FadeUp Animation

// Sets the observer's options
const observerOptions = {
	root: null,
	threshold: 0,
	rootMargin: '0px 0px -50px 0px' // Adjust the margin as per your requirement
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

// adds DOMContentLoaded to make sure elements have been loaded in the DOM.
// Observes every element that has the 'section' class. 
window.addEventListener('DOMContentLoaded', (event) => {
	const sections = Array.from(document.getElementsByClassName('section'));
	for (let section of sections) {
		observer.observe(section);
	}
});
