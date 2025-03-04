"use strict";
const mobileNavigation = document.querySelector(".mobile__navigation");
const headerContainer = document.querySelector(".header__content");
const overlay = document.querySelector(".overlay");

// mobile navigation
mobileNavigation.addEventListener("click", function () {
  headerContainer.classList.toggle("active");
  overlay.classList.toggle("active");
});

// reveal section
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  // const [entry] = entries;
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
