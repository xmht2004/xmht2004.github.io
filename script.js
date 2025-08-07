// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('.icon');
    const text = themeToggle.querySelector('.text');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton(currentTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button appearance
        updateThemeButton(newTheme);
    });
    
    function updateThemeButton(theme) {
        if (theme === 'dark') {
            icon.textContent = '🌙';
            text.textContent = 'Dark';
        } else {
            icon.textContent = '☀️';
            text.textContent = 'Light';
        }
    }
});

// Legacy contact form functionality (if needed in the future)
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//
//     if (name && email && message) {
//         alert('Thank you for your message, ' + name + '! I will get back to you soon.');
//     } else {
//         alert('Please fill out all fields before submitting.');
//     }
// });
