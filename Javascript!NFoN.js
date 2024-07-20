var displays = ["inline", "none"];
var i = 2;

var url = "/404/";
//window.history.replaceState(null, document.title, url);

document.querySelector(".DevEmailButton").addEventListener("click",
function(){
    i = i < displays.length ? ++i : i - 2;
    i = i < displays.length ? +i : i - 2;

    document.querySelector(".DevEmailButton").style.display = "none";
    document.querySelector(".DevEmailButtonCallback").style.display = "inline";

    document.querySelector(".DevEmailText").style.display = displays[i];
    document.querySelector(".DevEmailTextRefade").style.display = "none";
})

var displays = ["inline", "none"];
var i = 2;

document.querySelector(".DevEmailButtonCallback").addEventListener("click",
function(){
    i = i < displays.length ? ++i : i - 2;
    i = i < displays.length ? +i : i - 2;

    document.querySelector(".DevEmailButton").style.display = "inline";
    document.querySelector(".DevEmailButtonCallback").style.display = "none";

    document.querySelector(".DevEmailText").style.display = "none";
    document.querySelector(".DevEmailTextRefade").style.display = "inline";
})