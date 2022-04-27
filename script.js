const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Dynamically Switch Theme
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    console.log(e.target.checked);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);