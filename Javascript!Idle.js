var timeout;

var url = "https://Z4ckStudios.github.io/SnowwNet/IdleDetect/";
window.history.replaceState(null, document.title, url);

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    location.replace("https://Z4ckStudios.github.io/SnowwNet/Home.html");

    cursor.style.top = "px";
    cursor.style.left = "px";
    cursor.style.display = "block";

    const timeout = setTimeout(mouseStopped, 1000);

    //Time Change
    function mouseStopped(){
        cursor.style.display = "none";

        clearTimeout(timeout);
    }
})