/*document.addEventListener('DOMContentLoaded', () => {
    // 1. Elements selection
    const toggleButton = document.querySelector('.navbar-toggle-button');
    const navRight = document.querySelector('.navbar-right');
    const toggleIcon = toggleButton ? toggleButton.querySelector('i') : null;

    // Direct exit if elements are missing
    if (!toggleButton || !navRight) return;

    // 2. Mobile Menu Toggle Function
    const toggleMenu = () => {
        const isActive = navRight.classList.toggle('active');
        
        // Update ARIA attributes for Accessibility
        toggleButton.setAttribute('aria-expanded', isActive ? 'true' : 'false');

        // FontAwesome Icon Swap (Hamburger -> Close Icon)
        if (toggleIcon) {
            if (isActive) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-times');
            } else {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        }
    };

    // 3. Menu Close Function
    const closeMenu = () => {
        if (navRight.classList.contains('active')) {
            navRight.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');

            if (toggleIcon) {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        }
    };

    // Event Listener 1: Toggle Button Click
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents document click listener from immediately closing it
        toggleMenu();
    });

    // Event Listener 2: Close menu when clicking outside of navbar
    document.addEventListener('click', (e) => {
        const isClickInsideNavbar = navRight.contains(e.target) || toggleButton.contains(e.target);
        
        if (!isClickInsideNavbar) {
            closeMenu();
        }
    });

    // Event Listener 3: Close menu when 'Escape' key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Event Listener 4: Window Resize Fix (Desktop zoom-out par mobile menu active na rahe)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) { // 64rem equivalent
            closeMenu();
        }
    });
});


*/














/* ==========================================
   HEADER NAVIGATION & MOBILE MENU SCRIPT
=========================================== */

function initHeaderScript() {
    const toggleButton = document.querySelector('.navbar-toggle-button');
    const navRight = document.querySelector('.navbar-right');

    if (!toggleButton || !navRight) return;

    const toggleIcon = toggleButton.querySelector('i');

    // 1. Mobile Menu Toggle Function
    const toggleMenu = () => {
        const isActive = navRight.classList.toggle('active');
        
        // Update ARIA attributes for Accessibility
        toggleButton.setAttribute('aria-expanded', isActive ? 'true' : 'false');

        // FontAwesome Icon Swap (Hamburger -> Close Icon)
        if (toggleIcon) {
            if (isActive) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-times');
            } else {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        }
    };

    // 2. Menu Close Function
    const closeMenu = () => {
        if (navRight.classList.contains('active')) {
            navRight.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');

            if (toggleIcon) {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        }
    };

    // Event Listener 1: Toggle Button Click
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Event Listener 2: Close menu when clicking outside of navbar
    document.addEventListener('click', (e) => {
        const isClickInsideNavbar = navRight.contains(e.target) || toggleButton.contains(e.target);
        
        if (!isClickInsideNavbar) {
            closeMenu();
        }
    });

    // Event Listener 3: Close menu when 'Escape' key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Event Listener 4: Window Resize Fix (Desktop view par reset)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
}

// Global execution support for both Static and Dynamic Header Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderScript);
} else {
    initHeaderScript();
}

// Custom Event Listener for Dynamic Layout Loader Trigger
document.addEventListener('headerLoaded', initHeaderScript);











