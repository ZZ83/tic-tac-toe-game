import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayModal 
} from "./toggle.js";

import { 
    renderBetaModal 
} from "./modals.js";

// Listens for clicks on X and O marks and highlight the selected mark
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

// Listens for clicks on both new game buttons and loads the game board
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

// Listens for clicks on restart button and shows restart game modal
document.querySelector(".btn-restart").addEventListener("click", function () {
    toggleOverlayModal();
    renderBetaModal("restart game?", "no, cancel", "yes, restart");
});
    




