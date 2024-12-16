/**
 * Toggles the visibility of the navbar and adds animations for the links when the hamburger icon is clicked.
 * Animation: The links will slide in with a delay based on their index, and their opacity will be faded in.
 * When the navbar is closed, the links will reset their opacity and translate properties.
 *
 * @example
 * // Example usage:
 * toggleHamburgerNav();
 *
 * @returns {void} This function does not return anything.
 */
function toggleHamburgerNav()
{
	const hamburgerIcon = document.querySelector("#hamburger-icon");
	const navbar = document.querySelector("#navbar-links");
	const links = document.querySelectorAll("#navbar-links li");

	// Toggle navbar visibility for smaller screens
	hamburgerIcon.addEventListener("click", () =>
	{
		links.forEach( (link, index) =>
		{
			// Closing
			if (navbar.classList.contains("active"))
			{
				// Reset the styling and animation
                link.style.opacity = "0";
                link.style.transform = "translateX(30px)";
                link.style.animation = ""; // Need this; otherwise the links won"t animate again
            }

			// Opening
			else
			{
                // Apply animation with delay based on the index when opening
                link.style.animation = `animateLink 0.4s ease forwards ${index * 0.15 + 0.5 }s`; // Add 0.5 so the first one doesn"t appear instantly
            }

        });

		navbar.classList.toggle("active");
	});
}

toggleHamburgerNav();
