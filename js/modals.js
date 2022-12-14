import { 
    resetBoard, 
    clearWinnerBoxes,
    preventButtonClicks,
} from "./board.js";

import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayModal,
} from "./toggle.js";

import { 
    game, 
    setDisplay, 
    setCurrentTurnMark,
    resetToInitialState, 
} from "./game.js";

import { player2 }          from "./players.js";
import { resetScores }      from "./scores.js";
import { currentTurnIcons } from "./icons.js";

const modal = document.querySelector(".modal");

/** 
 * Creates the winnerModal component which appear when a player wins.
 * @param {object} icon - The template literal of the svg and the fill color.
 * @param {string} message - Displays who won or lost.
 */
export function renderAplhaModal(icon, message) {
    const winnerModal = `
        <div class="alpha-modal">
            <h2 class="alpha-modal__sub-header">${message}</h2>
            <div class="alpha-modal__inner-wrapper">
                ${icon.svg}
                <h1 style="color: ${icon.fill};">Takes the round</h1>
            </div>
            <div class="button-wrapper">
                <button class="btn-silver btn-left">Quit</button>
                <button class="btn-yellow btn-right">Next Round</button>
            </div>
        </div>
    `;
    modal.innerHTML = winnerModal;
    //**  Listens for clicks using bubbling on both quit and next round buttons. */
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
            toggleGameScreen();
            toggleMenuScreen();
            clearWinnerBoxes();
            resetBoard();
            resetScores();
            resetToInitialState();
            setCurrentTurnMark(currentTurnIcons[game.mark]);
        }  
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
            clearWinnerBoxes();
            resetBoard();
            game.switchWhosGoingFirst();
        } 
    });
}

/** 
 * Creates the tieModal component which appears when the game ends in a tie.
 */
export function renderTiedBetaModal() {
    const tieModal = `
        <div class="beta-modal">
        <h1 class="beta-modal__text">round tied</h1>
        <div class="button-wrapper">
            <button class="btn-silver btn-left">quit</button>
            <button class="btn-yellow btn-right">next round</button>
        </div>
        </div>  
    `;
    modal.innerHTML = tieModal;
    //**  Listens for clicks using bubbling on both quit and next round buttons. */
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
            toggleGameScreen();
            toggleMenuScreen();
            resetBoard();
            resetScores();
            resetToInitialState();
            setCurrentTurnMark(currentTurnIcons[game.mark])
        } 
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
            clearWinnerBoxes();
            resetBoard();
            game.switchWhosGoingFirst();
            game.runAi();
            if( game.isComputer === true && player2.mark === "x" && game.mark === "x" || 
                game.isComputer === true && player2.mark === "o" && game.mark === "o") {
                preventButtonClicks();
            }
        }
    });
}

/** 
 * Creates the restartModal component which appears when the restart button is clicked.
 */
export function renderRestartBetaModal() {
    const restartModal = `
        <div class="beta-modal">
        <h1 class="beta-modal__text">restart game?</h1>
        <div class="button-wrapper">
            <button class="btn-silver btn-left">no, cancel</button>
            <button class="btn-yellow btn-right">yes, restart</button>
        </div>
        </div>  
    `;
    modal.innerHTML = restartModal;
    //**  Listens for clicks using bubbling on both cancle and restart buttons. */
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
        } 
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
            resetBoard();
            resetScores();
            game.mark    = "x";
            game.whoIsGoingFirst = "x"
            setCurrentTurnMark("x");
            setDisplay("x", "initial")
            game.setOutlineColor("#31C3BD");
            setCurrentTurnMark(currentTurnIcons[game.mark])
            game.runAi();
            if(game.isComputer === true && player2.mark === "x") {
                preventButtonClicks();
            }
        }
    });
}











