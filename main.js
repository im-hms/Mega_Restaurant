/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ==================== slider testimonial ==============
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function () {
    if (x > "-900") {
        x = x - 300;
        slide.style.top = x + "px";
    }
}
downArrow.onclick = function () {
    if (x < "0") {
        x = x + 300;
        slide.style.top = x + "px";
    }
}
// ==================== slider testimonial ==============
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let a = 0;

upArrow.onclick = function () {
    if (x > "-900") {
        x = x - 300;
        slide.style.top = x + "px";
    }
}
downArrow.onclick = function () {
    if (x < "0") {
        x = x + 300;
        slide.style.top = x + "px";
    }
}
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu  = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
      navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
      })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
      navClose.addEventListener('click' , () =>{
            navMenu.classList.remove('show-menu')
      })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))