var url = "https://Z4ckStudios.github.io/SnowwNet/AboutUs/";
window.history.replaceState(null, document.title, url);

var PZStudiosButton = document.querySelector(".PZStudiosButton");

PZStudiosButton.addEventListener("click",
function() {

    localStorage.setItem("SiteLocation", "MainPage");
    location.replace("https://Z4ckStudios.github.io/SnowwNet/Redirecting.html");
})

var HomeButton = document.querySelector(".HomeButton");

HomeButton.addEventListener("click",
function() {

    localStorage.setItem("SiteLocation", "MainPage");
    location.replace("https://Z4ckStudios.github.io/SnowwNet/");
})