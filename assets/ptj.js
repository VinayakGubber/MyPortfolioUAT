// Theme switcher functionality
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Ensure the correct logo is shown immediately on page load
document.addEventListener("DOMContentLoaded", function () {
  const logoLight = document.getElementById("logo-light");
  const logoDark = document.getElementById("logo-dark");

  if (!logoLight || !logoDark) {
    console.error("Logo elements not found!");
    return;
  }

  changeLogoBasedOnTheme(); // Ensures logo updates correctly
});

// Get saved theme preference
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Function to change logos based on theme
function changeLogoBasedOnTheme() {
  const logoLight = document.getElementById("logo-light");
  const logoDark = document.getElementById("logo-dark");

  if (document.body.classList.contains(darkTheme)) {
    logoLight.style.display = "none";
    logoDark.style.display = "block";
  } else {
    logoLight.style.display = "block";
    logoDark.style.display = "none";
  }
}

// Apply saved theme
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
  changeLogoBasedOnTheme();
}

// Theme toggle button functionality
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  changeLogoBasedOnTheme(); // Update logo when theme changes

  // Save user preference
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Get current theme
function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
}

// Get current icon
function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
}

// Skills section toggle functionality
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  // Close all skills sections first
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  // Open the clicked one
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

// Add click event to all skills headers
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// Modal functionality for education section
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// Initialize Swiper for portfolio projects
const swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  // Enable pagination with clickable bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Enable navigation arrows if needed
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Scroll sections active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Show scroll up button
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);
