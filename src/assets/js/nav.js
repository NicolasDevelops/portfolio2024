document.addEventListener('DOMContentLoaded', function () {
	const CSbody = document.querySelector("body");
	const CSnavbarMenu = document.querySelector("#cs-navigation");
	const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

	CShamburgerMenu.addEventListener('click', function () {
		CShamburgerMenu.classList.toggle("cs-active");
		CSnavbarMenu.classList.toggle("cs-active");
		CSbody.classList.toggle("cs-open"); // Toggle cs-open class on body
		// run the function to check the aria-expanded value
		ariaExpanded();
	});

	// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
	function ariaExpanded() {
		const csUL = document.querySelector('#cs-expanded');
		const csExpanded = csUL.getAttribute('aria-expanded');

		if (csExpanded === 'false') {
			csUL.setAttribute('aria-expanded', 'true');
		} else {
			csUL.setAttribute('aria-expanded', 'false');
		}
	}

	// This script adds a class to the body after scrolling 100px
	// and we used these body.scroll styles to create some on scroll 
	// animations with the navbar
	document.addEventListener('scroll', () => {
		const scroll = document.documentElement.scrollTop;
		if (scroll >= 100) {
			CSbody.classList.add('scroll');
		} else {
			CSbody.classList.remove('scroll');
		}
	});

	// mobile nav toggle code
	const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
	for (const item of dropDowns) {
		const onClick = () => {
			item.classList.toggle('cs-active')
		}
		item.addEventListener('click', onClick)
	}

	// Get the current page URL
	var currentPageUrl = window.location.href;

	// Get all navigation links
	var navLinks = document.querySelectorAll('#cs-expanded .cs-li-link');

	// Loop through each link
	navLinks.forEach(function (link) {
		var href = link.getAttribute('href');

		// Check if the current page URL contains the link's href
		if (currentPageUrl.includes(href)) {
			// Add the cs-active class to the link
			link.classList.add('cs-active');
		} else {
			// Remove the cs-active class from the link if it doesn't match
			link.classList.remove('cs-active');
		}
	});
});
