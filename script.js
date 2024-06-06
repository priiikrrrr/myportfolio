'use strict';
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});



sr.reveal('.hero-text', { delay: 100, origin: 'top' });
sr.reveal('.hero-img', { delay: 100, origin: 'right' });
sr.reveal('.icons', { delay: 200, origin: 'left' });
// sr.reveal('.about', { delay: 20, origin: 'left' });

sr.reveal('.left', { delay: 39, origin: 'left' });
sr.reveal('.mid', { delay: 40, origin: 'bottom' });
sr.reveal('.right', { delay: 41, origin: 'right' });



const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent =currentYear;


// sr.reveal('.hero-text', { delay: 200, origin: 'top' });
// sr.reveal('.hero-img', { delay: 200, origin: 'top' });
// sr.reveal('.icons', { delay: 400, origin: 'top' });


// const cards = document.querySelectorAll('.card');
// cards.forEach((card, index) => { 
//     card.addEventListener('click', () => {
//         //get state
//         const state = Flip.getState(cards);

//         //add the active class to the clicked one and add inactive class to others
//         const isCardActive = card.classList.contains("active");
//         cards.forEach((otherCard, otherIdx) => { 
//             otherCard.classList.remove('active');
//             otherCard.classList.remove('is-inactive');
//             if (!isCardActive && index !== otherIdx) {
//                 otherCard.classList.add("is-inactive");
//             }
//         });
//         if (!isCardActive)card.classList.add("active");

//         Flip.from(state, {
//             duration: 1,
//             ease: "expo-in",
//             absolute: true,
//         });
//     });
// });