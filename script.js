import { projects } from './projects.js';

// Dynamisch projecten laden
const projectsContainer = document.getElementById('projects-container');

const renderProjects = () => {
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('col-md-4', 'mb-4');
        projectElement.innerHTML = `
            <div class="card project h-100">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
};

renderProjects();

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
// werkt nofg niet
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

