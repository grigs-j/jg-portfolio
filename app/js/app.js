//mobile toggle
const toggleButton = document.getElementById("toggle-button");
const navbarLinks = document.getElementById("nav--flex");
const closeMobile = document.querySelector(".fa-window-close");
const links = document.querySelectorAll(".link");
//tablet query for hero
const heroContainer = document.getElementById("hero--content");
//io
const toslide = document.querySelectorAll(".toslide");
const todrop = document.querySelectorAll(".todrop");
const tofadein = document.querySelectorAll(".tofadein");

//main menu toggle
//setting toggle active display class on click
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    closeMobile.classList.toggle("active");
    document.body.classList.add("noscroll");
});
closeMobile.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    closeMobile.classList.toggle("active");
    document.body.classList.remove("noscroll");
});
links.forEach((link) => {
    link.addEventListener("click", () => {
        navbarLinks.classList.remove("active");
        closeMobile.classList.remove("active");
        document.body.classList.remove("noscroll");
    });
});

//media queries
//adding container class to hero content on tablet and bigger
const tabletQuery = window.matchMedia("(min-width: 767px)");
if (tabletQuery.matches) {
    heroContainer.classList.add("container");
}

//intersection observer api
const slideObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (
                entry.isIntersecting &&
                entry.target.hasAttribute("data-slide")
            ) {
                entry.target.classList.remove("hide");
                entry.target.classList.add("ioSlide");
            }
            if (entry.isIntersecting) slideObserver.unobserve(entry.target);
        });
    },
    {
        threshold: 1,
    }
);
toslide.forEach((el) => {
    slideObserver.observe(el);
});

const dropObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (
                entry.isIntersecting &&
                entry.target.hasAttribute("data-drop")
            ) {
                entry.target.classList.remove("hide");
                entry.target.classList.add("ioDrop");
            }
            if (entry.isIntersecting) dropObserver.unobserve(entry.target);
        });
    },
    {
        threshold: 1,
    }
);
todrop.forEach((el) => {
    dropObserver.observe(el);
});

const fadeinObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (
                entry.isIntersecting &&
                entry.target.hasAttribute("data-fadein")
            ) {
                entry.target.classList.remove("hide");
                entry.target.classList.add("ioFadeIn");
            }
            if (entry.isIntersecting) fadeinObserver.unobserve(entry.target);
        });
    },
    {
        threshold: 1,
    }
);
tofadein.forEach((el) => {
    fadeinObserver.observe(el);
});
