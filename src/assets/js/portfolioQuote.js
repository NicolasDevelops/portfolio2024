// Function to check if an element is in viewport
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Function to handle initial appearance and scroll event
function handleScrollAnimation() {
	const quoteElement = document.querySelector('.cs-quote');
	if (isInViewport(quoteElement)) {
		quoteElement.classList.add('animate-in');
	} else {
		quoteElement.classList.remove('animate-in');
	}
}

// Initial appearance
document.addEventListener('DOMContentLoaded', function () {
	handleScrollAnimation();
});

// Attach scroll event listener
window.addEventListener('scroll', handleScrollAnimation);
