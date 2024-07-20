var url = "https://Z4ckStudios.github.io/SnowwNet/403";
window.history.replaceState(null, document.title, url);

HomeButton = document.querySelector(".HomeButton");

HomeButton.addEventListener("click",
function () {

    localStorage.setItem("SiteLocation", "MPfrom403");
    location.replace("https://Z4ckStudios.github.io/SnowwNet/Redirecting.html");
})