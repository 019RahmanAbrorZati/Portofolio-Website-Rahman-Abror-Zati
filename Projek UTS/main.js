// Toggle Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme if exists
if (localStorage.getItem('theme')) {
    htmlElement.setAttribute('data-bs-theme', localStorage.getItem('theme'));
}

themeToggle.addEventListener('click', () => {
    let currentTheme = htmlElement.getAttribute('data-bs-theme');
    let targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-bs-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);

    // Update icon
    themeToggle.innerHTML = targetTheme === 'dark'
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
});
