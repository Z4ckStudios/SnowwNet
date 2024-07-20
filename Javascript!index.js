let StartTimer = 0;
//const StartTimerInterval = setInterval(StartTimerInt, 1000);

SiteLocation = localStorage.getItem("SiteLocation");

var url = "https://Z4ckStudios.github.io/SnowwNet/";
window.history.replaceState(null, document.title, url);

function StartTimerInt() {
    StartTimer++

    if(StartTimer > 1)
        {
        if(SiteLocation == null || SiteLocation == "MainPage")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/MainPage.html");}

        if(SiteLocation == "AboutUs")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/AboutUs.html");}

        if(SiteLocation == "ServerStatus")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/ServerStatus.html");}

        if(SiteLocation == "Home")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet/Home.html");}
    }
}