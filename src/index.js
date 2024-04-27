document.addEventListener('DOMContentLoaded', function() {
  const mbHeaderLeft = document.querySelector('.mb-header-left');
  const navigation = document.querySelector('.navigation');

  // Thêm sự kiện click vào mb-header-left
  mbHeaderLeft.addEventListener('click', function() {
    // Thay đổi thuộc tính right của .navigation từ 120% sang 20%
    navigation.style.right = '20%';
  });

  // Lấy phần tử closeMb trong phạm vi DOMContentLoaded để sử dụng
  const closeMb = document.querySelector('.navigation-header__close');
  
  // Kiểm tra xem closeMb có tồn tại không trước khi gắn sự kiện
  if (closeMb) {
    closeMb.addEventListener('click', function() {
      // Thay đổi thuộc tính right của .navigation từ 20% về 120%
      navigation.style.right = '120%';
    });
  } else {
    console.error('Không tìm thấy phần tử .navigation-header__close trong DOM.');
  }
});



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

//*//
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {

  window.location.href = '/index.html';
});

//*//

document.addEventListener('DOMContentLoaded', function() {
  const numberInput = document.querySelector('.number-input');
  const decrementButton = document.querySelector('.decrement');
  const incrementButton = document.querySelector('.increment');

  decrementButton.addEventListener('click', function() {
    const currentValue = parseInt(numberInput.value) || 0;
    if (currentValue > numberInput.min) {
      numberInput.value = currentValue - 1;
    }
  });

  incrementButton.addEventListener('click', function() {
    const currentValue = parseInt(numberInput.value) || 0;
    if (currentValue < numberInput.max) {
      numberInput.value = currentValue + 1;
    }
  });
});