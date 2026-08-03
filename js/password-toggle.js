/* ==========================================
   PASSWORD VISIBILITY TOGGLE SCRIPT
=========================================== */

/**
 * Toggles the visibility of a password input field and updates the icon.
 * @param {string} inputId - The ID of the input field.
 * @param {HTMLElement} iconElement - The icon element clicked.
 */
function togglePasswordVisibility(inputId, iconElement) {
    const passwordInput = document.getElementById(inputId);

    // Safety check: ensure input element exists
    if (!passwordInput || !iconElement) {
        console.warn(`Password input with ID "${inputId}" or icon element not found.`);
        return;
    }

    const isPassword = passwordInput.type === 'password';

    // Toggle Input Type
    passwordInput.type = isPassword ? 'text' : 'password';

    // Toggle FontAwesome Icon Classes
    iconElement.classList.toggle('fa-eye', !isPassword);
    iconElement.classList.toggle('fa-eye-slash', isPassword);

    // Update ARIA Accessibility Attributes
    iconElement.setAttribute('aria-pressed', isPassword ? 'true' : 'false');
    iconElement.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
}

// Global scope binding for inline onclick attributes
window.togglePasswordVisibility = togglePasswordVisibility;