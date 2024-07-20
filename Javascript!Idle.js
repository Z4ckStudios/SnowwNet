var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    location.replace("Home.html");

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