const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const test = document.querySelectorAll('.test')


registerLink.addEventListener('click' , ()=> {
    wrapper.classList.add('active');
    test.forEach(element => {
        element.classList.add('active')
    });
});

loginLink.addEventListener('click' , ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click' , ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click' , ()=> {
    wrapper.classList.remove('active-popup');
});

//*//
const headerBars = document.querySelector('.btnLogin-popup')
const overlay = document.querySelector('.header__overlay')

headerBars.addEventListener('click', () => {
  overlay.classList.toggle('show-overlay')
})

iconClose.addEventListener('click', () => {
  overlay.classList.remove('show-overlay')
  headerRight.classList.remove('show-menu')
})
