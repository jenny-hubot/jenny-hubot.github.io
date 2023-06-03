var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "WGsysadmin" && password == "SDGwieo47(91"){
alert ("Login successfully");
window.location = "../user/waitSpace2.html"; // Redirecting to other page.
}
if ( username == "SGsysadmin" && password == "WDGwieo48(92"){
    alert ("Login successfully");
    window.location = "../users/waitSpace2.html";
}
if ( username == "MattGraves00" && password == "$y*g9gC7oLMO4eMzjUFW04c!"){
    alert ("Login successfully");
    window.location = "../user/waitSpace2.html";
return false;
}
if ( username == "HGsysadminBE" && password == "R2D2/BB8"){
    alert ("Login successfully");
    window.location = "https://benny-hubot.github.io/login.html";
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
