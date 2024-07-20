var url = "https://Z4ckStudios.github.io/SnowwNet/Redirecting";
window.history.replaceState(null, document.title, url);

SiteLocation = localStorage.getItem(SiteLocation);

let count = 0;
const countInterval = setInterval(countInt, 1000);

function countInt() {
    count++

    if(count > 1)
        {if(SiteLocation == null || SiteLocation == "MainPage")
        {window.open("https://Z4ckStudios.github.io/Z4ckStudios");
        location.replace("https://Z4ckStudios.github.io/SnowwNet/MainPage.html");}
        else
        if(SiteLocation == "MPfrom403")
        {location.replace("https://Z4ckStudios.github.io/SnowwNet");}
    }
}