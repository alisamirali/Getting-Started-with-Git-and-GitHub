/* Change Header Background */
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') :
        header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Products Swiper */
var productsSwiper = new Swiper(".products-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            spaceBetween: 72,
        },
    },
});

/* Show Scroll Up Button */
const scrollUp = () => {
    const scrollUp = document.getElementById('scrollup')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Dark/Light Theme */
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* Scroll Reveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home-data, .products-container, .footer-container, .footer-info`);
sr.reveal(`.home-images`, { delay: 600, origin: 'bottom' });
sr.reveal(`.new-card, .brand-img`, { interval: 100 });
sr.reveal(`.collection-explore:nth-child(1)`, { origin: 'right' });
sr.reveal(`.collection-explore:nth-child(2)`, { origin: 'left' });
