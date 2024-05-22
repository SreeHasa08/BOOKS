// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const book = document.getElementById('book').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || address === '' || book === '' || message === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
});

// Interactive menu highlighting
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

function handleSubmit() {
    let response = window.confirm("Do you want to submit?");
    if(response) {
        window.alert("Form submitted!");
    } else {
        window.alert("Form submission failed");
    }
}