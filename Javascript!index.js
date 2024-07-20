let StartTimer = 0;
//const StartTimerInterval = setInterval(StartTimerInt, 1000);

SiteLocation = localStorage.getItem("SiteLocation");

var url = "https://Z4ckStudios.github.io/SnowwNet/";
window.history.replaceState(null, document.title, url);

function StartTimerInt() {
    StartTimer++

    if(StartTimer > 1 && SiteLocation == null || StartTimer > 1 && SiteLocation == "MainPage")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/MainPage.html");}
    else
    if(StartTimer > 1 && SiteLocation == "AboutUs")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/AboutUs.html");}
    else
    if(StartTimer > 1 && SiteLocation == "ServerStatus")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/ServerStatus.html");}
    else
    if(StartTimer > 1 && SiteLocation == "Home")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/Home.html");}
}