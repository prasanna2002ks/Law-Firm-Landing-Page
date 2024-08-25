// Navbar Toggler for mobile view
document.getElementById('navbarToggler').addEventListener('click', function() {
    let navbarNav = document.getElementById('navbarNav');
    if (navbarNav.classList.contains('collapse')) {
        navbarNav.classList.remove('collapse');
    } else {
        navbarNav.classList.add('collapse');
    }
});

//Users Form:
document.getElementById('user-contact').addEventListener('submit', function(e){
    e.preventDefault();
    let users = localStorage.getItem('usersFormData') ? JSON.parse(localStorage.getItem('usersFormData')) : [];
    let mail = e.target.mail.value;
    users.push(mail);
    localStorage.setItem('usersFormData', JSON.stringify(users));
    alert("we'll contact you soon!");

    //clear the form    
    e.target.reset();
});

// Form Submission and Local Storage
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let contacts = localStorage.getItem('contactFormData') ? JSON.parse(localStorage.getItem('contactFormData')) : [];

    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;
    
    let formData = {
        name: name,
        email: email,
        message: message
    };
    contacts.push(formData);

    localStorage.setItem('contactFormData', JSON.stringify(contacts));
    alert('Your message has been sent!');
    
    // Clear the form
    event.target.reset();
});
