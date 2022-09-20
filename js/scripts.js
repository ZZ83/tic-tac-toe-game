import { game }                   from "./game.js";
import { boardItems }             from "./elements.js";
import { outlineIcons }           from "./icons.js";
import { setScoreHeaders }        from "./players.js";
import { renderRestartBetaModal } from "./modals.js";

import { 
    player1, 
    player2 
} from "./players.js";

import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayModal 
} from "./toggle.js";

/** 
 * Listen for click event on `.mark-selection` using bubbling.
 */
document.querySelector(".mark-selection").addEventListener("click", function (event) {
    if (event.target.classList.contains("mark-selection__x")) {
        player1.mark = "x";
        player2.mark = "o";
        game.whosTurn = "player1";
        game.whoIsGoingFirst = "player1";
        event.target.classList.add("selected");
        event.target.nextElementSibling.classList.remove("selected");
    }
    if (event.target.classList.contains("mark-selection__o")) {
        player1.mark = "o";
        player2.mark = "x";
        game.whosTurn = "player2"
        game.whoIsGoingFirst = "player2";
        event.target.classList.add("selected");
        event.target.previousElementSibling.classList.remove("selected");
    }
});

/** 
 * Listen for click event on `#new-game-buttons` using bubbling.
 */
document.querySelector("#new-game-buttons").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-new-game--cpu")) {
        toggleMenuScreen();
        toggleGameScreen();
        game.isComputer = true;
        player1.mark === "x" ? setScoreHeaders("you", "cpu") : setScoreHeaders("cpu", "you");
    }
    if (event.target.classList.contains("btn-new-game--player")) {
        toggleMenuScreen();
        toggleGameScreen();
        player1.mark === "x" ? setScoreHeaders("p1", "p2"): setScoreHeaders("p2", "p1");
    }
    game.outlineCurrentPlayersMark();
});

/** 
 * Listen for click event on `.btn-restart`.
 */
document.querySelector(".btn-restart").addEventListener("click", function () {
    toggleOverlayModal();
    renderRestartBetaModal();
});

/** 
 * Listen for click event on each `.game-board__item`.
 */
boardItems.forEach( (element, index) => {
    element.innerHTML = outlineIcons.x + outlineIcons.o;
    element.addEventListener("click", function () {
        game.placeMarkOnBoard(element, index);
    });
});







    



