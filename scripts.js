document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu for mobile view
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    // Modal functionality
    const modalBtns = document.querySelectorAll('.modal-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing JS code

    // Modal functionality for certifications
    const certBtns = document.querySelectorAll('.cert-btn');
    certBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });
});

    // <!-- Insert this code before the closing body tag of your portfolio -->

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_UNIQUE_TAWK_ID/1gfbqi6l7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


// Optional: Smooth scroll when the 'Certifications' section is linked elsewhere in the page
document.querySelectorAll('a[href^="#certifications"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
