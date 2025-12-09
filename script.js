const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.service-content-box');

const menuBtn = document.querySelector('.hamburger_menu');
const navMenu = document.querySelector('.navlinks');
const navlinks = document.querySelectorAll('.link');
const sections = document.querySelectorAll("section");

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuBtn.classList.toggle('open');
    document.body.classList.toggle('stop-scrolling');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navlinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        navMenu.classList.remove('open');
        menuBtn.classList.remove('open');
        document.body.classList.remove('stop-scrolling');
    });
});

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => {
            b.classList.remove('active');
        });

        contents.forEach(content => {
            content.classList.remove('active');
        });
        btn.classList.add('active');
        const tabId = btn.dataset.tab;

        document.getElementById(tabId).classList.add('active');
    })
})

// Form Submission with Success Popup
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');
    
//     if (contactForm) {
//         // Store original onsubmit if exists
//         const originalSubmit = contactForm.onsubmit;
        
//         contactForm.addEventListener('submit', function(e) {
//             // Show success popup when form is submitted
//         });
//     }
// });