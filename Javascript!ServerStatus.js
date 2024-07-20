HomeButton = document.querySelector(".HomeButton");
CheckingBackgroundText = document.querySelector(".CheckingBackgroundText");
ServerDots = document.querySelector(".ServerDots");

var url = "https://Z4ckStudios.github.io/SnowwNet/ServerStatus";
window.history.replaceState(null, document.title, url);

HomeButton.addEventListener("click",
function() {

    localStorage.setItem("SiteLocation", "MainPage");
    location.replace("https://Z4ckStudios.github.io/SnowwNet");
})

let CheckCounter = 0;
const CheckInterval = setInterval(CheckInt, 1000);

function CheckInt() {
    CheckCounter++

    if(CheckCounter > 5)
    {CheckingBackgroundText.innerHTML = "Our servers are currently: Off";
    ServerDots.style.display = "none";}
}