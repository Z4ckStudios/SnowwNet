var url = "https://Z4ckStudios.github.io/SnowwNet/Redirecting/";
window.history.replaceState(null, document.title, url);

let count = 0;
const countInterval = setInterval(countInt, 1000);

function countInt() {
    count++

    if(count > 1)
    {window.open("https://Z4ckStudios.github.io/Z4ckStudios");
    location.replace("https://Z4ckStudios.github.io/SnowwNet/MainPage/");}
}