var LoginUpPopup = ["scale(1)", "scale(0)"];
var XSignU = "scale(0)";
var OpenLogin = "scale(1)";
var i = 2;

document.querySelector(".btnLogin-popup").addEventListener("click",
function(){
    i = i < LoginUpPopup.length ? ++i : i - 2;

document.querySelector(".LoginWrapper").style.transform = LoginUpPopup[i];
document.querySelector(".LoginBackground").style.transform = LoginUpPopup[i];
document.querySelector(".LoginBackgroundBorder").style.transform = LoginUpPopup[i];

document.querySelector(".SignUpWrapper").style.transform = XSignU;
document.querySelector(".SignUpBackground").style.transform = XSignU;
document.querySelector(".SignUpBackgroundBorder").style.transform = XSignU;

document.querySelector(".LoginWrapper").style.transform = OpenLogin;
document.querySelector(".LoginBackground").style.transform = OpenLogin;
document.querySelector(".LoginBackgroundBorder").style.transform = OpenLogin;

document.querySelector(".ContactBackground").style.transform = "scale(0)";
document.querySelector(".ContactBackgroundBorder").style.transform = "scale(0)";
document.querySelector(".ContactText").style.display = "none";
document.querySelector(".ContactTextFade").style.display = "none";

document.querySelector(".ContactInfoTextRep").style.display = "none";
})

var LoginX = "scale(0)";

document.querySelector(".XButtonLogin").addEventListener("click",
function(){
    i = i < LoginX.length ? ++i : i - 2;

document.querySelector(".LoginWrapper").style.transform = "scale(0)";
document.querySelector(".LoginBackground").style.transform = "scale(0)";
document.querySelector(".LoginBackgroundBorder").style.transform = "scale(0)";
})

//Element Separation

var SignUpPopup = ["scale(1)", "scale(0)"]
var XLogin = "scale(0)";
var OpenSignUp = "scale(1)";
var i = 2

document.querySelector(".btnSignUp-popup").addEventListener("click",
function(){
    i = i < SignUpPopup.length ? ++i : i - 2;

document.querySelector(".SignUpWrapper").style.transform = SignUpPopup[i];
document.querySelector(".SignUpBackground").style.transform = SignUpPopup[i];
document.querySelector(".SignUpBackgroundBorder").style.transform = SignUpPopup[i];

document.querySelector(".LoginWrapper").style.transform = XLogin;
document.querySelector(".LoginBackground").style.transform = XLogin;
document.querySelector(".LoginBackgroundBorder").style.transform = XLogin;

document.querySelector(".SignUpWrapper").style.transform = OpenSignUp;
document.querySelector(".SignUpBackground").style.transform = OpenSignUp;
document.querySelector(".SignUpBackgroundBorder").style.transform = OpenSignUp;

document.querySelector(".ContactBackground").style.transform = "scale(0)";
document.querySelector(".ContactBackgroundBorder").style.transform = "scale(0)";
document.querySelector(".ContactText").style.display = "none";
document.querySelector(".ContactTextFade").style.display = "none";

document.querySelector(".ContactInfoTextRep").style.display = "none";
})

var SignUpX = "scale(0)";
var i = 2;

document.querySelector(".XButtonSignUp").addEventListener("click",
function(){
    i = i < SignUpX.length ? ++i : i - 2;

document.querySelector(".SignUpWrapper").style.transform = "scale(0)";
document.querySelector(".SignUpBackground").style.transform = "scale(0)";
document.querySelector(".SignUpBackgroundBorder").style.transform = "scale(0)";
})

//Element Separation

document.querySelector(".EmailPlacementText").addEventListener("click",
function() {

    document.querySelector(".EmailPlacementText").value = "";
    document.querySelector(".EmailPlacementText").style.color = "white";
})

document.querySelector(".PasswordPlacementText").addEventListener("click",
function() {

    document.querySelector(".PasswordPlacementText").value = "";
    document.querySelector(".PasswordPlacementText").style.color = "white";
})

//Element Separation

var Replace = "Quick Example";

document.querySelector(".LoginSubmitButton").addEventListener("click",
function() {

    document.querySelector(".AccountPlacement::after").style.content = Replace;
})

//Element Separation

var i = 2

document.querySelector(".ContactInfoText").addEventListener("click",
function() {

document.querySelector(".ContactBackground").style.transform = "scale(1)";
document.querySelector(".ContactBackgroundBorder").style.transform = "scale(1)";
document.querySelector(".ContactText").style.display = "inline";
document.querySelector(".ContactTextFade").style.display = "none";

document.querySelector(".LoginWrapper").style.transform = "scale(0)";
document.querySelector(".LoginBackground").style.transform = "scale(0)";
document.querySelector(".LoginBackgroundBorder").style.transform = "scale(0)";
document.querySelector(".SignUpWrapper").style.transform = "scale(0)";
document.querySelector(".SignUpBackground").style.transform = "scale(0)";
document.querySelector(".SignUpBackgroundBorder").style.transform = "scale(0)";
})

document.querySelector(".ContactInfoText").addEventListener("click",
function() {

document.querySelector(".ContactInfoTextRep").style.display = "inline";
})

//Element Separation

var i = 2

document.querySelector(".ContactInfoTextRep").addEventListener("click",
function() {

    document.querySelector(".ContactBackground").style.transform = "scale(0)";
    document.querySelector(".ContactBackgroundBorder").style.transform = "scale(0)";
    document.querySelector(".ContactText").style.display = "none";
    document.querySelector(".ContactTextFade").style.display = "inline";
})

document.querySelector(".ContactInfoTextRep").addEventListener("click",
function() {

document.querySelector(".ContactInfoTextRep").style.display = "none";
})

//Element Separation

document.querySelector(".SignUpUsernamePlacementText").addEventListener("click",
function() {

    document.querySelector(".SignUpUsernamePlacementText").value = "";
    document.querySelector(".SignUpUsernamePlacementText").style.color = "white";
})
document.querySelector(".SignUpEmailPlacementText").addEventListener("click",
function() {

    document.querySelector(".SignUpEmailPlacementText").value = "";
    document.querySelector(".SignUpEmailPlacementText").style.color = "white";
})

document.querySelector(".SignUpPasswordPlacementText").addEventListener("click",
function() {

    document.querySelector(".SignUpPasswordPlacementText").value = "";
    document.querySelector(".SignUpPasswordPlacementText").style.color = "white";
})
