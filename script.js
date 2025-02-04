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

// werkt nog niet
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

document.addEventListener('scroll', function() {
    const textElement = document.getElementById('experience-goals');
    const rect = textElement.getBoundingClientRect();

    // Check if the text element is in the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        textElement.classList.add('visible');
    }
});