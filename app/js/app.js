//setting toggle active display class on click
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav--flex")[0];
const closeMobile = document.querySelector(".fa-window-close");
const home = document.querySelector(".drop1");
const projects = document.querySelector(".drop2");
const about = document.querySelector(".drop4");
const heroanim = document.querySelector(".hero--content");

//main menu toggle
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.add("active");
    closeMobile.classList.add("active");
});
closeMobile.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    closeMobile.classList.remove("active");
    heroanim.classList.add("active");
});
home.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    closeMobile.classList.remove("active");
});
projects.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    closeMobile.classList.remove("active");
});
about.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    closeMobile.classList.remove("active");
});

//media queries
const tabletQuery = window.matchMedia("(min-width: 767px");
if (tabletQuery.matches) {
    heroanim.classList.add("container");
} else {
    console.log("no match");
}

//intersection observer api
const hero = document.querySelector(".hero");
const cta = document.querySelector(".cta");
const footer = document.querySelector(".footer");
const body = document.querySelector("body");

const options = {
    threshold: 1,
};

const footerObserver = new IntersectionObserver(function (
    entries,
    footerObserver
) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(`entered view of screen ${entry}`);
        } else {
            console.log(`left view of screen ${entry}`);
        }
    });
},
options);

footerObserver.observe(cta, hero, footer);
