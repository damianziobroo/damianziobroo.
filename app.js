var hamburgerbtn = document.querySelector(".hamburger-btn"),
    pageNavigation = document.querySelector(".page-navigation");

hamburgerbtn.addEventListener("click", function () {
    pageNavigation.classList.toggle("open");
    document.querySelector(".hamburger-icon").classList.toggle("open");
    document.querySelector(".hamburger-close-icon").classList.toggle("open");
}, false);

pageNavigation.addEventListener("click", function () {
    pageNavigation.classList.toggle("open");
    document.querySelector(".hamburger-icon").classList.toggle("open");
    document.querySelector(".hamburger-close-icon").classList.toggle("open");
}, false);

window.addEventListener("scroll", function () {
    document.querySelector(".page-header").classList.add("scroll-site");
});

function initMap() {
    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}