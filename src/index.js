//Hamburger_Menu
const headerBars = document.querySelector('.header__bars')
const overlay = document.querySelector('.header__overlay')
const navigation = document.querySelector('.navigation')
const scrollHeader = document.querySelector('.header')

headerBars.addEventListener('click', () => {
  overlay.classList.toggle('show-overlay')
  navigation.classList.toggle('show-menu')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('show-overlay')
  navigation.classList.remove('show-menu')
})

// Sticky_Menu
window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//scroll_navigation