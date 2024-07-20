let count = "1";
var timeout;

setInterval(() => {

    count++

    if(count > 300) location.replace("https://Z4ckStudios.github.io/SnowwNet/Idle.html");
}, 1000);

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    count = 1;

    cursor.style.top = "px";
    cursor.style.left = "px";
    cursor.style.display = "block";

    //Time Change
    function mouseStopped(){
        cursor.style.display = "none";

        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 1000);
    }
})