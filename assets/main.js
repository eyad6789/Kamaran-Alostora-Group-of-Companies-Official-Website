

// -------------------------- nav humbarger menu ---------------
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    navbarToggle.addEventListener('click', function() {
        if (navbarLinks.style.display === 'flex') {
            navbarLinks.style.display = 'none';
        } else {
            navbarLinks.style.display = 'flex';
        }
    });
});
// -------------------------- hero bg changes ---------------
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const images = [
        '/assets/images/bg-1.jpg',
        '/assets/images/bg-2.jpg',
        '/assets/images/bg-3.jpg'
    ];
    var currentIndex = 0;

    function changeBackground() {
        hero.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 10000);
    changeBackground();
});
// -------------------------- our companies ---------------
document.addEventListener('DOMContentLoaded', function() {
    const companies = document.querySelectorAll('.company');

    companies.forEach((company, index) => {
        setTimeout(() => {
            company.style.opacity = 1;
            company.style.transform = 'translateY(0)';
        }, index * 300); // Delay each animation by 300ms
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.projects .overlay-projects');
    const content = document.querySelector('.projects .content');

    setTimeout(() => {
        overlay.style.opacity = 1;
        content.style.opacity = 1;
        content.style.transform = 'translateX(0)';
    }, 300); // Delay to start animation
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:yourcompany@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom:%0A${name}%0A${email}`;
    
    window.location.href = mailtoLink;
});
