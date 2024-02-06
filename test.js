
window.onscroll = function () {
    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Add the "sticky" class when you reach its scroll position. Remove "sticky" when you leave the scroll position.
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

