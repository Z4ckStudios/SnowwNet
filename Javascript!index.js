let StartTimer = 0;
const StartTimerInterval = setInterval(StartTimerInt, 1000);

SiteLocation = localStorage.getItem("SiteLocation");

var url = "/SnowwNet/Loading/";
window.history.replaceState(null, document.title, url);

function StartTimerInt() {
    StartTimer++

    if(StartTimer > 1 && SiteLocation == "MainPage")
        {location.replace("/MainPage.html");}
    else
    if(StartTimer > 1 && SiteLocation == "AboutUs")
        {location.replace("/AboutUs.html");}
    else
    if(StartTimer > 1 && SiteLocation == "ServerStatus")
        {location.replace("/ServerStatus.html");}
    else
    if(StartTimer > 1 && SiteLocation == "Home")
        {location.replace("/Home.html");}
}