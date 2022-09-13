import { toggleMenuScreen, toggleGameScreen, toggleOverlayScreen } from "./toggleScreens.js";
import { renderBetaModal } from "./modals.js";

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
        toggleMenuScreen();
        toggleGameScreen();
    }
    if (event.target.classList.contains("btn-new-game--player")) {
        toggleMenuScreen();
        toggleGameScreen();
    }
});

document.querySelector(".btn-restart").addEventListener("click", function () {
    toggleOverlayScreen();
    renderBetaModal("restart game?", "no, cancel", "yes, restart");
});
