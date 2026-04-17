// Prompt for name
let userName = prompt("Enter your name:");
document.getElementById("welcomeMessage").innerHTML = "Welcome " + userName + "!";

// Prompt for age
let age = prompt("Enter your age:");

if (age >= 18) {
    alert("You are old enough to enter this site.");
} else {
    alert("Sorry, you are not old enough to enter this site.");
}

// Show image
function showImage() {
    document.getElementById("myImage").style.display = "block";
}

// Hide image
function hideImage() {
    document.getElementById("myImage").style.display = "none";
}

// Hover alert
function showAlert() {
    alert("You hovered over the link!");
}
