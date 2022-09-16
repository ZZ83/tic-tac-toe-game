import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayModal 
} from "./toggle.js";

import { 
    game,
} from "./game.js";

import { 
    outlineIcons
} from "./icons.js";

import { 
    renderBetaModal 
} from "./modals.js";

// Listens for clicks on X and O marks and highlight the selected mark
document.querySelector(".mark-selection").addEventListener("click", function (event) {
    if (event.target.classList.contains("mark-selection__x")) {
        game.mark = "x";
        game.whosTurn = "player1"
        event.target.classList.add("selected");
        event.target.nextElementSibling.classList.remove("selected");
    }
    if (event.target.classList.contains("mark-selection__o")) {
        game.mark = "o";
        game.whosTurn = "player2"
        event.target.classList.add("selected");
        event.target.previousElementSibling.classList.remove("selected");
    }
});

// Listens for clicks on both new game buttons and loads the game board
document.querySelector("#new-game-buttons").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-new-game--cpu")) {
        toggleMenuScreen();
        toggleGameScreen();
        game.isComputer = true;
    }
    if (event.target.classList.contains("btn-new-game--player")) {
        toggleMenuScreen();
        toggleGameScreen();
    }
    game.outlineCurrentPlayersMark();
});

// Listens for clicks on restart button and shows restart game modal
document.querySelector(".btn-restart").addEventListener("click", function () {
    toggleOverlayModal();
    renderBetaModal("restart game?", "no, cancel", "yes, restart");
});

// Listens for clicks on the gameboard__item
document.querySelectorAll(".game-board__item").forEach( (element, index) => {
    element.innerHTML = outlineIcons;
    element.addEventListener("click", function () {
        game.placeMarkOnBoard(element, index);
    });
});







    




