function navigateTo(page) {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

// Smooth fade-in effect
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});
