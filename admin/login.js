var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "WGsysadmin" && password == "SDGwieo47(91"){
alert ("Login successfully");
window.location = "dashboard.html"; // Redirecting to other page.
}
if ( username == "SGsysadmin" && password == "WDGwieo48(92"){
    alert ("Login successfully");
    window.location = "dashboard.html";
}
if ( username == "JMsysadmin" && password == "JDMwieo49(93"){
    alert ("Login successfully");
    window.location = "dashboard.html";
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