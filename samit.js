document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Samit Singh's Portfolio!");

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const profilePic = document.querySelector('.profile-pic');
    profilePic.classList.add('animate__animated', 'animate__bounceIn');
});

function toggleSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.toggle('hidden');
    });
}



