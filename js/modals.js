import { game }       from "./game.js";
import { resetBoard } from "./board.js";

import { 
    toggleMenuScreen, 
    toggleGameScreen, 
    toggleOverlayModal
} from "./toggle.js";

import { clearWinnerBoxes } from "./elements.js";
 
const modal = document.querySelector(".modal");

// Creates the alphaModal component
export function renderAplhaModal(icon, message) {
    const alphaModal = `
        <div class="alpha-modal">
            <h4 class="alpha-modal__sub-header">${message}</h4>
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
    modal.innerHTML = alphaModal;
    // Listens for clicks on both left and right modal buttons
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
            toggleGameScreen();
            toggleMenuScreen();
            resetBoard();
            game.resetScores();
        }  
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
            resetBoard();
            clearWinnerBoxes();
            game.switchWhosGoingFirst();
        } 
    });
}

// Creates the betaModal component
export function renderRestartBetaModal() {
    const betaModal = `
        <div class="beta-modal">
        <h1 class="beta-modal__text">restart game?</h1>
        <div class="button-wrapper">
            <button class="btn-silver btn-left">no, cancel</button>
            <button class="btn-yellow btn-right">yes, restart</button>
        </div>
        </div>  
    `;
    modal.innerHTML = betaModal;
    // Listens for clicks on both left and right modal buttons
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
        } 
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
        }
    });
}

// Creates the betaModal component
export function renderTiedBetaModal() {
    const betaModal = `
        <div class="beta-modal">
        <h1 class="beta-modal__text">round tied</h1>
        <div class="button-wrapper">
            <button class="btn-silver btn-left">quit</button>
            <button class="btn-yellow btn-right">next round</button>
        </div>
        </div>  
    `;
    modal.innerHTML = betaModal;
    // Listens for clicks on both left and right modal buttons
    document.querySelector(".button-wrapper").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-left")) {
            toggleOverlayModal();
            toggleGameScreen();
            toggleMenuScreen();
            resetBoard();
            game.resetScores();
        } 
        if (event.target.classList.contains("btn-right")) {
            toggleOverlayModal();
            resetBoard();
        }
    });
}









