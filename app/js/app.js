const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav--flex")[0];
const closeMobile = document.querySelector(".fa-window-close");
const home = document.querySelector(".drop1");
const projects = document.querySelector(".drop2");
const about = document.querySelector(".drop4");
const heroanim = document.querySelector(".hero--content");

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
home.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    closeMobile.classList.remove("active");
    document.body.classList.remove("noscroll");
});
projects.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    closeMobile.classList.remove("active");
    document.body.classList.remove("noscroll");
});
about.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    closeMobile.classList.remove("active");
    document.body.classList.remove("noscroll");
});

//media queries
//adding container class to hero content on tablet and bigger
const tabletQuery = window.matchMedia("(min-width: 767px)");
if (tabletQuery.matches) {
    heroanim.classList.add("container");
} else {
    console.log("hi");
}

//intersection observer api
const slideIn = document.querySelectorAll(".slide-in");

const slideObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("slide-in", entry.isIntersecting);
            if (entry.isIntersecting) slideObserver.unobserve(entry.target);
        });
    },
    {
        threshold: 0.7,
    }
);

slideIn.forEach((el) => {
    slideObserver.observe(el);
});

// const dark = document.querySelectorAll(".dark");

// const darkObserver = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             entry.target.classList.toggle("trans-dark", entry.isIntersecting);
//             document.body.classList.toggle("trans-dark", entry.isIntersecting);
//         });
//     },
//     {
//         threshold: 1,
//     }
// );

// dark.forEach((el) => {
//     darkObserver.observe(el);
// });
