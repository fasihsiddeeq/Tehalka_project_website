const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 180);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// Show booking page when any package is clicked
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
        document.getElementById("bookingPage").style.display = "block";
        window.scrollTo(0, 0);
    });
});
