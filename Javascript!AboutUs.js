var url = "/AboutUs/";
window.history.replaceState(null, document.title, url);

var PZStudiosButton = document.querySelector(".PZStudiosButton");

PZStudiosButton.addEventListener("click",
function() {

    localStorage.setItem("SiteLocation", "MainPage");
    location.replace("/Redirecting.html");
})

var HomeButton = document.querySelector(".HomeButton");

HomeButton.addEventListener("click",
function() {

    localStorage.setItem("SiteLocation", "MainPage");
    location.replace("/index.html");
})