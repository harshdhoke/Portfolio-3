//===================================== DARK THEME =========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME SETTING IS WORKING!")

//===================================== MENU SHOW Y HIDDEN =========================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 



console.log("MENU Y SETTING WORKING!")
//===================================== REMOVE MENU PRORFILE =========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")


//===================================== Typewriter Effect =========================


new Typewriter('#typewriter', {
  strings: ['Harsh Dhoke', 'Software Engineer', 'Fullstack Developer', 'Research Enthusiast', 'Author'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewriter effect is working!")

//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("Portfolio Swiper is working!")


//===================================== SCROLL UP =========================
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll')
    }
    console.log("Scroll up being called and working!")
}
window.addEventListener('scroll', scrollUp)

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


    console.log("Section highlight working!")
}
window.addEventListener('scroll', scrollActive)



//===================================== scriptJS sending mail =========================

function sendEmail() {
    var name = document.getElementById('message-name').value;
    var email = document.getElementById('message-email').value;
    var subject = document.getElementById('message-subject').value;
    var message = document.getElementById('message').value;

    // Regular expression to match email format
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any field is empty or if email is not in the correct format
    if (!name || !email || !subject || !message) {
        if(!name){
            var errorMessage = document.getElementById('errorMessage');
            errorMessage.style.display = 'block';
            // Hide error message after 3 seconds
            setTimeout(function() {
                errorMessage.style.display = 'none';
            }, 3000);
            return; // Stop execution if any field is empty
        }
        if(!email.match(emailFormat)){
            var errorMessage = document.getElementById('errorMessage3');
            errorMessage.style.display = 'block';
            // Hide error message after 3 seconds
            setTimeout(function() {
                errorMessage.style.display = 'none';
            }, 3000);
            return; // Stop execution if email format is incorrect
        }
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        // Hide error message after 3 seconds
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000);
        return; // Stop execution if any field is empty
    }

    emailjs.send("service_1fnokth", "template_23hzokk", {
        from_name: name,
        from_email: email,
        subject: subject,
        message_html: message
    }).then(function(response) {
        console.log('Email sent successfully:', response);
        // Show success message
        var statusMessage = document.getElementById('statusMessage');
        statusMessage.style.display = 'block';

        // Clear form fields
        document.getElementById('message-name').value = '';
        document.getElementById('message-email').value = '';
        document.getElementById('message-subject').value = '';
        document.getElementById('message').value = '';

        // Hide status message after 3 seconds
        setTimeout(function() {
            statusMessage.style.display = 'none';
        }, 3000);
    }, function(error) {
        console.error('Email sending failed:', error);
        // Show error message
        var errorMessage = document.getElementById('errorMessage2');
        errorMessage.textContent = 'Failed to send email. Please try again later.';
        errorMessage.style.display = 'block';
        // Hide error message after 3 seconds
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000);
    });
}
