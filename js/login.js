var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "WGsysadmin" && password == "SDGwieo47(91"){
alert ("Login successfully");
}
window.location = "../user/WGsysadmin/index.html"; // Redirecting to other page.
if ( username == "SGsyadmin" && password == "WDGwieo48(92"){
    alert ("Login successfully");
    window.location = "../user/WGsysadmin/index.html";
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