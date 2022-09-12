import { toggleMenuScreen, toggleGameScreen, toggleOverlayScreen } from "./toggleScreens.js";

/**
 * Listens for click on `.mark-selection`,
 * Add selected class to current target,
 * Remove the selected class from its sibling
 */
document.querySelector(".mark-selection").addEventListener("click", function (event) {
    if (event.target.classList.contains("mark-selection__x")) {
        event.target.classList.toggle("selected");
        event.target.nextElementSibling.classList.toggle("selected");
    }
    if (event.target.classList.contains("mark-selection__o")) {
        event.target.classList.toggle("selected");
        event.target.previousElementSibling.classList.toggle("selected");
    }
});

document.querySelector("#new-game-buttons").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-new-game--cpu")) {
        console.log("CPU");
        toggleMenuScreen();
        toggleGameScreen();
    }
    if (event.target.classList.contains("btn-new-game--player")) {
        console.log("PLAYER");
        toggleMenuScreen();
        toggleGameScreen();
    }
});

document.querySelector(".btn-restart").addEventListener("click", function () {
    toggleOverlayScreen();
});
