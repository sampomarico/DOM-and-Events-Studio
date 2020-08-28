// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOff = null;
let land = null;
let missionAbort = null;
let flightStatus = null;
let shuttleBackground = null;
let spaceShuttleHeight = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;
let shuttleImage = null;

window.addEventListener("load", function() {
    console.log('window loaded');
})


function init () {
takeOff = document.getElementById("takeoff");
land = document.getElementById("landing");
missionAbort = document.getElementById("missionAbort");
flightStatus = document.getElementById("flightStatus");
shuttleBackground = document.getElementById("shuttleBackground");
spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
upButton = document.getElementById("up");
downButton = document.getElementById("down");
leftButton = document.getElementById("left");
rightButton = document.getElementById("right");
shuttleImage = document.getElementById("rocket");
shuttleImage.position = "absolute";
shuttleImage.style.bottom = "0px";
shuttleImage.style.left = "0px";


takeOff.addEventListener('click', function(event) {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style = "background-color: blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
})

land.addEventListener('click', function(event) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style = "background-color: ''";
    spaceShuttleHeight.innerHTML = 0;
})

missionAbort.addEventListener('click', function(event) {
    let abortResponse = window.confirm("Confirm that you want to abort the mission.");
        if (abortResponse) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style = "background-color: ''";
            spaceShuttleHeight.innerHTML = 0;
        }
})

upButton.addEventListener('click', function(event) {
    let currentUp = parseInt(shuttleImage.style.bottom);
    let newUp = currentUp + 10;
    newUp = newUp + "px";
    shuttleImage.style.bottom = newUp;
    let heightValue = Number(spaceShuttleHeight.innerHTML);
    spaceShuttleHeight.innerHTML = heightValue + 10000;
})


downButton.addEventListener('click', function(event) {
    let currentDown = parseInt(shuttleImage.style.bottom);
    let newDown = currentDown - 10;
    newDown = newDown + "px";
    shuttleImage.style.bottom = newDown;
    let heightValue = Number(spaceShuttleHeight.innerHTML);
    spaceShuttleHeight.innerHTML = heightValue - 10000;
})

rightButton.addEventListener('click', function(event) {
    let currentRight = shuttleImage.offsetLeft;
    let newRight = currentRight + 10;
    newRight = newRight + "px";
    shuttleImage.style.left = newRight;
})

leftButton.addEventListener('click', function(event) {
    let currentLeft = parseInt(shuttleImage.style.left);
    let newLeft = currentLeft - 10;
    newLeft = newLeft + "px";
    shuttleImage.style.left = newLeft;
})

}

window.onload = init;