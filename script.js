// Contactformulier verwerking
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simuleer API-call
        alert(`Bedankt, ${data.name}! Je bericht is verzonden.`);
        form.reset();
    } catch (error) {
        alert('Er ging iets mis. Probeer het opnieuw.');
    }
});

// stuur een mail naar mij
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    function showError(input, message) {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        input.classList.add('error');
    }

    function hideError(input) {
        const errorMessage = input.nextElementSibling;
        errorMessage.style.display = 'none';
        input.classList.remove('error');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        if (!nameInput.value) {
            showError(nameInput, 'Vul je naam in.');
            isValid = false;
        } else {
            hideError(nameInput);
        }

        if (!emailInput.value || !emailInput.validity.valid) {
            showError(emailInput, 'Vul een geldig e-mailadres in.');
            isValid = false;
        } else {
            hideError(emailInput);
        }

        if (!messageInput.value) {
            showError(messageInput, 'Vul je bericht in.');
            isValid = false;
        } else {
            hideError(messageInput);
        }

        if (isValid) {
            // Handle form submission
        }
    });

    emailInput.addEventListener('input', function() {
        hideError(emailInput);
    });

    nameInput.addEventListener('input', function() {
        hideError(nameInput);
    });

    messageInput.addEventListener('input', function() {
        hideError(messageInput);
    });
});

// de animatie naar binnen
document.addEventListener('scroll', function() {
    const sections = ['experience-goals', 'about'];

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * .85 && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        }
    });
});
