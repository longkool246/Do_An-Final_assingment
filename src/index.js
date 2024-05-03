document.addEventListener("DOMContentLoaded", function () {
  const sort = document.querySelector(".mb-sort");
  const sortBox = document.querySelector(".sort");

  sort.addEventListener("click", function () {
    console.log("Clicked!"); 
    sortBox.style.bottom = "0";
  });

  const closeSort = document.querySelector(".close-sort");

  if (closeSort) {
    closeSort.addEventListener("click", function () {
      sortBox.style.bottom = "-700px";
    });
  } else {
    console.error(
      "Không tìm thấy phần tử"
    );
  }
});

const showfilter = () => {
  console.log("11111");
}

//

document.addEventListener("DOMContentLoaded", function () {
  const mbHeaderLeft = document.querySelector(".mb-header-left");
  const navigation = document.querySelector(".navigation");

  mbHeaderLeft.addEventListener("click", function () {
    navigation.style.right = "20%";
  });

  const closeMb = document.querySelector(".navigation-header__close");

  if (closeMb) {
    closeMb.addEventListener("click", function () {
      navigation.style.right = "120%";
    });
  } else {
    console.error(
      "Không tìm thấy phần tử .navigation-header__close trong DOM."
    );
  }
});

//cart-cout

const myInput = document.getElementById("my-input");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }
}

// Sticky_Menu
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Sticky_Menu_mobile
window.addEventListener("scroll", function () {
  var headermobi = document.querySelector(".header-mobile");
  if (window.scrollY > 0) {
    headermobi.classList.add("sticky");
  } else {
    headermobi.classList.remove("sticky");
  }
});

//

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const test = document.querySelectorAll(".test");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
  test.forEach((element) => {
    console.log("1");
    element.classList.add("active");
  });
});

loginLink.addEventListener("click", () => {
  console.log("2");
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  console.log("3");
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  console.log("4");
  wrapper.classList.remove("active-popup");
});

//

const wrapperMb = document.querySelector(".wrapper");
const loginLinkMb = document.querySelector(".login-link");
const registerLinkMb = document.querySelector(".register-link");
const btnPopupMb = document.querySelector(".sign-in-mobile");
const iconCloseMb = document.querySelector(".icon-close");
const testMb = document.querySelectorAll(".test");

registerLinkMb.addEventListener("click", () => {
  wrapperMb.classList.add("active");
  test.forEach((element) => {
    console.log("1");
    element.classList.add("active");
  });
});

loginLinkMb.addEventListener("click", () => {
  console.log("2");
  wrapper.classList.remove("active");
});

btnPopupMb.addEventListener("click", () => {
  console.log("3");
  wrapper.classList.add("active-popup");
});

iconCloseMb.addEventListener("click", () => {
  console.log("4");
  wrapper.classList.remove("active-popup");
});

//*//
const headerBars = document.querySelector(".btnLogin-popup");
const overlay = document.querySelector(".header__overlay");

headerBars.addEventListener("click", () => {
  overlay.classList.toggle("show-overlay");
});

iconClose.addEventListener("click", () => {
  overlay.classList.remove("show-overlay");
  headerRight.classList.remove("show-menu");
});

//

const headerBarsMb = document.querySelector(".sign-in-mobile");
const overlayMb = document.querySelector(".header__overlay");

headerBarsMb.addEventListener("click", () => {
  overlayMb.classList.toggle("show-overlay");
});

//*//
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  window.location.href = "/index.html";
});

//*//

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.querySelector(".number-input");
  const decrementButton = document.querySelector(".decrement");
  const incrementButton = document.querySelector(".increment");

  decrementButton.addEventListener("click", function () {
    const currentValue = parseInt(numberInput.value) || 0;
    if (currentValue > numberInput.min) {
      numberInput.value = currentValue - 1;
    }
  });

  incrementButton.addEventListener("click", function () {
    const currentValue = parseInt(numberInput.value) || 0;
    if (currentValue < numberInput.max) {
      numberInput.value = currentValue + 1;
    }
  });
});
