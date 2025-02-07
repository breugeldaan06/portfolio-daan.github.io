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

    form.addEventListener('submit', function(event) {
        if (!nameInput.validity.valid) {
            event.preventDefault();
            showError();
        }
    });

    function showError() {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Vul niet veld in.';
        if (!nameInput.nextElementSibling) {
            nameInput.parentNode.insertBefore(errorMessage, nameInput.nextSibling);
        }
    }
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
