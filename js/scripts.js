import { game }                   from "./game.js";
import { boardItems }             from "./elements.js";
import { outlineIcons }           from "./icons.js";
import { renderRestartBetaModal } from "./modals.js";
import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayModal 
} from "./toggle.js";

/** 
 * Listen for click event on `.mark-selection` using bubbling
 */
document.querySelector(".mark-selection").addEventListener("click", function (event) {
    if (event.target.classList.contains("mark-selection__x")) {
        game.whosTurn = "player1"
        event.target.classList.add("selected");
        event.target.nextElementSibling.classList.remove("selected");
    }
    if (event.target.classList.contains("mark-selection__o")) {
        game.whosTurn = "player2"
        event.target.classList.add("selected");
        event.target.previousElementSibling.classList.remove("selected");
    }
});

/** 
 * Listen for click event on `#new-game-buttons` using bubbling
 */
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

/** 
 * Listen for click event on `.btn-restart`
 */
document.querySelector(".btn-restart").addEventListener("click", function () {
    toggleOverlayModal();
    renderRestartBetaModal();
});

/** 
 * Listen for click event on each `.game-board__item`
 */
boardItems.forEach( (element, index) => {
    element.innerHTML = outlineIcons.x + outlineIcons.o;
    element.addEventListener("click", function () {
        game.placeMarkOnBoard(element, index);
    });
});







    




