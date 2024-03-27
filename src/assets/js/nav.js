// // add classes for mobile navigation toggling
// var CSbody = document.querySelector("body");
// const CSnavbarMenu = document.querySelector("#cs-navigation");
// const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

// CShamburgerMenu.addEventListener('click', function () {
// 	CShamburgerMenu.classList.toggle("cs-active");
// 	CSnavbarMenu.classList.toggle("cs-active");
// 	CSbody.classList.toggle("cs-open");
// 	// run the function to check the aria-expanded value
// 	ariaExpanded();
// });

// // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
// function ariaExpanded() {
// 	const csUL = document.querySelector('#cs-expanded');
// 	const csExpanded = csUL.getAttribute('aria-expanded');

// 	if (csExpanded === 'false') {
// 		csUL.setAttribute('aria-expanded', 'true');
// 	} else {
// 		csUL.setAttribute('aria-expanded', 'false');
// 	}
// }

// // This script adds a class to the body after scrolling 100px
// // and we used these body.scroll styles to create some on scroll 
// // animations with the navbar
// document.addEventListener('scroll', (e) => {
// 	const scroll = document.documentElement.scrollTop;
// 	if (scroll >= 100) {
// 		document.querySelector('body').classList.add('scroll')
// 	} else {
// 		document.querySelector('body').classList.remove('scroll')
// 	}
// });

// // mobile nav toggle code
// const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
// for (const item of dropDowns) {
// 	const onClick = () => {
// 		item.classList.toggle('cs-active')
// 	}
// 	item.addEventListener('click', onClick)
// }

// // Select all navigation links
// const navLinks = document.querySelectorAll('#cs-navigation .cs-li-link');

// // Function to handle click on navigation links
// function handleNavClick() {
// 	// Remove active-link class from all navigation links
// 	navLinks.forEach(link => link.classList.remove('active-link'));
// 	// Add active-link class to the clicked link
// 	this.classList.add('active-link');
// }

// // Attach click event listener to each navigation link
// navLinks.forEach(link => link.addEventListener('click', handleNavClick));

// // Set active-link class for the current page
// const currentPage = window.location.pathname;
// const currentPageLink = document.querySelector(`#cs-navigation .cs-li-link[href="${currentPage}"]`);
// if (currentPageLink) {
// 	currentPageLink.classList.add('active-link');
// }


// document.addEventListener('DOMContentLoaded', function () {
// 	const hamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
// 	const navbarMenu = document.querySelector('#cs-navigation');
// 	const body = document.body;
// 	const csExpanded = document.querySelector('#cs-expanded');

// 	// Function to toggle menu and body class
// 	function toggleMenu() {
// 		hamburgerMenu.classList.toggle('cs-active');
// 		navbarMenu.classList.toggle('cs-active');
// 		body.classList.toggle('cs-open');
// 		toggleAriaExpanded();
// 	}

// 	// Function to toggle aria-expanded attribute
// 	function toggleAriaExpanded() {
// 		const expanded = csExpanded.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
// 		csExpanded.setAttribute('aria-expanded', expanded);
// 	}

// 	// Event listener for hamburger menu click
// 	hamburgerMenu.addEventListener('click', function () {
// 		toggleMenu();
// 	});

// 	// Event listeners for dropdown items click
// 	const dropdownItems = document.querySelectorAll('.cs-dropdown');
// 	dropdownItems.forEach(function (item) {
// 		item.addEventListener('click', function () {
// 			item.classList.toggle('cs-active');
// 		});
// 	});
// });












// // Get the current page URL
// var currentPageUrl = window.location.href;

// // Get all navigation links
// var navLinks = document.querySelectorAll('#cs-expanded .cs-li-link');

// // Loop through each link
// navLinks.forEach(function (link) {
// 	var href = link.getAttribute('href');

// 	// Check if the current page URL contains the link's href
// 	if (currentPageUrl.includes(href)) {
// 		// Add the cs-active class to the link
// 		link.classList.add('cs-active');
// 	} else {
// 		// Remove the cs-active class from the link if it doesn't match
// 		link.classList.remove('cs-active');
// 	}
// });

// Get the current page URL
var currentPageUrl = window.location.pathname;

// Get all navigation links
var navLinks = document.querySelectorAll('#cs-expanded .cs-li-link');

// Loop through each link
navLinks.forEach(function (link) {
	var href = link.getAttribute('href');

	// Check if the current page URL contains the link's href
	if (currentPageUrl === '/' && href === '/index.html') {
		// Add the cs-active class to the link
		link.classList.add('cs-active');
	} else if (currentPageUrl.startsWith(href)) {
		// Add the cs-active class to the link
		link.classList.add('cs-active');
	} else {
		// Remove the cs-active class from the link if it doesn't match
		link.classList.remove('cs-active');
	}
});
