// This script provides the functionality for the CV website,
// specifically the dark mode toggle.

document.addEventListener('DOMContentLoaded', () => {
    // Select the theme toggle button and the root HTML element.
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load Lucide icons dynamically from the CDN.
    // This function must be called after the HTML has loaded.
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Check for a saved theme preference in the browser's local storage.
    // If no preference is found, default to 'light'.
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.classList.add(currentTheme);

    // Update the icon to match the current theme.
    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    } else {
        themeToggle.innerHTML = '<i data-lucide="moon"></i>';
    }

    // Add an event listener to the theme toggle button.
    themeToggle.addEventListener('click', () => {
        // Toggle the 'light' and 'dark' classes on the HTML element.
        if (htmlElement.classList.contains('light')) {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            // Change the icon to a sun when in dark mode.
            themeToggle.innerHTML = '<i data-lucide="sun"></i>';
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            // Change the icon to a moon when in light mode.
            themeToggle.innerHTML = '<i data-lucide="moon"></i>';
        }

        // Re-render the Lucide icons after the theme has changed.
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });
});
